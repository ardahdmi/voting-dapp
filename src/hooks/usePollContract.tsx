declare const window: { ethereum: any };

import { contractABI, contractAddress } from "../utils/constants";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import {
  IAddQuiz,
  IAddUser,
  QuizStruct,
  UserStruct,
} from "../domain/interfaces/PollContract.interface";

export const usePollContract = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [allQuizes, setAllQuizes] = useState([]);

  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
        await getAllUsers();
        await getAllQuizes();
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPollContract = async (
    isSigner: boolean = false
  ): Promise<ethers.Contract> => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return isSigner
      ? new ethers.Contract(contractAddress, contractABI, signer)
      : new ethers.Contract(contractAddress, contractABI, provider);
  };

  const addUser = async (props: IAddUser): Promise<void> => {
    const { ethereum } = window;
    const { nickname, isQuestioner, isVoter } = props;
    try {
      if (ethereum) {
        const pollContract = await getPollContract(true);
        await pollContract.deployed();

        const addUserTxn = await pollContract.addUser(
          nickname,
          isVoter,
          isQuestioner
        );
        console.log("Mining...", addUserTxn.hash);

        await addUserTxn.wait();
        console.log("Mined -- ", addUserTxn.hash);
        await getAllUsers();
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async () => {
    const { ethereum } = window;

    try {
      if (ethereum) {
        const pollContract = await getPollContract();
        await pollContract.deployed();

        const users: UserStruct[] = await pollContract.getAllUsers();
        console.log(users);

        const usersCleaned = users.map((user) => {
          return {
            nickname: user.nickname,
            userAddress: user.userAddress,
          };
        });
        setAllUsers(usersCleaned);
        return usersCleaned;
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addQuiz = async (props: IAddQuiz) => {
    const { ethereum } = window;
    const { title, questions, answers } = props;
    try {
      if (ethereum) {
        const pollContract = await getPollContract(true);
        await pollContract.deployed();

        const addUserTxn = await pollContract.addQuiz(
          title,
          questions,
          answers
        );

        await addUserTxn.wait();
        await getAllQuizes();
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllQuizes = async () => {
    const { ethereum } = window;

    try {
      if (ethereum) {
        const pollContract = await getPollContract();
        await pollContract.deployed();

        const quizes: QuizStruct[] = await pollContract.getAllQuizes();
        console.log(quizes);

        const quizesCleaned = quizes.map((quiz) => {
          return {
            title: quiz.title,
            questions: quiz.questions,
            answers: quiz.answers,
            isOpen: quiz.isOpen,
          };
        });
        setAllQuizes(quizesCleaned);
        return quizesCleaned;
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeUserRole = async () => {};
  const vote = async () => {};
  const endQuizWithResults = async () => {};

  //todo sebebini anlamadim
  useEffect(() => {
    isWalletConnected();
  }, []);

  return { addUser, allUsers, isWalletConnected, addQuiz, allQuizes };
};

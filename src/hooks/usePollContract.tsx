import { contractABI, contractAddress } from "../utils/constants";
import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react";
import {
  IAddChangeUser,
  IAddQuiz,
  IVote,
  QuizStruct,
  UserStruct,
} from "../domain/interfaces/PollContract.interface";
declare const window: { ethereum: any };

export const usePollContract = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  const [allQuizes, setAllQuizes] = useState([]);

  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
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

  useEffect(() => {
    isWalletConnected();
  }, []);

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

  const addUser = async (props: IAddChangeUser): Promise<void> => {
    const { ethereum } = window;
    const { nickname, isQuestioner, isVoter } = props;
    try {
      if (ethereum) {
        const pollContract = await getPollContract(true);
        await pollContract.deployed();

        const addUserTxn = await pollContract.addUser(
          nickname,
          "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199",
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

  const isNewUser = async (): Promise<boolean> => {
    const { ethereum } = window;

    try {
      if (ethereum) {
        const pollContract = await getPollContract();
        await pollContract.deployed();

        const condition = await pollContract.isNewUser(currentAccount);
        return condition;
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
        const provider = new ethers.providers.Web3Provider(ethereum);
        const pollContract = new ethers.Contract(
          contractAddress,
          contractABI,
          provider
        );
        await pollContract.deployed();

        const users: UserStruct[] = await pollContract.getAllUsers();

        const usersCleaned = users.map((user) => {
          return {
            nickname: user.nickname,
            userAddress: user.userAddress,
            isVoter: user.isVoter,
            isQuestioner: user.isQuestioner,
            isApproved: user.isApproved,
          };
        });
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

  const changeUserRole = async (props: IAddChangeUser) => {
    const { ethereum } = window;
    const { nickname, isVoter, isQuestioner } = props;
    try {
      if (ethereum) {
        const pollContract = await getPollContract(true);
        await pollContract.deployed();

        const addUserTxn = await pollContract.changeUserRole(
          nickname,
          isVoter,
          isQuestioner
        );

        await addUserTxn.wait();
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const vote = async (props: IVote) => {
    const {} = props;
  };
  const endQuizWithResults = async () => {};

  //todo sebebini anlamadim

  return {
    addUser,
    getAllUsers,
    isWalletConnected,
    addQuiz,
    changeUserRole,
    isNewUser,
  };
};

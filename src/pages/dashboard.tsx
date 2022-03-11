declare const window: { ethereum: any };
import { useEffect } from "react";
import { usePollContract } from "../hooks/usePollContract";

const IndexPage = () => {
  const { addUser, allUsers, isWalletConnected, addQuiz, allQuizes } =
    usePollContract();

  return (
    <div className="flex flex-col items-center gap-y-5 bg-red-300">
      <button
        onClick={() =>
          addUser({ nickname: "arda", isVoter: true, isQuestioner: true })
        }
        className="bg-gray-400"
      >
        Add user
      </button>
      <div className="">{allUsers.length}</div>
      <button
        onClick={() =>
          addQuiz({
            title: "arda",
            questions: ["neden"],
            answers: [["oyle", "mi"]],
          })
        }
        className="bg-gray-400"
      >
        Add quiz
      </button>
      <div className="mt-12">{JSON.stringify(allQuizes)}</div>
    </div>
  );
};

export default IndexPage;

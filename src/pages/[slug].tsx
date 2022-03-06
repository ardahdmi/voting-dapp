declare const window: { ethereum: any };
import { useEffect } from "react";
import { usePollContract } from "../hooks/usePollContract";

const IndexPage = () => {
  const { addUser, allUsers, isWalletConnected } = usePollContract();

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
    </div>
  );
};

export default IndexPage;

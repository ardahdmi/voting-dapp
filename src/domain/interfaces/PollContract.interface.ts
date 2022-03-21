export interface UserStruct {
  nickname: string;
  userAddress: string;
  isVoter: boolean;
  isQuestioner: boolean;
  isApproved: boolean;
}

export interface QuizStruct {
  title: string;
  ownerAddress?: string;
  questions: string[];
  answers: string[][];
  exists: boolean;
  isOpen: boolean;
}

export interface IAddChangeUser {
  nickname: string;
  isVoter: boolean;
  isQuestioner: boolean;
}

export interface IAddQuiz {
  title: string;
  questions: string[];
  answers: string[][];
}

export interface IVote {}

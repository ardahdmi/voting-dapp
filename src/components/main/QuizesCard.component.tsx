import { SectionTitle } from "../shared/Text";
import { AddQuizDisclosure } from "./AddQuiz.component";

export const QuizesCard = () => {
  return (
    <div className="relative flex h-full flex-col px-2 md:px-6">
      <SectionTitle text="All quizes" />
      <AddQuizDisclosure>arda</AddQuizDisclosure>
    </div>
  );
};

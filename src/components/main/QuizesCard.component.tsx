import { QuizesIcon } from "../../public/icons/Quizes.icon";
import { DashboardItemTitle } from "../shared/DashboardItemTitle.component";
import { SectionTitle } from "../shared/Text";
import { AddQuizDisclosure } from "./AddQuiz.component";

export const QuizesCard = () => {
  return (
    <div className="relative flex h-full flex-col px-2 md:px-6">
      <DashboardItemTitle icon={<QuizesIcon />} sectionName="quizes" />
      <SectionTitle text="All quizes" />
      <AddQuizDisclosure>
        <p className="text-white">arda</p>
      </AddQuizDisclosure>
    </div>
  );
};

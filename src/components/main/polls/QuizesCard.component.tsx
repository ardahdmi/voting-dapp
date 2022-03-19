import { QuizesIcon } from "../../../public/icons/Quizes.icon";
import { DashboardItemTitle } from "../../shared/DashboardItemTitle.component";
import { AddPollDisclosure } from "./AddPollDisclosure";

export const QuizesCard = () => {
  return (
    <div className="relative flex h-full flex-col px-2 md:px-6">
      <DashboardItemTitle icon={<QuizesIcon />} sectionName="quizes" />

      <div className="grid h-full grid-rows-3 bg-black px-6 pt-6">
        <AddPollDisclosure>
          <p className="text-white">arda</p>
        </AddPollDisclosure>
        <div className="row-span-1 bg-red-300">a</div>
        <div className="row-span-1 bg-red-300">a</div>
      </div>
    </div>
  );
};

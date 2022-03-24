import { PollsIcon } from "../../../public/icons/Polls.icon";
import { DashboardItemTitle } from "../../shared/DashboardItemTitle.component";
import { PollRegistrationCard } from "./PollRegistrationCard.component";
import { AddPollDisclosure } from "./AddPollDisclosure";

export const PollsCard = () => {
  return (
    <div className="dashboard-item-wrapper">
      <DashboardItemTitle icon={<PollsIcon />} sectionName="quizes" />

      <div className="grid h-full grid-rows-3  px-3 pt-6 md:px-6">
        <AddPollDisclosure>
          <PollRegistrationCard />
        </AddPollDisclosure>
        <div className="row-span-2">a</div>
      </div>
    </div>
  );
};

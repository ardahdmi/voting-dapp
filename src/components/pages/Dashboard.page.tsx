declare const window: { ethereum: any };

import { ContactForm } from "../forms/Contact.form";
import { PollsCard } from "../main/polls/PollsCard.component";
import { UsersCard } from "../main/users/UsersCard.component";

export const DashboardPage = () => {
  return (
    <section className="dashboard-wrapper">
      <div className="dashboard-card grid w-full grid-cols-2 grid-rows-6  md:grid-cols-5">
        <div className="dashboard-item col-span-2 row-span-4 md:col-span-3 md:row-span-6 lg:col-span-3">
          <PollsCard />
        </div>
        <div className="dashboard-item col-span-2 row-span-2 md:col-span-2 md:row-span-3 lg:col-span-2">
          <UsersCard />
        </div>
        <div className="dashboard-item col-span-2 row-span-1 hidden md:col-span-2 md:row-span-3 md:block lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

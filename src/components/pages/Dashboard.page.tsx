declare const window: { ethereum: any };

import { ContactForm } from "../forms/ContactForm.component";
import { QuizesCard } from "../main/QuizesCard.component";
import { UsersCard } from "../main/UsersCard.component";

export const DashboardPage = () => {
  return (
    <section className="dashboard-wrapper">
      <div className="dashboard-card grid w-full grid-cols-2 grid-rows-6 lg:grid-cols-5">
        <div className="dashboard-item col-span-2 row-span-4 lg:col-span-3 lg:row-span-6">
          <QuizesCard />
        </div>
        <div className="dashboard-item col-span-2 row-span-2 md:col-span-1 md:row-span-3 lg:col-span-2">
          <UsersCard />
        </div>
        <div className="dashboard-item col-span-2 row-span-1 hidden md:col-span-1 md:row-span-3 md:block lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

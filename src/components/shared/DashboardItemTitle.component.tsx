import clsx from "clsx";
import {
  DashboardItemTitleProps,
  DashboardSectionType,
} from "../../domain/interfaces";
import { UsersIcon } from "../../public/icons/Users.icon";

export const DashboardItemTitle: React.FC<DashboardItemTitleProps> = ({
  icon,
  sectionName,
}) => {
  const getSectionColorTheme = (sectionName: DashboardSectionType) => {
    if (sectionName == "users") {
      return "text-purple-200 after:border-r-purple-400/25";
    } else if (sectionName == "quizes") {
      return "text-orange-200 after:border-r-orange-400/25";
    }
  };

  return (
    <div
      className={clsx("card-title w-full", getSectionColorTheme(sectionName))}
    >
      <div
        className={clsx(
          "absolute right-[6px] top-[6px] rounded-lg bg-white/20 p-1 opacity-60 shadow-lg md:right-1 md:top-1"
        )}
      >
        {icon}
      </div>
    </div>
  );
};

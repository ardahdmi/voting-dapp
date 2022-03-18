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
      className={clsx(
        "card-title absolute right-1 top-1 rounded-lg bg-white/20 p-1 opacity-60 shadow-lg",
        getSectionColorTheme(sectionName)
      )}
    >
      {icon}
    </div>
  );
};

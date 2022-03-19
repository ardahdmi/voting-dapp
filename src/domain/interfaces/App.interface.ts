import { FieldValues, LiteralUnion, UseFormRegister } from "react-hook-form";
import { UserStruct } from "./PollContract.interface";

export interface ISectionTitle {
  text: string;
  className?: any;
}

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
  className?: any;
  disabled?: boolean;
}

export interface DisclosureButtonProps extends ButtonProps {
  type?: "on" | "off";
}

export type CustomErrorTypes = "registered" | "none";

export type DashboardSectionType = "quizes" | "users";

export interface DashboardItemTitleProps {
  icon: JSX.Element;
  sectionName: DashboardSectionType;
}
export interface InputErrorProps {
  customError: CustomErrorTypes | undefined;
  className?: string;
  type: LiteralUnion<
    | "required"
    | "maxLength"
    | "minLength"
    | "pattern"
    | "onBlur"
    | "onChange"
    | "value"
    | "min"
    | "max"
    | "validate"
    | "valueAsNumber"
    | "valueAsDate"
    | "setValueAs"
    | "shouldUnregister"
    | "disabled"
    | "deps",
    string
  >;
}

export interface InputCheckboxProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
}

export interface UserFormFieldProps {
  nickname: string;
  isVoter: boolean;
  isQuestioner: boolean;
}

export interface HeaderItemProps {
  to: string;
  text: string;
}

export interface CardTagProps {
  icon?: JSX.Element;
  text: string;
  className?: string;
}

export interface SingleUserCardProps {
  user: UserStruct;
  number: number;
}

export interface UserInfoTagProps {
  isVoter: boolean;
  isQuestioner: boolean;
}

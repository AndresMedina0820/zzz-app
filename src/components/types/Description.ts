import { ReactNode } from "react";

export interface DescriptionProps {
  classNameText?: string;
  classNameButton?: string;
  text: string | ReactNode;
  onClick: () => void;
}

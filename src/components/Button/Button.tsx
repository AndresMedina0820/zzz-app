import { ButtonProps } from "../types";
import "./style.css";

export const Button = (props: ButtonProps) => {
  return (
    <button className={`bg-primary ${props.className}`} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

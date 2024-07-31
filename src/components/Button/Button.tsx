import { ButtonProps } from "../types";
import "./style.css";

export const Button = (props: ButtonProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

import { Button } from "../";
import { DescriptionProps } from "../types";

export const Description = (props: DescriptionProps) => {
  return (
    <>
      <p className={props.classNameText}>
        {props.text}
      </p>
      <Button
        className={ props.classNameButton }
        text="Comenzar"
        onClick={props.onClick}
      />
    </>
  )
}

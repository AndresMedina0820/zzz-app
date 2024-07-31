import { ListProps } from "../types"
import "./styles.css";

export const List = (props: ListProps) => {
  return (
    <ul className="list__ul">
      { props.options.map((option) => (
        <li key={option.highlightedText} className="list__li">
          <span>{option.text}</span>
          <h3>{option.highlightedText}</h3>
        </li>
      )) }
    </ul>
  )
}

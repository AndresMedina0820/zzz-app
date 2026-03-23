import { useState } from "react";
import { ListProps } from "../types"
import { ModalDatepicker } from "../ModalDatepicker/ModalDatepicker"
import "./styles.css";

export const List = (props: ListProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleClick = (id: number) => {
    console.log('id', id);
    setIsOpenModal(true);
  }

  const onClose = () => {
    setIsOpenModal(false);
  }

  return (
    <>
      <ul className="list__ul">
        { props.options.map((option) => (
          <li key={option.id} className="list__li" onClick={() => handleClick(option.id)}>
            <span>{option.text}</span>
            <h3>{option.highlightedText}</h3>
          </li>
        )) }
      </ul>
      <ModalDatepicker isOpen={isOpenModal} onClose={onClose} />
    </>
  )
}

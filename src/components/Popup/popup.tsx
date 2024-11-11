import { FC, useState } from "react";
import style from "./style.module.css";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { changeTaskActive } from "../../../store/taskReduser";

type Props = {
  id: number;
  isModal: boolean;
  onClick: () => void;
};

const Popup: FC<Props> = ({ id, isModal, onClick }) => {
  if (!isModal) {
    return null;
  }
  const dispatch = useDispatch();
  const { tasks } = useTypeSelector((state) => state.tasks);

  const [text, setText] = useState("");
  const handleHange = (e: string) => {
    setText(e);
  };

  const handleClikc = () => {
    tasks[id].name = text;
    dispatch(changeTaskActive(tasks));
    onClick();
    alert("Отредактировано");
  };
  const modalRoot = document.getElementById("modal") as HTMLElement;

  return createPortal(
    <div className={style.popupBox}>
      <div className={style.box}>
        <span className={style.closeIcon} onClick={onClick}>
          x
        </span>
        <div>
          <h1>Редактирование тикета!</h1>
          <br />
          <label htmlFor="title">Напишите название задачи</label>
          <input
            type="text"
            placeholder="Выйти на зарубеж"
            value={text}
            onChange={(e) => handleHange(e.target.value)}
          />
          <br />
          {/* <label htmlFor="title">Опишите название задачи</label> */}
          <br />
          <button onClick={handleClikc}>Отредактировать</button>
        </div>
      </div>
    </div>,
    //где распологать
    modalRoot
  );
};

export default Popup;

import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "./hooks/useTypeSelector";
import {
  addTaskActive,
  changeTaskActive,
  removeTaskActive,
} from "../store/taskReduser";
import { incrementActive } from "../store/countReduser";
import Popup from "./components/Popup/popup";

function App() {
  const [inputName, setInputName] = useState("");
  const [number, setNumber] = useState(0);
  const [filter, setFilter] = useState([] as any[]);
  const [isFilter, setIsFilter] = useState(false);
  const dispatch = useDispatch();
  const { tasks } = useTypeSelector((state) => state.tasks);

  const { count } = useTypeSelector((state) => state.count);

  //popup
  const [isModal, setModal] = useState(false);

  const handleClickPopup = (id: number) => {
    setModal(true);
    setNumber(id);
  };

  const addTask = () => {
    const newTask = {
      id: count,
      isReady: false,
      name: inputName,
    };
    setInputName("");
    dispatch(addTaskActive(newTask));
    dispatch(incrementActive(count));
  };
  const addFilter = () => {
    if (isFilter) {
      setIsFilter(false);
    } else {
      setIsFilter(true);
      // console.log(tasks.filter((task) => task.isReady != false));
      setFilter(tasks.filter((task) => task.isReady != false));
    }
  };

  const startTask = (id: number) => {
    tasks[id].isReady = "true";
    dispatch(changeTaskActive(tasks));
  };
  const deletTask = (e: number) => {
    console.log(e);
    dispatch(removeTaskActive(e));
  };

  useEffect(() => {}, [tasks]);
  return (
    <div className="App">
      <input
        type="text"
        value={inputName}
        name="To"
        id="To"
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={addTask}>Add ToDo</button>
      <button onClick={addFilter}>Filter</button>

      {isFilter ? (
        <div className="Grid">
          {filter.map((task, index) => (
            <div className={task.isReady ? "cardTrue" : "card"} key={index}>
              {task.name}
              <button
                className={task.isReady ? "disab" : ""}
                disabled={task.isReady ? true : false}
                onClick={() => startTask(task.id)}
              >
                Готово
              </button>
              <button onClick={() => handleClickPopup(task.id)}>Сменить</button>
              <button onClick={() => deletTask(task.id)}>Удалить</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="Grid">
          {tasks.map((task, index) => (
            <div className={task.isReady ? "cardTrue" : "card"} key={index}>
              {task.name}
              <button
                className={task.isReady ? "disab" : ""}
                disabled={task.isReady ? true : false}
                onClick={() => startTask(task.id)}
              >
                Готово
              </button>
              <button onClick={() => handleClickPopup(task.id)}>Сменить</button>
              <button onClick={() => deletTask(task.id)}>Удалить</button>
            </div>
          ))}
        </div>
      )}
      <div id="modal"></div>
      <Popup id={number} isModal={isModal} onClick={() => setModal(false)} />
    </div>
  );
}

export default App;

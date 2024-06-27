import React, { useState } from "react";
import "./TodoList.css";
import TodoInput from "./TodoInput";

const TodoList = () => {
  const [checkboxid, setCheckboxid] = useState([]);
  const [activebox, setActivebox] = useState("");
  const [todos, setTodos] = useState({
    job: [],
    home: [],
    hobbie: [],
  });

  const changeCheckboxid = (i) => {
    if (checkboxid.includes(`${activebox}${i}`)) {
      setCheckboxid(checkboxid.filter((el) => el !== `${activebox}${i}`));
    } else {
      setCheckboxid([...checkboxid, `${activebox}${i}`]);
    }
  };

  return (
    <div className="page">
      <TodoInput
        todos={todos}
        setTodos={setTodos}
        setActivebox={setActivebox}
      />
      <div className="todoList">
        {activebox &&
          todos[activebox].map((el, i) => (
            <div key={i} className="todoCase">
              <input
                type="checkbox"
                id="checkbox"
                onChange={() => changeCheckboxid(i)}
                checked={checkboxid.includes(`${activebox}${i}`)}
              />
              <label
                className={`listItem ${
                  checkboxid.includes(`${activebox}${i}`) ? "todoCompleted" : ""
                }`}
                htmlFor="checkbox"
              >
                {el}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;

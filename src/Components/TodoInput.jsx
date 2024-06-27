import React, { useState } from "react";

const TodoInput = ({ todos, setTodos, setActivebox }) => {
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");

  const changeTodos = () => {
    if (todos[category] && inputValue) {
      setTodos({ ...todos, [category]: [...todos[category], [inputValue]] });
    }
    setInputValue("");
  };

  const changeCategory = (value) => {
    setCategory(value);
    setActivebox(value);
  };

  return (
    <>
      <div className="categoryTodos">
        {Object.keys(todos).map((el, i) => (
          <button
            key={i}
            className={`categoryButton ${el === category ? el : ""}`}
            onClick={() => changeCategory(el)}
          >
            {el.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="inputCase">
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="button" onClick={changeTodos}>
          Добавить
        </button>
      </div>
    </>
  );
};

export default TodoInput;

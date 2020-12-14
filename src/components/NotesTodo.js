import React, { useState, useContext } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { GlobalContext } from "../context/GlobalState";

export const NotesTodo = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(GlobalContext);

  const handleInput = (e) => {
    if (text.length < 28) {
      setText(e.target.value);
    }
  };

  const submitInput = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100000),
      text,
      completed: false,
      edit: false,
    };

    if (newTodo.text) {
      addTodo(newTodo);
    }
    setText("");
  };

  return (
    <form className="notes-form" onSubmit={submitInput}>
      <input type="text" placeholder="Add a Note..." className="note-input" value={text} onChange={handleInput} required />
      <button className="notes-submit">
        <BsFillPlusSquareFill size={20} className="notes-icon" />
      </button>
    </form>
  );
};

export default NotesTodo;

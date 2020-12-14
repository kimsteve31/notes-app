import React, { useContext, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import { GlobalContext } from "../context/GlobalState";

export const NoteItem = ({ item }) => {
  const { deleteTodo, toggleTodo, toggleEdit, updateTodo } = useContext(GlobalContext);
  const [editText, setEditText] = useState("");

  const handleEdit = (e) => {
    if (editText.length < 28) {
      setEditText(e.target.value);
    }
  };

  const submitEdit = (eve) => {
    eve.preventDefault();
    updateTodo(item.id, editText ? editText : item.text);
  };

  return (
    <>
      {item.edit ? (
        <li>
          <form className="item" onSubmit={submitEdit}>
            <input type="text" placeholder={item.text} className="note-input edit-input" value={editText} onChange={handleEdit} />
            <button className="button">
              <BiCheckCircle size={25} className="check-circle" />
            </button>
          </form>
        </li>
      ) : (
        <li className={item.completed ? "item active" : "item"}>
          <p className="item-name" onClick={() => toggleTodo(item.id)}>
            {item.text}
          </p>
          <div className="icon-buttons">
            <button className="button">
              <FaEdit className="edit-icon" onClick={() => toggleEdit(item.id)} />
            </button>
            <button className="button" onClick={() => deleteTodo(item.id)}>
              <BsTrash className="delete-icon" />
            </button>
          </div>
        </li>
      )}
    </>
  );
};

export default NoteItem;

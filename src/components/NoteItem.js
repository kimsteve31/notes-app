import React, { useContext } from 'react'
import { BsTrash } from 'react-icons/bs'
import { GlobalContext } from '../context/GlobalState'

export const NoteItem = ({ item }) => {
  const { deleteTodo } = useContext(GlobalContext);

  return (
    <li className="item">
      <p className="item-name">{item.text}</p>
      <button className="delete-button" onClick={() => deleteTodo(item.id)} ><BsTrash className="delete-icon"/></button>
    </li>
  )
}

export default NoteItem
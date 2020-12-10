import React, { useContext } from 'react'
import { NoteItem } from './NoteItem'
import { GlobalContext } from '../context/GlobalState'

export const NotesList = () => {
  const { listTodo } = useContext(GlobalContext);
  
  return (
    <ul className="list">
      {listTodo.map(todo => (<NoteItem key={todo.id} item={todo} />))}
    </ul>
  )
}

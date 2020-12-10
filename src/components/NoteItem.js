import React from 'react'

export const NoteItem = ({ item }) => {
  return (
    <li className="item">
      <p className="item-name">{item.text}</p>
    </li>
  )
}

export default NoteItem
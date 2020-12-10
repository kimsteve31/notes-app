import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  listTodo: [
  ]
}

// Create Context
export const GlobalContext = createContext(initialState);
//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTodo(newTodo) {
    dispatch({
      type: 'ADD_TODO',
      payload: newTodo
    });
  }

  return (
    <GlobalContext.Provider 
      value={{ 
        listTodo:state.listTodo,
        addTodo
      }}> 
      {children} 
    </GlobalContext.Provider>);
}
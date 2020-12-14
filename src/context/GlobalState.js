import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  listTodo: [],
};

// Create Context
export const GlobalContext = createContext(initialState);
//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTodo(newTodo) {
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
  }

  function deleteTodo(deleteId) {
    dispatch({
      type: "DELETE_TODO",
      payload: deleteId,
    });
  }

  function toggleTodo(todoId) {
    dispatch({
      type: "TOGGLE_TODO",
      payload: todoId,
    });
  }

  function toggleEdit(todoId) {
    dispatch({
      type: "TOGGLE_EDIT",
      payload: todoId,
    });
  }

  function updateTodo(todoId, todoText) {
    dispatch({
      type: "UPDATE_TODO",
      payload: [todoId, todoText],
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        listTodo: state.listTodo,
        addTodo,
        deleteTodo,
        toggleTodo,
        toggleEdit,
        updateTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

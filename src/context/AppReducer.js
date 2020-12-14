const data = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        listTodo: [action.payload, ...state.listTodo],
      };
    case "DELETE_TODO":
      return {
        ...state,
        listTodo: state.listTodo.filter((item) => item.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        listTodo: state.listTodo.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)),
      };
    case "TOGGLE_EDIT":
      return {
        listTodo: state.listTodo.map((todo) => (todo.id === action.payload ? { ...todo, edit: true } : todo)),
      };
    case "UPDATE_TODO":
      return {
        listTodo: state.listTodo.map((todo) => (todo.id === action.payload[0] ? { ...todo, text: action.payload[1], edit: false, completed: false } : todo)),
      };
    default:
      return state;
  }
};

export default data;

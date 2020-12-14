const data = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        listTodo: [action.payload, ...state.listTodo]
      }
    case 'DELETE_TODO':
      return {
        ...state,
        listTodo: state.listTodo.filter(item => item.id !== action.payload)
      }
    case 'TOGGLE_TODO':
      return {
        listTodo: state.listTodo.map(todo => (todo.id === action.payload) ? {...todo, completed: !todo.completed } : todo)
      }
    default: 
      return state;
  }
}

export default data;

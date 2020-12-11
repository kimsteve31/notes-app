export default (state, action) => {
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
    default: 
      return state;
  }
}
export default (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        listTodo: [action.payload, ...state.listTodo]
      }
    default: 
      return state;
  }
}
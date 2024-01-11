export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COMPONENT':
      console.log(action.payload);
      return {
        ...state,
        activeComponents: action.payload,
      };
    case 'REMOVE_COMPONENT':
      console.log(action.payload);
      return {
        ...state,
        activeComponents: action.payload,
      };
    default:
      return state;
  }
};

export const initialState = {
  components: ['today', 'quote', 'bookmarks', 'search', 'todos', 'news'],
  activeComponents: ['today', 'quote'],
};

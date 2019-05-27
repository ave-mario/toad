const initialState = {
  posts: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'PRODUCTS_REQUESTED':
      return {
        ...state,
        isLoading: false
      };
    case 'POSTS_FETCHED':
      return {
        posts: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}

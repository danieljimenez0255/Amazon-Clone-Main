//reducer allows us to make changes to the data layer
// always listening
//initial state
export const initialState = {
  basket: [],
  loginEmail: "Hello Guest",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      return { ...state, basket: action.items };
    case "DISPLAY_EMAIL":
      return { ...state, loginEmail: action.userEmail };
    case "EMPTY_BASKET":
      return { ...state, basket: [] };
    default:
      return {
        state,
      };
  }
};

export default reducer;

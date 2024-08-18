// cartReducer.js
import { SET_CART_ON, SET_CART_OFF } from "../actions/actionType";

const initialState = {
  cartIsOpen: false,
};

const cartDisReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ON:
      return {
        ...state,
        cartIsOpen: true,
      };
    case SET_CART_OFF:
      return {
        ...state,
        cartIsOpen: false,
      };
    default:
      return state;
  }
};

export default cartDisReducer;

// cartActions.js
import { SET_CART_ON, SET_CART_OFF } from "./actionType";

export const setCartOn = () => {
  return {
    type: SET_CART_ON,
  };
};

export const setCartOff = () => {
  return {
    type: SET_CART_OFF,
  };
};

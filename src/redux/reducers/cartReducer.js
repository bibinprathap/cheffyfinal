import produce from "immer";
import * as types from "../actions/counter/counterType";

const cartCounter = (state = 0, { type }) => {
  switch (type) {
    case "CART_ITEM_ADD":
      console.log("Adding.!",state+1,state)
      console.log(window.localStorage.getItem("cartitems"))
      return state+1;
    case "CART_ITEM_REMOVE":
      return state - 1;
    default:
      return state;
  }
};

export const cartReducer = produce(cartCounter);

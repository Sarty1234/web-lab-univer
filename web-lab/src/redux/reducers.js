
import { ADD_CART_ITEM, REMOVE_CART_ITEM } from './actions';

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
      
    case REMOVE_CART_ITEM:
      console.log(`ac payload ${action.payload}`);
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload),
      };
      
    default:
      return state;
  }
};
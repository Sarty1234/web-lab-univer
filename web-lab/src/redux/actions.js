
export const ADD_CART_ITEM = 'cart/ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM';

export const addCartItem = (itemWithDates) => ({
  type: ADD_CART_ITEM,
  payload: itemWithDates,
});

export const removeCartItem = (index) => ({
  type: REMOVE_CART_ITEM,
  payload: index,
});
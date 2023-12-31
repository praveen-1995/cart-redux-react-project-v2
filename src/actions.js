const DECREASE = 'DECREASE';
const INCREASE = 'INCREASE';
const CLEAR_CART = 'CLEAR_CART';
const REMOVE = 'REMOVE';
const GET_TOTALS = 'GET_TOTALS';
const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';

const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};

export {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
  removeItem,
};

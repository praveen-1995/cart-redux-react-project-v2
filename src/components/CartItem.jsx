import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  DECREASE,
  INCREASE,
  // REMOVE,
  TOGGLE_AMOUNT,
  removeItem,
} from '../actions';

const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  // increase,
  // decrease,
  toggle,
}) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={remove}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => {
            toggle('increase');
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={amount === 1 ? remove : () => toggle('decrease')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
  remove: PropTypes.func,
  increase: PropTypes.func,
  decrease: PropTypes.func,
  toggle: PropTypes.func,
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    remove: () => dispatch(removeItem(id)),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
    toggle: (type) =>
      dispatch({ type: TOGGLE_AMOUNT, payload: { id, amount, type } }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

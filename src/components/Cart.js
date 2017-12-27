import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout, removeFromCart } from "../actions";
import { getTotal, getCartProducts, getTax } from "../utils";
import Tally from "../components/Tally";

import styles from './product.css';

import CartItems from './CartItems';

const CartContainer = ({ tax,className, products, total}) =>
  <article className={className} style={{paddingLeft:'4rem'}}>
    <h2 style={{fontFamily:'raleway'}}>Cart</h2>

    <CartItems />

    <Tally
      products={products}
      total={total}
      tax={tax}
      />
  </article>;

const mapStateToProps = state => {
  return ({  
  products: getCartProducts(state),
  total: getTotal(getCartProducts(state)),
  tax: getTax(getCartProducts(state)),
  })
};



export default connect(mapStateToProps, { })(CartContainer);

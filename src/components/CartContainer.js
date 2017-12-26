import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout, removeFromCart } from "../actions";
import { getTotal, getCartProducts, getTax } from "../utils";
import Cart from "../components/Cart";

import styles from './product.css';

import TableCart from './TableCart';

const CartContainer = ({ tax,className, products, total}) =>
  <article className={className} style={{paddingLeft:'4rem'}}>
    <h2 style={{fontFamily:'raleway'}}>Cart</h2>

    <TableCart />

    <Cart
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

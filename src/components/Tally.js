import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Tally  = ({ products, tax, total  }) => {
  const hasProducts = products.length > 0
  const style = {
    top: {
      fontFamily: 'roboto',
      fontSize: '1.3rem',
    }
  }
  if (hasProducts)
    return (
      <div style={style.top}>
        <p>Total: {total }(inc {tax} tax)</p>
        <Link to="/checkout">
          <button>checkout</button>
        </Link>
      </div>     
    )
    return (
      <div>
        <em>Your cart is currently empty.</em>
      </div>
  )
}


export default Tally

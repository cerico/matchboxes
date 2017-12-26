import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './products.css';
import { addToCart } from '../actions'
import ProductItem from './ProductItem';
import CartContainer from './CartContainer'

const Products = ({products, addToCart}) =>  {

  const style = {
    general: {
      display: 'flex'
    }
  }

  return(
    <div className={styles.grid} style={style.general}>
      <CartContainer className={styles.product}/>
        {products.length > 0 ? 
          products.map((product, index) =>
            <ProductItem product={product} onAddToCartClicked={() => addToCart(product.id)} key={index}/>) 
        : null
      }
    </div> 
  ) 
}

const mapStateToProps = (state) => {
  return ({
      products: state.products,
    })
}

export default connect(mapStateToProps, {addToCart} )(Products);

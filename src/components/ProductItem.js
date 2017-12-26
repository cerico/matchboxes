import React from 'react';
import { Link } from 'react-router-dom';
import styles from './products.css';

const ProductItem = ({product, onAddToCartClicked}) => {

  product.url = `/products/${product.id}`
  return (
    <article className={styles.product}>
      <Link to={product.url}>
        <img className={styles.image} src={product.image}/>  
      </Link> 
      <div className={styles.info}>
        <Link to={product.url}>
          <h1 className={styles.title}>{product.name}</h1>
          <h1 className={styles.title}>{product.price}</h1>
        </Link>   
      </div>
      <div className={styles.info}>
        <button onClick={() => onAddToCartClicked(product.id)}>
          Add to cart
        </button>
        <span style={{visibility:'hidden'}}className={styles.title}>{product.name}</span>
      </div>
    </article>
  )
}

export default ProductItem
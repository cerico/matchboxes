import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTotal, getCartProducts, getTax } from "../utils";
import Tally from "./Tally";

import CartItems from './CartItems';

const style = {
  field:  {
    width: '90%',
    float: 'left',
    padding: '0.45em',
  },
  blank:{
    opacity:0,position:'absolute',top:0,width:'100%'
  },
  input: {
    WebkitBoxShadow: '0 0 0 1px #d9d9d9',
    boxShadow: '0 0 0 1px #d9d9d9',
    width: '100%',
    padding: '0.94em 0.8em',
    borderRadius: '4px',
    border:'none'
  }
}

const CheckoutContainer = ({ tax, className, products, total }) =>
<div>
  <article className={className} style={{'width':'50%','float':'left',padding:'1%'}}>
    <div style={{fontFamily:'raleway'}}>

      <div>
        <h2>Shipping address</h2>
      </div>

      <div>
        <div>
          <div style={{...style.field,...{width:'50%'}}}>
            <input style={style.input} placeholder="First name" type="text"/>
          </div>
          <div  style={{...style.field,...{width:'50%'}}}>
            <input style={style.input}  placeholder="Last name" type="text"/>
          </div>        
          <div style={{...style.field,...{width:'75%'}}}  >
            <input style={style.input}  placeholder="Address" type="text"/>
          </div>      
          <div style={{...style.field,...{width:'25%'}}}>
            <input style={style.input} placeholder="Apt, suite, etc. (optional)" type="text"/>
          </div>
          <div style={{...style.field,...{width:'60%'}}} >
            <input style={style.input}  placeholder="City" type="text"/>
          </div>       
          <div style={{...style.field,...{width:'40%'}}} >
            <input style={style.input} placeholder="Postcode"  type="text"/>
          </div>
        </div>
      </div>   
    </div> 
  </article>
  <article className={className} style={{'width':'40%','float':'right'}}>
    <h2 style={{fontFamily:'raleway'}} >Cart</h2>

    <CartItems total={total}/>
    <Tally
      products={products}
      total={total}
      tax={tax}
    />
  </article>;
</div>

const mapStateToProps = state => {
  return ({  
  products: getCartProducts(state),
  total: getTotal(getCartProducts(state)),
  tax: getTax(getCartProducts(state)),
  })
};

export default connect(
  mapStateToProps,
  null
)(CheckoutContainer);

import React from "react";
import { connect } from "react-redux";
import { removeFromCart, updateCart } from "../actions";
import { getCartProducts,getTotal, getTax  } from "../utils";
import MdHighlightOff from 'react-icons/lib/md/highlight-off';

class TableCart extends React.Component {
  constructor(props) {
    super(props); 
  }

  handleChange(event,productId){
 
    if (parseInt(event.target.value) > -1 ){
      this.props.updateCart(productId,event.target.value)
    } 
   
  }

  render() {

    const style = {
      top: {
        fontFamily: 'roboto',
        fontSize: '1.3rem',
      }
    }
    return (
      <table style={style.top}>
        <tbody>
          {this.props.products.map((e,i) => <tr key={i}>
            <td>
              <div>
                <div>
                  <img style={{'height':'40px'}} src={e.image}/>
                </div>
              </div>
            </td>
            <td>
              <span>{e.name}</span>
            </td>
            <td>
              <input style={{width:'20px'}} value={e.count || 0} onChange={(evt) => this.handleChange(evt,e.id)} />
            </td>
            <td>
              <span>{e.price*e.count}</span>
            </td>
            <td>
              <span><MdHighlightOff size={15} onClick={() => this.props.removeFromCart(e.id)}/></span>
            </td>
          </tr> )}  
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(getCartProducts(state)),
  tax: getTax(getCartProducts(state))
});

export default connect(
  mapStateToProps,
  { removeFromCart , updateCart, getTotal, getTax }
)(TableCart);

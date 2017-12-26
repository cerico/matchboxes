import _ from 'lodash';

const compute = function(a,b) {
  return a+b;
};

export const getTotal = items => {
  return items.map(item => item.count * item.price).reduce(compute,0).toFixed( 2 )
}

export const getTax = items => {
  return items.map(item => item.count * (item.price*(item.tax/100))).reduce(compute,0).toFixed( 2 );
}

export const getCartProducts = state => {
  let products = cartItems(state.products,state.cart.addedIds)
  return products
}

export const selectProduct = (products,id) => {
  const product = products.filter(product => product.id === parseInt(id))[0]
  return product;
};

function countInArray(array, value) {
  return array.reduce((n, x) => n + (x === value), 0);
}

export const cartItems = (products,ids) => {
  let collection = products.filter(product => {
    if (ids.includes(product.id)){
      product.count = countInArray(ids,product.id)
      return product
    }
    return false
  }
)
  return collection;
};


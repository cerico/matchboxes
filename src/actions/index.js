const API_URL = `https://s3.eu-west-2.amazonaws.com/io1937/json/matchboxes.json`
const AsPI_URL = `http://localhost:3404/public/matchboxes.json`
import fetch from 'node-fetch';

export const getProducts = () => {
  const endpoint = `${API_URL}`
  return dispatch => {
    return fetch(endpoint)
    .then(response => response.json())
    .then(res => dispatch(setProducts(res.products)))
    .catch(error => console.log(error))
  }
}

export const setProducts = products => {
  return {
    type: 'GET_PRODUCTS_SUCCESS',
    products,
  }
}

export const addToCart = productId => ({
  type: 'ADD_TO_CART',
  productId
})

export const updateCart = (productId,amount) => {
  if (amount == 0){
    return ({
      type: 'EMPTY_CART',
      productId
    })
  }
  return ({
    type: 'UPDATE_CART',
    productIds: Array(parseInt(amount)).fill(productId)
  })
}

export const removeFromCart = productId => ({
  type: 'REMOVE_FROM_CART',
  productId
})







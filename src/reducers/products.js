const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return action.products;
    default:
      return state;
  }
}

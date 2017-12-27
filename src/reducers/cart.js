import { omit, reject } from 'lodash';

const initialState = {
  addedIds: []
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case 'EMPTY_CART':
      return omit(state, action.productId)
    case 'UPDATE_CART':
      let newState = [...reject(state , a => a===action.productIds[0]), ...action.productIds ]
      return newState
    case 'ADD_TO_CART':
      return [ ...state, action.productId ]
    case 'REMOVE_FROM_CART':
      let index = state.indexOf(action.productId);
      if (state.length === 1) {
        return []
      }
      else if (index > -1) {
        let changedState = [ ...state.slice(0,state.indexOf(action.productId)),
        ...state.slice(state.indexOf(action.productId)+1)];
      return changedState
      }
      return state
    default:
      return state
  }
}

const cart = (state = initialState, action) => {
      return {
        addedIds: addedIds(state.addedIds, action)
      }
}

export default cart

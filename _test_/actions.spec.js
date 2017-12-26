
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import { getProducts, updateCart } from '../src/actions/index';

it('calls request and success actions if the fetch response was successful', () => {
  const store = mockStore();
  return store.dispatch(getProducts())
    .then(() => {
      
      const expectedActions = store.getActions();
      console.log(expectedActions[0].type)
      expect(expectedActions.length).toBe(1);
      expect(expectedActions[0].type).toEqual('GET_PRODUCTS_SUCCESS');
    })
});
// it('updateCart should create UPDATE_CART action', () => {
//   expect(updateCart(2,4)).toEqual({
//     type: 'UPDATE_CART',
//     productIds: [2,2,2,2]
//   })
// });

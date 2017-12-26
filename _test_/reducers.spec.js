import cart from '../src/reducers/cart';
import { omit, reject } from 'lodash';

it('updateCart should create UPDATE_CART action', () => {
  expect(cart({addedIds:[1,4,5]},{type:'UPDATE_CART',productIds:[2]})).toEqual({
    addedIds: [1,4,5,2 ]
  })
});

it('updateCart should create REMOVE_FROM_CART action', () => {
  expect(cart({addedIds:[1,4,5]},{type:'REMOVE_FROM_CART',productId:4})).toEqual({
    addedIds: [1,5 ]
  })
});


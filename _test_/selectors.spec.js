import {cartItems} from '../src/utils'

it('updateCart should create UPDATE_CART action', () => {
  expect(cartItems([{id:1,name:'a'},{id:4,name:'b'},{id:12,name:'y'}],[1,4,1])).toEqual([{count:2,id:1,name:'a'},{count:1,id:4,name:'b'}])
})
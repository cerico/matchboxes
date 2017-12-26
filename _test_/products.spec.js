'use strict'

jest.unmock('../src/components/ProductItem');

import React from 'react';
import {mount,shallow,configure} from 'enzyme';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import ProductItem from '../src/components/ProductItem';
import Adapter from 'enzyme-adapter-react-16';
import { addToCart } from '../src/actions'
configure({ adapter: new Adapter() })

window.requestAnimationFrame = jest.fn()



describe('<ProductItem />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<ProductItem  product={{id:1}} />);
    expect(wrapper.find('article').length).toBe(1);
  });
})

import React from 'react'
import { shallow } from 'enzyme'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  MemoryRouter
} from 'react-router-dom';
import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() })

import App from '../src/containers/App'
import { Provider } from "react-redux";

import Products from '../src/components/Products';
import Layout from 'charles-lamb-layout';

import  store  from '../src/store.js';

describe('<App />', () => {

it('renders without crashing', () => {
    const div = document.createElement('main');
    ReactDOM.render(<Provider store={store}>
      <App />
  </Provider>, div);
});

test('invalid path should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/random' ]}>
      <Provider store={store}>
      <App />
  </Provider>
    </MemoryRouter>
  );
  expect(wrapper.find(Layout)).toHaveLength(1);
  expect(wrapper.find(Products)).toHaveLength(0);
});

test('valid path should go to products', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/products' ]}>
      <Provider store={store}>
      <App />
  </Provider>
    </MemoryRouter>
  );
  
});

test('layout exists'), () => {
  expect(wrapper.find(Layout)).toHaveLength(1);
}


})

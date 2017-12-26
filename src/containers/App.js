import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const classNames = require('classnames');

import Product from '../components/Product';
import Products from '../components/Products';
import Checkout from '../components/Checkout';
import { getProducts } from '../actions/index';
import Layout from 'charles-lamb-layout';

class App extends React.Component  {

  componentWillMount () {
    this.props.getProducts()
  }
  
  render(){

    const links = [
      {path:'/',title:"home",key:1},
      {path:'/checkout',title:"checkout",key:2}]

    return (
      <Router>
        <main>
          <Layout links={links}/>
          <div>
            <Switch>
              <Route exact path="/"  component={Products}/>
              <Route path="/products/:id" component={Product} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

export default connect(null, {getProducts})(App);


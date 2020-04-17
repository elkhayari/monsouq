import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
//import Product from './components/Product'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'
import LoginModal from './components/Login/LoginModal'
import SignUpModal from './components/Login/SignUpModal'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render(){
    return (
     <React.Fragment>

        <Navbar /> {/*displyed on all pages*/}
        
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route path='/login' component={LoginModal} />
          <Route path='/signup' component={SignUpModal} />
    
          <Route  component={Default} />
        </Switch>

        <Modal />
  
     </React.Fragment>
    );
  }
 
}

export default App;

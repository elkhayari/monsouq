import React from 'react';
import {Link }from 'react-router-dom';
import PaypalButton from './PaypalButton'

export default function CartTotals({value, history}){
    const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
    
        return ( 
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitaliz text-right'>
                            <Link to='/'>
                                <button className='btn btn-outline-danger text-uppercase mb-5 px-5'
                                        onClick={() => clearCart()}>
                                    Clear
                                </button>
                            </Link>
                            <h5>
                                <span className='text-title'>
                                    subtotal : 
                                </span>
                                <strong>
                                    $ {cartSubtotal}
                                </strong>
                            </h5>
                            <h5>
                                <span className='text-title'>
                                    Tax : 
                                </span>
                                <strong>
                                    $ {cartTax}
                                </strong>
                            </h5>
                            <h5>
                                <span className='text-title'>
                                    Total : 
                                </span>
                                <strong>
                                    $ {cartTotal}
                                </strong>
                            </h5>
                            
                            <PaypalButton totalAmount={cartTotal} clearCart={clearCart} history={history} /> 
                        </div>
                    </div>

                </div>
            </React.Fragment>
         );
    
}
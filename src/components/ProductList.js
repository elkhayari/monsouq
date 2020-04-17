import React, { Component } from 'react';
import Product from './Product'
import ProductItem from './ProductItem'
import Title from './Title'

import {ProductConsumer} from '../context'

class ProductList extends Component {
   
    render() { 
       
        return (
            <React.Fragment>
                <div className='py-5'>
                     <div className='container'>
                         <Title name='our' title='products' />
                          <div className='row'>
                              <ProductConsumer>
                                  {value =>{
                                    return value.products.map( product =>{
                                        return <ProductItem key={product._id} product={product} value={value} />
                                    })
                                  }}
                              </ProductConsumer>
                          </div> 
                     </div>
                </div>
            </React.Fragment>
            
                
            
          );
    }
}
 
export default ProductList;
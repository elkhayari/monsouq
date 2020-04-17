import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ButtonAddRemove from './ButtonAddRemove'

import { ProductConsumer } from '../context'

class Product extends Component {

    render() {
        const { _id, title, img, price, inCart } = this.props.product;
        

        return (
            <ProductWrapper className='product col-6 mx-auto col-md-6 col-lg-3 my-3'>

                <ProductConsumer>
                    {(value) => (
                        <div className='product-container'>
                            <div className="card text-black mb-3">
                                <div className="card-header">{title}
                                </div>
                                <div className="product-img-container card-body">
                                    <div className='product-img' style={{ backgroundImage: `url(${img})` }} >
                                    </div>
                                </div>
                                <div className="card-footer">
                                        <div className='row'>
                                        <div className='col-lg-12 col-sm-10 offset-md-2' >
                                        <ButtonAddRemove key={_id}  product={this.props.product} value={value} />
                                        </div>
                                        <div className='col-lg-12 col-sm-6 offset-md-3'>
                                            
                                                <span>{price} -Dh/Kg</span>
                                        </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    )}

                </ProductConsumer>
            </ProductWrapper>

        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
     {/* new */}
      .card{
          border-color: transparent;
          transition: all 1s linear;
          max-w_idth: 18rem;
          max-height: 20rem;
      }

      .card-header{
          font-size: 1.3rem;
      }

      .product-img-container{
          overflow:h_idden;
          background-position:center;
          padding: .8rem;
          height: 12rem;
      }

      .product-img{
        w_idth:100%;
        height:100%;
        min-w_idth:80%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }

      .card-footer .price{
        font-size: 1rem;
        box-shadow: 2px 5px 10px #888888;
        border-radius: 50% 0px 0px 0px;

      }

      {/* end new */}
     


      .card-footer{
          background: #bada55;
          border-top: transparent;
          transition: all 0.5s linear;
      }

      &:hover{
          .card{
              border: 0.04rem sol_id rgba(0,0,0,0.2);
              box-shadow: 5px 5px 5px 0px #8bb63c;
          }
          .card-footer{
            background: #8bb63c;
          }
      }

      .product-img{
        transition: all 0.5s linear;
      }

      .product-container:hover .product-img{
          transform: scale(1.1);
      }

      .cart-btn{
          position: absolute;
          bottom: 0;
          right:0;
          padding: 0.2rem 0.4rem;
          background: var(--lightBlue);
          border:none;
          color: var(--mainWhite);
          font-size: 1.4rem;
          border-radius: 0.6rem 0 0 0;
          transform: translate(100%, 100%);
          transition: all 0.5s linear;
      }

      .img-container:hover .cart-btn{
        transform: translate(0, 0);
      }

      .cart-btn:hover{
          cursor: pointer;
          color: var(--mainBlue);
      }

`

export default Product;
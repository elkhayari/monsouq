import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom'
import { ButtonContainer } from './styledComponents/Button'

class Details extends Component {
    state = {}
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct
                    return (
                        <div className='container py-6'>
                            {/*Product Title */}
                            <div className='row'>
                                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            {/*Product info */}
                            <div className='row'>
                                <div className='col-10 col-md-6-mx-auto text-center text-slanted my-3'>
                                    <img src={img} alt='product' className='img-fluid' />
                                </div>
                                <div className='col-10 col-md-6-mx-auto text-center text-slanted text-capitalize my-3'>
                                    <h1>model : {title}</h1>
                                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                        made by : <span className='text-uppercase'>{company}</span>
                                    </h4>
                                    <h4 className='text-blue'>
                                        <strong>
                                            price: <span>$</span> {price}
                                        </strong>
                                    </h4>
                                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                        some info about product:
                                         </p>
                                    <p className='text-muted lead'>
                                        {info}
                                    </p>

                                    {/*buttons */}
                                    <div>
                                        <Link to='/' className='pr-4'>
                                            <ButtonContainer> back to products </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart
                                                         disabled={inCart ? true : false}
                                                         onClick={() => {
                                                             value.addToCart(id);
                                                             value.openModal(id);
                                                         }}
                                        >
                                            {inCart ? 'in cart': 'add to cart'}
                                        </ButtonContainer>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;
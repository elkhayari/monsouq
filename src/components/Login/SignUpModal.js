import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { ProductConsumer } from '../../context'
import { ButtonContainer } from '../styledComponents/Button'
import { Link } from 'react-router-dom';

class SignUpModel extends Component {
    constructor(props) {
        super(props);

        // to use this
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeShippingAddress = this.onChangeShippingAddress.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            shippingAddress: '',
            email: '',
            password: '',

            isValid: false,

        }
    }

    /* onChange */
    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }
    onChangeShippingAddress(e) {
        this.setState({
            shippingAddress: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    /* end onChange */

    /* Grabs the value stored in state */
    /** create an endpoint to store that on a data base */
    onSubmit() {

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            shippingAddress: this.state.shippingAddress,
            email: this.state.email,
            password: this.state.password
        }

        console.log('user info', user);

        axios.post('https://backend2020server.herokuapp.com/api/account/signup', user)
            .then(res => {
                console.log('res', res);
                if (res.data.success) {
                    this.setState({
                        firstName: '',
                        lastName: '',
                        shippingAddress: '',
                        email: '',
                        password: '',
                        signUpError: res.data.message,
                        isValid: true
                    })
                } else {
                    this.setState({
                        signUpError: res.data.message,
                        isValid: false
                    })
                }

            }
            ).catch(err => {
                console.log('client', err)
                this.setState({
                    signUpError: err,
                    isValid: false
                })
                //Promise.reject('Sign Up Failed')
            })


        //when you submit a user ther 
        // this.setState({

        // })
    }

    render() {

        console.log('isValid after change state', this.state.isValid)
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpenSignUp, handleCloseModalSignUp } = value;
                    console.log('close the model ', modalOpenSignUp)

                    if (modalOpenSignUp) {
                        if (!this.state.isValid) {
                            return (
                                <ModalContainer>
                                    <div className='container'>
                                        <div className='row'>
                                            <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
                                                <div className='close-btn'>
                                                    <button className='close-btn'
                                                        onClick={() => handleCloseModalSignUp(true)}
                                                    >
                                                        <i className="fas fa-window-close"></i>
                                                    </button>

                                                </div>
                                                <span>close the model {this.state.isValid} !!</span>
                                                <form >
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputFirstname">First Name</label>
                                                        <input type="text" className="form-control" id="exampleInputFirstname"
                                                            required
                                                            value={this.state.firstName}
                                                            onChange={this.onChangeFirstName}
                                                        />

                                                        <label htmlFor="exampleInputLastName">Last Name</label>
                                                        <input type="text" className="form-control" id="exampleInputLastName"
                                                            required
                                                            value={this.state.lastName}
                                                            onChange={this.onChangeLastName}
                                                        />

                                                        <label htmlFor="exampleInputAddress">Shipping address</label>
                                                        <input type="text" className="form-control" id="exampleInputAddress"
                                                            required
                                                            value={this.state.shippingAddress}
                                                            onChange={this.onChangeShippingAddress}
                                                        />


                                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                            required
                                                            value={this.state.username}
                                                            onChange={this.onChangeEmail}
                                                        />
                                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Password</label>
                                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                                            required
                                                            value={this.state.password}
                                                            onChange={this.onChangePassword} />
                                                    </div>
                                                    <div className="form-group form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" htmlFor="exampleCheck1" >Check me out</label>
                                                    </div>
                                                    <button type="submit"
                                                        value='Login user'
                                                        className="btn btn-primary"
                                                        onClick={() => {
                                                            this.onSubmit()
                                                            //handleCloseModalSignUp(this.state.isValid)
                                                        }}
                                                    >Submit
                                                </button>
                                                </form>


                                            </div>
                                        </div>
                                    </div>

                                </ModalContainer>
                            )
                        }else{
                            return(
                                <div>valid form
                                <button type='button'
                                 className="btn btn-primary"
                                 onClick={() => {
                                this.onSubmit()
                                handleCloseModalSignUp(true)
                            }}
                        >close
                    </button>
                            </div>
                            )
                           
                            
                        }
                    } else {
                        return null
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default SignUpModel;

const ModalContainer = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: rgba(0, 0, 0, .3);
     display: flex;
     align-items: center;
     justify-content: center;

     #modal{
          background: var(--mainWhite);
     }

     .close-btn{
         position:absolute;
         top:0.2rem;
         right:0.5rem;
         color: red;
     }
     
`
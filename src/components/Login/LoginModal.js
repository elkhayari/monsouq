import React, { Component } from 'react';
import styled from 'styled-components'
import { ProductConsumer } from '../../context'
import { ButtonContainer } from '../styledComponents/Button'
import { Link } from 'react-router-dom';

class LoginModal extends Component {
    constructor(props) {
        super(props);

        // to use this
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
            
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    onChangePassword(p){
        this.setState({
            password: p.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        console.log('user info', user);

       // axios.post('http://192.168.1.28:5000/users/add', user)
         //    .then(res => console.log(res.data))
             
       
        //when you submit a user ther 
        this.setState({
            username:'',
            password: ''
        })
    }

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpenLogin, closeModalLogin } = value;
                   

                    if (!modalOpenLogin) {
                        return null
                    } else {
                        return (
                            <ModalContainer>
                                <div className='container'>
                                    <div className='row'>
                                        
                                        <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
                                        <div className='close-btn'>
                                        <button className='close-btn'
                                               onClick={() => closeModalLogin() }
                                               >
                                        <i className="fas fa-window-close"></i>
                                        </button>
                                       
                                        </div>
                                            <form onSubmit={this.onSubmit}>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                           required 
                                                           value = {this.state.username}
                                                           onChange={this.onChangeUsername}
                                                    />
                                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                                           required 
                                                           value = {this.state.password}
                                                           onChange={this.onChangePassword} />
                                                </div>
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" for="exampleCheck1" >Check me out</label>
                                                </div>
                                                <button type="submit"
                                                        value='Login user'
                                                    className="btn btn-primary"
                                                    onClick={() => closeModalLogin()}
                                                >Submit
                                                </button>
                                            </form>

                                            
                                        </div>
                                    </div>
                                </div>

                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default LoginModal;

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
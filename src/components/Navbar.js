import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo_monsouq01.png';
import styled from 'styled-components'
import { ButtonContainer } from './styledComponents/Button';

import { ProductConsumer } from '../context'

class Navbar extends Component {

    render() {
        return (
            <div className="container-navbar">
                <ProductConsumer>
                    {(value) => (
                        <React.Fragment>
                            <NavWrapper>
                                <div className="py-1 first-nav">
                                    <div className="container">
                                        <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                                            <div className="col-lg-12 d-block">
                                                <div className="row d-flex">
                                                    <div className="col-md pr-4 d-flex topper align-items-center text-sm-right">
                                                        <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
                                                        <i className="fas fa-mobile-alt mr-1"></i>
                                                        <span className="text">+ 212 610 70 60 05</span>
                                                    </div>
                                                    <div className="col-md pr-4 d-flex topper align-items-center text-sm-right">
                                                        <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                                                        <i className="fas fa-paper-plane mr-2"></i>
                                                        <span className="text">elkhayari@monsouq.com</span>
                                                    </div>
                                                    <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                                        <Link to='/cart' className='ml-auto'>
                                                            <ButtonContainer className="mr-2" cart_navbar>
                                                                <span>
                                                                    <i className='fas fa-cart-plus ' />
                                                                </span>
                                                     my cart
                                                </ButtonContainer>
                                                        </Link>

                                                        <Link to='/login'>
                                                            <ButtonContainer className="mr-1"
                                                            > sign in
                                                                <i className="fas fa-user"></i>
                                                            </ButtonContainer>
                                                        </Link>
                                                        <Link to='/signup'>
                                                            <ButtonContainer className="mr-1"
                                                                onClick={() => {
                                                                    value.openModalSignUp();
                                                                }}> sign up
                                                                <i className="fas fa-user"></i>
                                                            </ButtonContainer>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </NavWrapper>

                            <NavWrapper>
                                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                                    <div className="container">
                                        <div className="logo-container navbar-brand">
                                            <Link to='/' >
                                                <img src={logo} alt='store-logo' className='navbar-brand' />
                                            </Link>
                                        </div>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span> Menu
	                        </button>

                                        <div className="collapse navbar-collapse" id="navbarResponsive">
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                                                <li className="nav-item"><a href="about.html" className="nav-link">Vegetables</a></li>
                                                <li className="nav-item"><a href="blog.html" className="nav-link">Fruitst</a></li>
                                                <li className="nav-item"><a href="contact.html" className="nav-link">Meat & Seafood</a></li>
                                                <li className="nav-item"><a href="contact.html" className="nav-link">Backery</a></li>
                                                <li className="nav-item"><a href="contact.html" className="nav-link">Beauty</a></li>

                                            </ul>

                                        </div>
                                    </div>
                                </nav>



                            </NavWrapper>
                        </React.Fragment>
                    )}
                </ProductConsumer>
            </div>

        );
    }
}

const NavWrapper = styled.nav`
      .first-nav{
          background: #82ae46 !important;
      } 

      .navbar-nav li{
          padding-right: 1.3rem ;
      }

      .nav-link{
          font-size: 1.1rem
      }
      
      .nav-link{
          color: var(--mainWhite) !important;
          font-size: 1.3rem;
          text-transform: capitalize;
      }

      .container-navbar{
        position: relative;
      }

      .navbar-brand img{
        width:8.5rem;
        height:7.9rem;
      }

      .logo-container{
          position: absolute;
          z-index:99;
          left:0;
          top:-3.8rem;
      }


@media (max-width: 992px) {
    .logo-container{
        position: absolute;
        z-index:-99 !important;
    }
    .navbar-brand img{
        width:5rem;
        height:5rem;
      }
  }

  @media (max-width: 768px) {}

  @media (max-width: 576px) {}

  



`


export default Navbar;


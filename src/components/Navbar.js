import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo_monsouq01.png';
import styled from 'styled-components'
import { ButtonContainer } from './styledComponents/Button';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="container-navbar">
                
                <NavWrapper>
                    <div class="py-1 first-nav">
                        <div class="container">
                            <div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
                                <div class="col-lg-12 d-block">
                                    <div class="row d-flex">
                                        <div class="col-md pr-4 d-flex topper align-items-center text-sm-right">
                                            <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
                                            <i class="fas fa-mobile-alt mr-1"></i>
                                            <span class="text">+ 212 610 70 60 05</span>
                                        </div>
                                        <div class="col-md pr-4 d-flex topper align-items-center text-sm-right">
                                            <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
                                            <i class="fas fa-paper-plane mr-2"></i>
                                            <span class="text">elkhayari@monsouq.com</span>
                                        </div>
                                        <div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                            <Link to='/cart' className='ml-auto'>
                                                <ButtonContainer className="mr-2" cart_navbar>
                                                    <span>
                                                        <i className='fas fa-cart-plus ' />
                                                    </span>
                                                     my cart
                                                </ButtonContainer>
                                            </Link>
                                            <Link to='/account'>
                                                <ButtonContainer className="mr-1" cart_navbar>
                                                <i class="fas fa-user"></i>
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
                    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                        <div class="container">
                            <div class="logo-container navbar-brand">
                                <Link to='/' >
                                    <img src={logo} alt='store-logo' className='navbar-brand' />
                                </Link>
                            </div>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	                             <span class="navbar-toggler-icon"></span> Menu
	                        </button>

                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav mr-auto">
                                <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                                    <li class="nav-item"><a href="about.html" class="nav-link">Vegetables</a></li>
                                    <li class="nav-item"><a href="blog.html" class="nav-link">Fruitst</a></li>
                                    <li class="nav-item"><a href="contact.html" class="nav-link">Meat & Seafood</a></li>
                                    <li class="nav-item"><a href="contact.html" class="nav-link">Backery</a></li>
                                    <li class="nav-item"><a href="contact.html" class="nav-link">Beauty</a></li>
                                    
                                </ul>

                            </div>
                        </div>
                    </nav>

                    
                  
                </NavWrapper>
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

    .navbar-toggler{
        color:red !important; 
        margin-left:30rem !important;
    }
   
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


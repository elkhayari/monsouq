import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';
import axios from 'axios'


const UserLoginContext = React.createContext();
// Provider
// Consumer

class UserLoginProvider extends Component {

    state = {
        user: [],
        modalSignUpOpen:false,
       
    }

    componentDidMount(){
        this.setUser()
    }
    // fetch product from data.js file
    // to do
    setUser = () => {
        let temProducts = [];
        console.log('url', process.env.REACT_APP_BACKEND)
        axios.get(process.env.REACT_APP_BACKEND)
             .then(response => {
                 this.setState(() => {
                     
                     return { products: [...response.data]}
                 })
             })
             .catch(error =>{
                 console.log('fetch data error: ', error)
             })
       
    }

 

   

   
       
    

    // MODAL sign up
    openModalSignUp = () =>{
        console.log('model signe up open')
        this.setState(()=>{
            return { modalSignUpOpen : true};
        })
    }

    closeModalSigneUp = () =>{
        console.log('model signe up close')
        this.setState(() => {
            return {modalSignUpOpen : false};
        })
    }

    
    render() { 
        return ( 
            <UserLoginContext.Provider val={
                {
                    ...this.state,
                    openModalSignUp: this.openModalSignUp,
                    closeModalSigneUp: this.closeModalSigneUp
                
                }
                }>
                {this.props.children}
            </UserLoginContext.Provider>

            
          );
    }
}

const UserLoginConsumer = UserLoginContext.Consumer;


 export { UserLoginProvider, UserLoginConsumer};
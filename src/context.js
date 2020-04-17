import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';
import axios from 'axios'


const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen:false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
        modalOpenLogin: false,
        modalOpenSignUp: false
    }

    componentDidMount(){
        this.setProducts()
    }
    // fetch product from data.js file
    setProducts = () => {
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
        /*
        storeProducts.forEach(item => {
            const singleItem = {...item};
            temProducts = [...temProducts, singleItem];
        });
        this.setState(()=>{
            console.log('temp arry', temProducts)
            return { products: temProducts };
            
        },
       
        );*/
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id )
        return product
    }

    handelDetail = (id) => {
           console.log('hello from handle detail')
           const product = this.getItem(id)
           this.setState(() => {
               return { detailProduct: product }
           })
        }

    addToCart = (id) => {
       let tempProducts = [...this.state.products];
       const index = tempProducts.indexOf(this.getItem(id));
       const product = tempProducts[index];
       
       product.inCart = true;
       product.count = 1;
       const p = product.price;
       product.total = p * product.count;
       this.setState(() => {
           return { products: tempProducts, 
                    cart:[...this.state.cart, product]}
       }, 
       () => {
           this.addTotals();
       })
    }

    openModal = (id) =>{
        const product = this.getItem(id)
        this.setState(()=>{
            return {modalProduct:product, modalOpen:true}
        })
    }

    closeModal = () =>{
        this.setState(() => {
            return {modalOpen : false};
        })
    }
       
    increment = (id) =>{
        console.log('inc')
        let tempList = [...this.state.products]
        const selectedProduct = tempList.find(item => item.id === id)

        const index = tempList.indexOf(selectedProduct);
        const product = tempList[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        
            this.setState(() =>{
                if((!this.state.cart.includes(product))){
                    return{
                        cart : [...this.state.cart, selectedProduct]
                    }
                }
                else{
                    return null
                }
                
            },() => {
               
                this.addTotals();
            })
        
        
    }

    decrement = (id) => {
        let tempCart =[...this.state.cart];
        let tempList = [...this.state.products]
        const selectedProduct = tempList.find(item => item.id === id)

        const index = tempList.indexOf(selectedProduct);
        const product = tempList[index];

        product.count = product.count - 1;
        if( product.count === 0){
            this.removeItem(id)
        }else {
            product.total = product.count * product.price;
            this.setState(() =>{
            return{
                cart : [...tempCart]
            }
        },() => {
            this.addTotals();
        })
        }

       
    }
    
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart =[...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id)

        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.total = 0;
        removedProduct.count = 0;

        this.setState(()=>{
            return {
                cart: tempCart,
                product: tempProducts
            }
        }, ()=>{
            this.addTotals();
        })
    }

    clearCart = () => {
        this.setState(() => {
            return {
                cart:[]
            }
        }, 
        () => {
              this.setProducts();
              this.addTotals();
              }
            )
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total))
        const temTax = subTotal * 0.2;
        const tax = parseFloat(temTax.toFixed(2));
        const total = subTotal + tax;

        this.setState(()=>{
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    // MODAL LOGIN
    openModalLogin = () =>{
        console.log('model Login')
        this.setState(()=>{
            return { modalOpenLogin:true}
        })
    }

    closeModalLogin = () =>{
        this.setState(() => {
            return {modalOpenLogin : false};
        })
    }

    // MODAL sign up
    openModalSignUp = () =>{
        console.log('model signe up open')
        this.setState(()=>{
            return { modalOpenSignUp : true};
        })
    }

    handleCloseModalSignUp = (isLoading) =>{
        console.log('model signe up close', isLoading)
        if(isLoading){
            this.setState(() => {
                return {modalOpenSignUp : false};
            })
        }else{
            this.setState(() => {
                return {modalOpenSignUp : true};
            })

        }
       
    }

    
    render() { 
        return ( 
            <ProductContext.Provider value={
                {
                    ...this.state,
                    handelDetail: this.handelDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,

                    // To handle open close models
                    openModalLogin: this.openModalLogin,
                    closeModalLogin: this.closeModalLogin,
          
                    openModalSignUp: this.openModalSignUp,
                    handleCloseModalSignUp: this.handleCloseModalSignUp
                
                }
                }>
                {this.props.children}
            </ProductContext.Provider>

            
          );
    }
}

const ProductConsumer = ProductContext.Consumer;


 export { ProductProvider, ProductConsumer};
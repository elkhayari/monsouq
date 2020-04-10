import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'


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
        cartTotal: 0
    }

    componentDidMount(){
        this.setProducts()
    }
    // fetch product from data.js file
    setProducts = () => {
        let temProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            temProducts = [...temProducts, singleItem];
        });
        this.setState(()=>{
            console.log('temp arry', temProducts)
            return { products: temProducts };
            
        },
       
        );
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
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count+ 1;
        product.total = product.count * product.price;

        this.setState(() =>{
            return{
                cart : [...tempCart]
            }
        },() => {
            this.addTotals();
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

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
                    clearCart: this.clearCart
                
                }
                }>
                {this.props.children}
            </ProductContext.Provider>

            
          );
    }
}

const ProductConsumer = ProductContext.Consumer;


 export { ProductProvider, ProductConsumer};
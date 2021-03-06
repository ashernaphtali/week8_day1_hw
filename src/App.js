import React, { Component } from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Baseball from './views/Baseball';
import StPete from './views/StPete';
import Eats from './views/eats';
import Home from './views/Home';
import Shop from './views/Shop';
import SingleProduct from './views/SingleProduct';
import Cart from './views/Cart';
import Login from './views/Login';
import Register from './views/Register';



export default class Elephant extends Component {
  constructor() {
    super();
    console.log("I was created")
    this.state = {
      test: 1,
      test2: ['baseball', 'food', 'sun'],
      stuff: ['baseball', 'food', 'sun'],
      count : 0,
      products: [],
      cart : []

    } 
} 

addToCart = (product) => {
  this.setState({
    cart: this.state.cart.concat(product)
})
}
removeFromCart = (product) => {
  let newCart = [...this.state.cart];
  for (let i = newCart.length-1; i>=0; i--) {
    if (product.id === newCart[i].id) {
      newCart.splice(i,1);
      break
    }
  }
  this.setState({cart: newCart});
}
sumTotalCart = (cart) => {
  let total = 0;
  for (let i=0; i<cart.length; i++){
    total += cart[i].price
  }
   return total.toFixed(2)
};


getProducts = async () => {
  const res = await fetch("http://127.0.0.1:5000/api/shop/products");
  const data = await res.json();
  console.log(data)
  this.setState({
      products: data
  }
  )
}


addToCount() {
  this.setState({count: this.state.count + 1})
  
  }

  componentDidMount() {
    console.log('I have mounted.')
    this.getProducts()
  }

  render() {
    console.log("I rendered");
    return (
      <div>
        <Navbar cart ={this.state.cart} sumTotalCart={this.sumTotalCart}/>
          <Routes>
          <Route path='/' element ={<Home/> }/>
          <Route path='/shop' element ={<Shop products={this.state.products} addToCart={this.addToCart}/> }/>
          <Route path='/Baseball' element={<Baseball names = {this.state.stuff}/>}/>
          <Route path='/StPete' element={<StPete test3 = {this.state.stuff}/>}/>
          <Route path='/Cart' element={<Cart cart={this.state.cart} sumTotalCart={this.sumTotalCart} removeFromCart={this.removeFromCart}/>}/>
          <Route path='/shop/:productId' element={<SingleProduct addToCart={this.addToCart}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
    )
  }}
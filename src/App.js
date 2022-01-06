import React, { Component } from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Baseball from './views/Baseball';
import StPete from './views/StPete';
import Eats from './views/eats';


export default class Elephant extends Component {
  constructor() {
    super();
    this.state = {
      test: 1,
      test2: ['baseball', 'food', 'sun'],
      stuff: ['baseball', 'food', 'sun'],
      count : 0

    }

    this.addToCount = this.addToCount.bind(this);
} 

addToCount() {
  this.setState({count: this.state.count + 1})
  
  }

  render() {
    return (
      <div>
        <Navbar/>
        <h1>Welcome to Baseball in St. Pete App!</h1>

        <h2>Count : {this.state.count}</h2>

        <button onClick={this.addToCount}>
          +

        </button>
        <Routes>
          <Route path='/Baseball' element={<Baseball names = {this.state.stuff}/>}/>
          <Route path='/StPete' element={<StPete test3 = {this.state.stuff}/>}/>
          <Route path='/eats' element={<Eats/>}/>
        </Routes>
      </div>
    )
  }}
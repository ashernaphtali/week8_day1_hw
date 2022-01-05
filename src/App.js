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
      anything: ['food', 'baseball', 'sun']
    }

  }


  render() {
    return (
      <div>
        <Navbar/>
        <h1>Welcome to Baseball in St. Pete App!</h1>
        <Routes>
          <Route path='/Baseball' element={<Baseball anyother = {this.state.anything}/>}/>
          <Route path='/StPete' element={<StPete anything1 = {this.state.anything}/>}/>
          <Route path='/eats' element={<Eats/>}/>
        </Routes>
      </div>
    )
  }
}

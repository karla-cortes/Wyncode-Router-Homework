import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import ReactDOM from 'react-dom';
import './CSS/index.css';
import Home from './components/Home';
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes here
const Directory = () => {
  return (
    <nav>
      <BrowserRouter>
        <div>
          <Route path='/' component={Home}/>
          <Route exact path='/happy' component={Happy}/>
          <Route exact path='/sleepy' component={Sleepy}/>
          <Route exact path='/guilty' component={Guilty}/>
        </div>
      </BrowserRouter>
    </nav>
  )
}


ReactDOM.render( <Directory />, document.getElementById('root') );

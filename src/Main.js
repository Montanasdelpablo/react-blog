import React, { Component } from 'react';

import './App.css';

import App from './components/App.js';
import Header from './components/Header.js';

class Main extends Component {
  render() {
    return (
      
    <div className="container-fluid">
        
          <div className="row header">    
              <Header />
          </div>

        
        
        <div className="row body">
          <App />
        </div>
      
      </div>
    );
  }
}

export default Main;

import React from 'react';
import {Component} from 'react';
import Header from './Header.js';
import BlogBody from './BlogBody.js';
import '../App.css';

class BlogIndex extends Component {
  render() {
    return (
      <div className="container-fluid">
      		<div className="row header">
      			<Header />
        	</div>
        
        	<div className="row body">
        		<BlogBody />
        	</div>
      </div>
    );
  }
}

export default BlogIndex;
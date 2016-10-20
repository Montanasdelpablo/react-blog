import React from 'react';
import {Component} from 'react';
import Header from './Header.js';
import '../App.css';

class SingleBlog extends Component {
  render() {
    return (
      <div className="single-blog">
      	<Header />
      	This is a single blog post.
      </div>
    );
  }
}

export default SingleBlog;
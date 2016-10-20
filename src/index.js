import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';


import './index.css';

import Main from './Main.js';
import BlogIndex from './components/BlogIndex.js';
import SingleBlog from './components/SingleBlog.js';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/"> 
		<IndexRoute component={Main}> </IndexRoute>
    </Route>
    <Route path="/blog">
    	<IndexRoute component={BlogIndex}></IndexRoute>
    	<Route path="/blog/:blogid" component={SingleBlog}> </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

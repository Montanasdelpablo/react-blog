import React from 'react';
import {Component} from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="col-sm-12">
      	<div className="row">
        	        	
				<div className="pos-f-t">
				      <div className="collapse" id="navbar-header">
				        <div className="container-fluid bg-inverse p-1" style={{color: '#fff'}}>
				          <h3>Collapsed content</h3>
				          <p>Toggleable via the navbar brand.</p>
				        </div>
				      </div>
				      <div className="navbar navbar-light bg-faded navbar-static-top">
				        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header" aria-expanded="false" aria-label="Toggle navigation"></button>
				      </div>
    			</div>
        	

        </div>

          
       </div>
    );
  }
}

export default Header;
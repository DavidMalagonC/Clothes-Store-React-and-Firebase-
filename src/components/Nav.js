import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
	render(){
		return(
			<nav className="navbar navbar-danger bg-danger">
			 <Link to="/home" className="link"><h2 className="text-primary"> <span className="badge badge-pill badge-primary">Tu closet <img src="img/icon.png" width="25px"/></span></h2></Link>
			 <i className="fas fa-search"> </i>
			</nav>
		)
	}
} 

export default Nav;
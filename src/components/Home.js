import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
	render(){
		return(
			<div>
			<h1> Vende tus productos </h1>
			<h3> ¿Cómo quieres publicar?</h3>
			<div className="row">
			<div className="col-md-4">
			<Link  to={{pathname:'/Category', state: 1 }} className="link"> <img src="img/woman.jpg" width="60%"  className="img-fluid img-circle" alt="woman"/> </Link>
			<br/>
			<label> Mujer</label>
			</div>
			<div className="col-md-4">
			<Link  to={{pathname:'/Category', state: 2 }} className="link"> <img src="img/men.jpg" width="60%" className="img-fluid img-circle" alt="men"/> </Link>
			<br/>
			<label> Hombre</label>
			</div>
			<div className="col-md-4">
			<Link  to={{pathname:'/Category', state: 3 }} className="link"><img src="img/boy.png" width="60%" className="img-fluid img-circle" alt="boy"/>	</Link>
			<br/>
			<label> Niño</label>
			</div>
			
			</div>
			</div>
		)
	}
} 

export default Home;
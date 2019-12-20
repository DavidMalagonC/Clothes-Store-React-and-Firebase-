import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component{
	render(){
		var categories=[];
		categories[0]='Buzos';
		categories[1]='Camisetas';
		categories[2]='Chalecos';
		categories[3]='Chaquetas';
		categories[4]='Jeans';
		categories[5]='Pantalones';
		categories[6]='Pijamas';
		categories[7]='Sacos';
		categories[8]='Sacos';
		categories[9]='Traje de baño';


		if (this.props.location.state===1 || this.props.location.state==='Mujer' ){
			var gender="Mujer";
			 var url="img/woman.jpg";
			 categories[10]='Blusas';
			  categories[11]='Faldas';
			 categories[12]='Leggins';
			  categories[13]='Shorts';
			 categories[14]='Vestidos';
		}
		else if (this.props.location.state===2 || this.props.location.state==='Hombre'){
			 gender="Hombre";
			 url="img/men.jpg";
		}
		else{
			gender="Niño";
			url="img/boy.png";
		}
		const cat = categories.map((category, i) => {
		return(
			<Link  to={{pathname:'/Load', state: {category, gender} }} className="link">
			<li class="list-group-item" style={{border:'none'}}>{category}</li>
			</Link>
		);
	});
	return(
			<div style={{paddingRight: '10%', paddingLeft : '10%'}} >
			<h1> Vende tus productos</h1>
			<div class="row">
			<div class="col-md-6">
	        <img src={url} width ="50%" className="img-fluid img-circle" alt="woman"/> 
			<p>{gender}</p>
			<Link type="button" class="btn btn-danger" to="/home">
			 Volver 
			</Link>
			</div>
			<div class="col-md-5">
			{cat}
			</div>
			</div>
			</div>
			);	
	}
}
export default Category;
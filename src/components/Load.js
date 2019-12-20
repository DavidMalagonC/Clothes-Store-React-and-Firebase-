
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebaseConf from '../Firebase';

class Load extends Component{
	 constructor(props) {
	    super(props);
	    this.state = {
	      alert: false,
	      alertData: {}
	    };
	  }
	showAlert(type, message) {
		    this.setState({
		      alert: true,
		      alertData: { type, message }
		    });
		    setTimeout(() => {
		      this.setState({ alert: false });
		    }, 4000)
		  }
   	loadP(e) {
    e.preventDefault();
    
    const params = {
      gender: this.inputGender.value,
      category: this.inputCategory.value,
      talla: this.inputTalla.value,
      marca: this.inputMarca.value,
      estado: this.inputEstado.value,
      imgD: this.inputImgD.value,
      imgS: this.inputImgD.value
    };
    
    if (params.talla && params.marca && params.estado && params.imgD && params.imgS) {
      firebaseConf.database().ref('publish').push(params).then(() => {
        this.showAlert('success', 'Se ha publicado exitosamente');
      }).catch(() => {
         this.showAlert('danger', 'No ha sido posible publicar');
      });
    } else {
      this.showAlert('warning', 'Llena todos los campos');
    };
  }
	render(){
		var category = this.props.location.state.category;
		var gender = this.props.location.state.gender;

		return(
			<div  style={{padding: '30px'}}>
			 {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
          	<div className='container'>
            {this.state.alertData.message}
          	</div>
     	   </div>}
			<h1> Vende tus productos</h1>
			<div className="row">{gender} > {category}</div>
			<div className="row">
			<Link type="button" className="btn btn-danger btn-sm" to={{pathname:'/Category', state: gender }}>
			Volver 
			</Link>
			</div>
			<form onSubmit={this.loadP.bind(this)} ref='PublishForm'>
			<input type="hidden" ref={gender => this.inputGender = gender} id="gender" value={gender} />
			<input type="hidden" ref={category => this.inputCategory = category} id="category" value={category} />

			<div className="row">
			<div className="col-md-4">
			<div className="form-group">
			<label >Talla<span className="text-danger">*</span>	</label>
			<select className="form-control" ref={talla => this.inputTalla = talla}   id="talla" autoFocus required>
			<option value="">- Selecionar -</option>
			<option value="XXS">XXS </option>
			<option value="XS">XS </option>
			<option value="L">L</option>
			<option value="M">M</option>
			<option value="UNICA">Única</option>
			</select>
			</div>
			</div>
			<div className="col-md-4">
			<div className="form-group">
			<label >Marca<span className="text-danger">*</span></label>
			<select className="form-control" ref={marca => this.inputMarca = marca}   id="marca"  required>
			<option value="">- Selecionar -</option>
			<option value="Addidas">Addidas </option>
			<option value="Carolina Herrera">Carolina Herrera </option>
			<option value="H&M">H&M</option>
			<option value="Nike">Nike</option>
			<option value="Otra">Otra</option>
			</select>
			</div>
			</div>
			<div className="col-md-4">
			<div className="form-group">
			<label >Estado<span className="text-danger">*</span></label>
			<select   className="form-control" ref={estado => this.inputEstado = estado}   id="estado" required>
			<option value="">- Selecionar -</option>
			<option value="1">Nuevo con etiqueta </option>
			<option value="2">Nuevo sin etiqueta </option>
			<option value="3">Como nuevo</option>
			<option value="4">Usado</option>
			</select>
			</div>
			</div>
			</div>
			<h5> Sube fotos! </h5>
			<div className="row">
			<div className="col-md-4">
			<div className="form-group">
			<label >Imagen destacada<span className="text-danger">*</span></label>
			<input className="form-control" ref={imgD => this.inputImgD = imgD} id="imgD"placeholder="Ingresa URL" />
			</div>
			</div>
			<div className="col-md-4">
			<div className="form-group">
			<label >Imagen secundaria<span className="text-danger">*</span></label>
			<input className="form-control" ref={imgS => this.inputImgS = imgS} id="imgS" placeholder="Ingresa URL" />
			</div>
			</div>
			</div>
			<center>
			<div className="text-center">
			<div className="form-group">
			<button className="btn btn-danger btn-lg">Publicar</button>
			</div>
			</div>
			</center>
			</form>
			</div>
			)
	}
} 

export default Load;
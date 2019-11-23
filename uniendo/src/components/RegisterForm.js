import React from "react";

class IDEForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            nombre:"",
            desarrollador:"",
            lanzamiento:"",
            programado:"",
            SO:"",
            isDisable: true,
        }

    }

    handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        let returnValue = {
            [name]: value,
        }

        this.nombre_regex = new RegExp('^[a-zA-Z]+$');

        if(name === "nombre"){
            if(this.nombre_regex.test(value)){
                returnValue.isDisable = false;
            }else{
                returnValue.isDisable = true;
            }    
        }

        this.setState(returnValue);
    }
    
    render(){
        return(
            <div className="jumbotron">
                <h1>
                    Registro IDE.
                </h1>

                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Nombre IDE: </label><br/>
                    <input className="form-control" 
                        type="text" 
                        name="nombre" 
                        value={this.state.nombre}
                        onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Desarrollador: </label><br/>
                    <input className="form-control" 
                        type="text" 
                        name="desarrollador" 
                        value={this.state.desarrollador}
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Lanzamiento: </label><br/>
                    <input className="form-control" 
                        type="text" 
                        name="lanzamiento" 
                        value={this.state.lanzamiento}
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Programado en: </label><br/>
                    <input className="form-control" 
                        type="text" 
                        name="programado" 
                        value={this.state.programado}
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-form-label">SO: </label><br/>
                    <input className="form-control" 
                        type="text" 
                        name="SO" 
                        value={this.state.SO}
                        onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <button 
                        type="button" 
                        className="btn btn-info" 
                        id="submit_btn"
                        onClick={()=>{
                            this.props.onSubmit({
                                nombre: this.state.nombre,
                                desarrollador: this.state.desarrollador,
                                lanzamiento: this.state.lanzamiento,
                                programado: this.state.programado,
                                SO: this.state.SO,
                            });
                        }} 
                        disabled = {this.state.isDisable}>Agregar</button>
                </div>
            </div>
        );
    }
}

export default IDEForm;
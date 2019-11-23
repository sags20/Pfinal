import React from "react"
import RegisterForm from './RegisterForm'
import RegisterTable from './RegisterTable'
import API from '../utils/APIConstants'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            IDE_list:[],
        }
    }

    componentDidMount(){
        fetch(`${API.BaseUrl}/register`, {
            headers:{
                Accept: "application/json"
            }
        })
            .then(res=>{
                return res.json();
            })
            .then(res=>{
                console.log(res)
                this.setState({
                    IDE_list: res?res:[],
                })
            })
            .catch(err=>{
                alert("Ocurrió un error en la conexión");
            })
    }

    handleSubmit(student){
        let request = {
            method: "POST",
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json",
            },
            body: JSON.stringify({
                nombre: student.nombre,
                desarrollador: student.desarrollador,
                lanzamiento: student.lanzamiento,
                programado: student.programado,
                SO: student.SO,
            })
        }

        fetch(`${API.BaseUrl}/register`, request)
            .then(res=>{
                return res.json();
            })
            .then(res=>{
                let buffer_list = this.state.IDE_list.slice();
                this.setState({
                    IDE_list: buffer_list.concat([res.register]),
                })
            })  
            .catch(err=>{
                alert("Ocurrió un error en la conexión");
            });
    }

    handleDelete(IDE){
        let request = {
            method: "DELETE",
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json",
            },
            body: JSON.stringify({
                _id:IDE._id,
            }) 
        }

        fetch(`${API.BaseUrl}/register`, request)
            .then(res=>res.json())
            .then(res=>{
                let index = this.state.IDE_list.find(value=>{
                    return value._id === IDE._id;
                })
        
                let buffer_list = this.state.student_list.slice();
                buffer_list.splice(index, 1);
        
                this.setState({
                    IDE_list: buffer_list
                });
            })
            .catch(err=>{

            })
    }
    
    render(){
        return (
            <div className="container" style={{"marginTop":2+"em", "marginBottom":2+"em"}}>
                <RegisterForm 
                    onSubmit = {(IDE)=>{
                        this.handleSubmit(IDE);
                    }}
                />
                <RegisterTable 
                    list={this.state.IDE_list}
                    onDelete={(IDE)=>this.handleDelete(IDE)}
                    />
            </div>
        );
    }
}

export default App;
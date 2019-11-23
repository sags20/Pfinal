import React from "react"
import RegisterForm from './RegisterForm'
import RegisterTable from './RegisterTable'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            IDE_list:[],
            id_counter:0
        }
    }

    handleSubmit(IDE){
        IDE._id = this.state.id_counter;
        

        let buffer_list = this.state.IDE_list.slice();
        this.setState({
            IDE_list: buffer_list.concat([IDE]),
            id_counter: this.state.id_counter + 1,
        })
    }

    handleDelete(IDE){
        let index = this.state.IDE_list.find(value=>{
            return value._id === IDE._id;
        })

        let buffer_list = this.state.IDE_list.slice();
        buffer_list.splice(index, 1);

        this.setState({
            IDE_list: buffer_list
        });
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
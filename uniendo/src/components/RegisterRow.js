import React from "react";

class IDERow extends React.Component{
    render(){
        let IDE = this.props.student;

        return(
            <tr className="table-active">
                <th scope='row'>{IDE.nombre}</th>
                <td>{IDE.desarrollador}</td>
                <td>{IDE.lanzamiento}</td>
                <td>{IDE.programado}</td>
                <td>{IDE.SO}</td>


                <td>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={()=>{
                            this.props.onDelete();
                        }}>
                            Drop
                        </button>
                </td>
            </tr>
        );
    }
}



export default IDERow;
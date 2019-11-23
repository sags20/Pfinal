import React from "react";
import RegisterRow from "./RegisterRow";

class IDETable extends React.Component{
    render(){
        let rows = this.props.list.map(element=>{
            return <RegisterRow 
                key={element._id} 
                student={element}
                onDelete= {()=>{
                    this.props.onDelete(element);
                }}
                />
        });

        return(
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">Nombre</th>
                            <th scope="col">Dsarrollador</th>
                            <th scope="col">Lanzamiento</th>
                            <th scope="col">Programado en</th>
                            <th scope="col">SO</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IDETable;
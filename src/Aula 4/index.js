import React from "react";
import  ReactDOM  from "react-dom";

class Formulario extends React.Component{
    render (){
     return(
        <form>
            <input type="text" value={this.props.produto} />
            <input type="text" value={this.props.valor} />
        </form>
        
     );
    }
 }

 ReactDOM.render(
    <Formulario produto="Computador" valor="2000" />,
    document.getElementById('root')
 );

 ReactDOM.render(<Formulario/>, document.getElementById('root'));

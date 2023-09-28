import React from "react";
import ReactDOM from 'react-dom';

class Pagina extends React.Component{
    constructor(props){
     super(props)
     this.state = {valor:""}
     this.state = {valor2:""}

    }

    acao = (elemento) => {
        this.setState({valor : elemento.target.value})
    
    }
    acaoc = (elemento) => {
        this.setState({valor2 : elemento.target.value})
    
    }

    render() {
        return(
            <div>
                
                <h1>{this.state.valor} </h1>
                <input type="text" onChange={this.acao}/>

                <h1>{this.state.valor2} </h1>
                <input type="text" onChange={this.acaoc}/>

            </div>
            
        );
    }
    
    
}


 
ReactDOM.render(<Pagina/>,document.getElementById('root'));
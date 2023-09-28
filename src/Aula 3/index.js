import React from "react";
import  ReactDOM  from "react-dom";


/*
class Pagina extends React.Component{
    acao = () => {
        alert("Evento de clique")
    }

    render () {
        return <button onClick = {this.acao}> Clique Aqui ! </button>
    }
}

ReactDOM.render(<Pagina/>, document.getElementById('root'));
*/
/*
class Pagina extends React.Component {
    acao = (elemento) => {
        switch(elemento.target.value){
            case "Blumenau":
                alert("Cidade onde é realizada Oktoberfest")
                break
                case "Brusque":
                alert("Cidade aonde é realizada a Fenareco")
                break
                default:
                alert("Selecione uma cidade")
        }
    }
    render(){
        return(
            <select onChange={this.acao}>
                <option>Escolha uma cidade</option>
                <option>Blumenau</option>
                <option>Brusque</option>
            </select>
        );
    }
}

ReactDOM.render(<Pagina/>, document.getElementById('root'));
*/
/*
class Pagina extends React.Component{

    acao = (evento) => {
        evento.preventDefault();
        alert("enviando formulario");

    }
     render(){
        return(
            <form onSubmit={this.acao}>
            <input type= "submit" />
            </form>
        );
     }
}
ReactDOM.render(<Pagina/>, document.getElementById('root'));
*/
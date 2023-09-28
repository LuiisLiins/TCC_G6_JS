import React from "react";
import ReactDOM  from "react-dom";


/*
const mensagem1 = <h1>Utilizando React JSX!</h1>;
ReactDOM.render(mensagem1, document.getElementById('root'));
*/
/*
const mensagem = React.createElement ('h1',{}, 'Não utilizando JSX O_O');
ReactDOM.render(mensagem, document.getElementById('root'));
*/


/*
const expressoes = <h1>{5 + 5}</h1>;
ReactDOM.render(expressoes, document.getElementById('root'));
*/


class Curso extends React.Component{
  render(){
    return <p> O curso que faço e na Apex e front-End</p>
  }
}

class Pessoa extends React.Component{
  render(){
    return(
      <div>
        <h1> Oie, meu Nome é Pedro</h1>
         <Curso/>
      </div>
    );
  }
}

ReactDOM.render(<Pessoa/>, document.getElementById('root'));


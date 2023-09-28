import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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
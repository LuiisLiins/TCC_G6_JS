import React from "react";
import  ReactDOM  from "react-dom";


 
const Form = (
    <form method="post" action="">
     <label for="unname"><b> Nome: </b></label>
     <input></input>
     
     <label for="unname"><b> Senha: </b></label>
    <input></input>
    <button type="submit">Login</button>
    </form>
)

ReactDOM.render(Form, document.getElementById('root'));
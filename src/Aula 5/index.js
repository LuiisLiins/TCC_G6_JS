import React from "react";
import  ReactDOM  from "react-dom";

class Formatacao extends React.Component{
    constructor(pros){
        super(pros);
    }
    render(){
        return <h1>O constructor sera util com state: </h1>;

    }
}

ReactDOM.render(<Formatacao/>, document.getElementById('root'));
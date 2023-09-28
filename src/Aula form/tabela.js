import React from "react";
import  ReactDOM  from "react-dom";

const tabela = (
    <table>
    <tr>
      <td>Produto</td>
      <td>Marca</td>
      <td>Valor</td>
    </tr>
    <tr>
    <td>Boné</td>
      <td>Nike</td>
      <td>R$30,00</td>
    </tr>
    <tr>
      <td>Camisa</td>
      <td>Adidas</td>
      <td>R$50,00</td>
    </tr>
    <tr>
    <td>sapato</td>
      <td>Olympikus</td>
      <td>R$200,00</td>
    </tr>
    <tr>
    <td>Calça</td>
      <td>Puma</td>
      <td>R$150,00</td>
    </tr>
    <tr>
    <td>short</td>
      <td>Credencial</td>
      <td>R$70,00</td>
    </tr>
    </table>
    
  );
  
  ReactDOM.render(tabela, document.getElementById('root'));
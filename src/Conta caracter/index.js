import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ContadorCaracteres() {
  const [texto, setTexto] = useState('');
  const quantidadeCaracteres = texto.length;

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <h1>Contador de Caracteres</h1>
      <textarea value={texto} onChange={handleChange} />
      <p>Quantidade de caracteres digitados: {quantidadeCaracteres}</p>
    </div>
  );
}

ReactDOM.render(<ContadorCaracteres />, document.getElementById('root'));

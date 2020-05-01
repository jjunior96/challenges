import React, { useState } from 'react';

import Form from './styles';

function App() {
  const [inputError, setInputError] = useState('');
  const [binaryNumber, setBinaryNumber] = useState('');

  function checkInput(e) {
    e.preventDefault();
    if (!/^[0-1]+$/.test(binaryNumber)) {
      setInputError('Não é binário');
      setBinaryNumber('');
      return;
    }
    console.log('ok');
  }

  return (
    <Form>
      <label>
        Binario:
        <input
          value={binaryNumber}
          onChange={(e) => setBinaryNumber(e.target.value)}
          placeholder="Digite um número binário"
        ></input>
      </label>
      <input placeholder="Resultado"></input>
      <button onClick={checkInput} type="submit">
        Converter
      </button>
    </Form>
  );
}

export default App;

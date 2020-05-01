import React, { useState } from 'react';

import { Form, Error } from './styles';

function App() {
  const [inputError, setInputError] = useState('');
  const [binaryNumber, setBinaryNumber] = useState('');
  const [decimalNumber, setdecimalNumber] = useState('');

  function checkInput(e) {
    e.preventDefault();

    if (!/^[0-1]+$/.test(binaryNumber)) {
      setInputError('You can only enter with 0 or 1');

      return 0;
    }

    const binaryArray = binaryNumber.split('');
    const len = binaryNumber.length - 1;

    setdecimalNumber(
      binaryArray.reduce((acc, item, index) => {
        return acc + Number(item) * 2 ** (len - index);
      }, 0)
    );

    // "0|1|1"
    // 0 1 2 (item * 2^((len-1) - index) + acumulador)
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
      {inputError && <Error>{inputError}</Error>}
      <input disabled value={decimalNumber}></input>
      <button onClick={checkInput} type="submit">
        Converter
      </button>
    </Form>
  );
}

export default App;

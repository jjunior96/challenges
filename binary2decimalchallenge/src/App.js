import React, { useState } from 'react';

import { Form, Error } from './styles';

function App() {
  const [inputError, setInputError] = useState('');
  const [binaryNumber, setBinaryNumber] = useState('');
  const [decimalNumber, setdecimalNumber] = useState('');

  function checkInput(e) {
    e.preventDefault();

    // Check if input contain only 0 or 1
    if (!/^[0-1]+$/.test(binaryNumber)) {
      setInputError('You can only enter with 0 or 1');

      return 0;
    }

    const binaryArray = binaryNumber.split('');
    const inputLength = binaryNumber.length - 1;

    setdecimalNumber(
      binaryArray.reduce((accumulator, item, index) => {
        return accumulator + Number(item) * 2 ** (inputLength - index);
      }, 0)
    );

    // "0|1|1"
    // 0 1 2 (item * 2^((len-1) - index) + acumulador)

    return 0;
  }

  return (
    <Form>
      <label>
        Binary To Decimal
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

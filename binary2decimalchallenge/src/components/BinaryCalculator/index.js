import React, { useState } from 'react';

import { Form, Error, Title } from './styles';

function Dashboard() {
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
    setInputError('');

    return 0;
  }

  return (
    <>
      <Title>Binary To Decimal Converter</Title>
      <Form hasError={!!inputError}>
        <label>
          Binario:
          <input
            id="binary"
            value={binaryNumber}
            onChange={(e) => setBinaryNumber(e.target.value)}
            placeholder="Enter binary number"
          ></input>
        </label>
        {inputError && <Error>{inputError}</Error>}

        <label>
          Decimal:
          <input disabled value={decimalNumber}></input>
        </label>
        <button onClick={checkInput} type="submit">
          Converter
        </button>
      </Form>
    </>
  );
}

export default Dashboard;

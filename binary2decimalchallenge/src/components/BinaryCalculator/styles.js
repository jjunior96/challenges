import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  text-align: center;
`;
export const Form = styled.form`
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  max-height: 400px;
  background-color: #e1f4fe;

  label {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-size: 18px;
    margin-bottom: 4px;
  }
  input {
    width: 80%;
    display: block;
    margin: 4px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  #binary {
    ${(props) =>
      props.hasError &&
      css`
        border-color: red;
      `};
  }
  button {
    cursor: pointer;
    float: right;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
    border: 0;
    background: #c8c8c8;
    color: #fff;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#c8c8c8')};
    }
  }
`;

export const Error = styled.span`
  font-size: 16px;
  color: red;
  display: block;
`;

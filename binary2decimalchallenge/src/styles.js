import styled from 'styled-components';

export const FormWrapper = styled.form`
  border-radius: 8px;
  padding: 10px;
  margin-left: 25%;
  width: 50%;
  height: 200px;
  background: linear-gradient(#f2f2f2, #f0f2f0);
`;

export const Error = styled.span`
  font-size: 16px;
  color: #db3329;
  margin: 10px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  border: 0;
  background: #fff;
  border-radius: 4px;
  height: 4vh;
  width: 95%;
  margin: 10px;
`;

export const Button = styled.button`
  margin: 10px 10px 0px 10px;
  flex-direction: center;
  background: #04c4d9;
  display: inline-block;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.1);

  align-content: center;
  border: 0;
  cursor: pointer;
  color: #fff;
  text-align: center;
  width: 95.5%;
  height: 40px;
  border-radius: 4px;
  justify-content: center;

  &:hover {
    background: #404040;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #404040;
  text-align: center;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
`;

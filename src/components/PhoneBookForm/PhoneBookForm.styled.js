import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 350px;
  input {
    border: none;
    border-bottom: 1px solid black;
    &:focus {
      border: none;
      outline: none;
      border-bottom: 2px solid lightblue;
    }
  }

  button {
    padding: 10px 0px;
    background-color: rgb(141, 202, 243);
    border-radius: 10px;
    border: none;

    &:hover {
      background-color: lightblue;
    }
  }
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  color: rgb(101, 182, 250);
  line-height: calc(32 / 24);
`;

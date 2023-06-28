import styled from 'styled-components';

export const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  margin-bottom: 20px;
  input {
    border: none;
    border-bottom: 1px solid black;
    &:focus {
      border: none;
      outline: none;
      border-bottom: 2px solid lightblue;
    }
  }
`;

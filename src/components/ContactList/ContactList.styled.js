import styled from 'styled-components';

export const ContactHumanList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
`;

export const ContactItem = styled.li`
  list-style: none;
  display: flex;
  max-width: 350px;
  justify-content: space-between;
  align-items: center;
`;

export const ContactButton = styled.button`
  padding: 3px 30px;
  background-color: rgb(141, 202, 243);
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: lightblue;
  }
`;

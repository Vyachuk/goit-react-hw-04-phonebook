import { FormTitle } from 'components/PhoneBookForm/PhoneBookForm.styled';

export const ContactSection = ({ children }) => {
  return (
    <>
      <FormTitle>Contacts</FormTitle>
      {children}
    </>
  );
};

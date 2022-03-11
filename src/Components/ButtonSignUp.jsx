import styled from "styled-components";

export const ButtonSignUpStyled= styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  width: 294px;
  height: 50px;
  background: #504a4a;
  border: none;
  border-radius: 5px;
  padding: 24px 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
`;

export const ButtonSignUp = () => {
    return (
        <ButtonSignUpStyled>Sign Up</ButtonSignUpStyled>
    );
}


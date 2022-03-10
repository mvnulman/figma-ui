import React from "react";
import { Button, GoogleIcon } from "./styles/Button.styled";

const handleClick = () => {
    console.log("clicked");
}

const ButtonStyled = () => {
  return (
    <>
      <Button onClick={handleClick}background="#5A85F1" color="#fff">
        <GoogleIcon />
        Sign up with Google
      </Button>
      <Button background="#F2F1F1" color="#272728" fontWeight="bold">
        Sign up with Email
      </Button>
    </>
  );
};

export default ButtonStyled;

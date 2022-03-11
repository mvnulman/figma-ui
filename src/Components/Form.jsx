import React from "react";
import styled from "styled-components";

export const FormGroup = styled.div`
  margin: 0 50px;
  display: block;
  width: 300px;
  color: #868080;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  color: #868080;
`;

export const Input = styled.input`
  padding: 18px;
  border: 0;
  border-bottom: 2px solid #c4c4c4;
  border-radius: 5px;
  width: 90%;
  color: #868080;
  background-color: #f2fdff;

  :active,
  :focus {
    border-color: #c4c4c4;
    outline: none !important;
  }

  ::placeholder {
    font-size: 15px;
  }
`;

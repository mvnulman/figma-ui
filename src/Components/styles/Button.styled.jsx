import styled from "styled-components";
import { Google3 } from "@styled-icons/icomoon/Google3";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  width: 294px;
  height: 50px;
  background: ${({ background }) => background};
  border: none;
  border-radius: 5px;
  padding: 24px 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const GoogleIcon = styled(Google3)`
  width: 22px;
  height: 22px;
  margin-right: 30px;
`;

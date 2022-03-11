import styled from "styled-components";
import { EyeSlash } from "@styled-icons/bootstrap/EyeSlash"

export const MainStyled = styled.div`
  h1 {
    width: 26%;
    text-align: left;
    margin: -130px 0 0 50px;
  }
  h4 {
    width: 60%;
    text-align: left;
    margin: 20px 0 50px 50px;
    line-height: 1.4;
    font-weight: 400;
  }
`;

export const EyeIcon = styled(EyeSlash) `
  position: relative;
  width: 22px;
  right: 30px ;
`
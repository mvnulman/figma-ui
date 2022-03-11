import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 38px;
    font-weight: 400;
    line-height: 1;
    margin-top: 20px;
  }
  
`;

export const ContainerLogin = styled.div`
  text-align: center;
  width: 414px;
  height: 896px;
  border: 1px solid #ecebeb;
  background: #f2fdff;
  margin: 10px 10px;


  h3 {
    margin-top: 30px;
    font-weight: 300;
    color: #504E4E;
    font-size: 18px;
  }

  h6 {
    font-weight: 400;
  }

  span {
    color: #5222D0;
    font-weight: bold;
  }
`;

export const ContainerSignIn = styled.div`
  text-align: center;
  width: 414px;
  height: 896px;
  border: 1px solid #ecebeb;
  background: #f2fdff;
  margin: 0 10px;
`;
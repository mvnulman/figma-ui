// import "./App.css";
import { GlobalStyles } from "./Components/styles/Global";
import {Wrapper, ContainerLogin, ContainerSignIn} from "./Components/styles/Container.styled";
import { HeaderIconsContainer, BatteryIcon, WifiIcon, NetworkIcon} from "./Components/styles/HeaderIcons.styled";

function App() {
  return (
    <>
    <GlobalStyles />
    <Wrapper>
      <ContainerLogin>
        <HeaderIconsContainer>
          <p>22:37</p>
          <NetworkIcon color="#fff"/>
          <WifiIcon color="#fff"/>
          <BatteryIcon color="#fff"/>
        </HeaderIconsContainer>
      </ContainerLogin>
      <ContainerSignIn>
        <h1>Testing 1, 2, 3...</h1>
      </ContainerSignIn>
    </Wrapper>
    </>
  );
}

export default App;

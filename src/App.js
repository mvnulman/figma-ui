// import "./App.css";
import { GlobalStyles } from "./Components/styles/Global";
import {
  Wrapper,
  ContainerLogin,
  ContainerSignIn,
} from "./Components/styles/Container.styled";
import {
  HeaderIconsContainer,
  BatteryIcon,
  WifiIcon,
  NetworkIcon,
} from "./Components/styles/HeaderIcons.styled";
import Myimg from "./assets/yoga-woman.png";
import { YogaImg } from "./Components/styles/YogaImg";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <ContainerLogin>
          <HeaderIconsContainer>
            <p>22:37</p>
            <NetworkIcon color="#fff" />
            <WifiIcon color="#fff" />
            <BatteryIcon color="#fff" />
          </HeaderIconsContainer>
          <YogaImg src={Myimg} alt="" />
          <h1>
            Online daily <br />
            yoga classes & <br />
            workouts
          </h1>
          <button>Sign up with Google</button>
        </ContainerLogin>

        <ContainerSignIn>
          <h1>Testing 1, 2, 3...</h1>
        </ContainerSignIn>
      </Wrapper>
    </>
  );
}

export default App;

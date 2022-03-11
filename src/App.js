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
import Myimg2 from "./assets/yoga-woman-2.png";
import { YogaImg } from "./Components/styles/YogaImg";
import { YogaImg2 } from "./Components/styles/YogaImg2";
import ButtonStyled from "./Components/Button";
import {ButtonSignUp} from "./Components/ButtonSignUp";
import { MainStyled, EyeIcon, PurpleFooter} from "./Components/styles/Main.styled";
import { FormGroup, Input } from "./Components/Form";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <ContainerLogin>
          <HeaderIconsContainer background="#7929ff">
            <p style={{ fontSize: "15px" }}>22:37</p>
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
          <ButtonStyled />
          <h6>
            By signing up you accept the{" "}
            <b>
              Terms of Service <br />
              and Privacy Policy
            </b>
          </h6>
          <h3>
            Already have an account? <span>Sign in</span>
          </h3>
        </ContainerLogin>

        <ContainerSignIn>
          <HeaderIconsContainer background="#f2fdff">
            <p style={{ color: "#4E4646" }}>22:37</p>
            <NetworkIcon color="#4E4646" />
            <WifiIcon color="#4E4646" />
            <BatteryIcon color="#4E4646" />
          </HeaderIconsContainer>
          <MainStyled>
            <h1>Create Account</h1>
            <h4>Enter your personal details and start your classes today.</h4>
          </MainStyled>
          <FormGroup>
            <Input type="text" placeholder="Full Name" />
          </FormGroup>
          <FormGroup>
            <Input type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="Password"/><EyeIcon />
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="Confirm Password" /><EyeIcon />
            <ButtonSignUp /> 
          </FormGroup>
          <YogaImg2 src={Myimg2} alt="" />
          <PurpleFooter/>
        </ContainerSignIn>
      </Wrapper>
    </>
  );
}

export default App;

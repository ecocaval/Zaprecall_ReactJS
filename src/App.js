import styled from "styled-components";
import WelcomePage from "./components/WelcomePage";
import GlobalStyle from "./assets/css/GlobalStyle";
import GamingPage from "./components/GamingPage";

function App() {
  return (
    <>
      <GlobalStyle/>

      <Website>
        
        {/* <WelcomePage/> */}
        <GamingPage/>
        
      </Website>
    </>
  );
}

export default App;

const Website = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #FB6B6B;
`
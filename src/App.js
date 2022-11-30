import styled from "styled-components";
import WelcomePage from "./components/WelcomePage";
import GlobalStyle from "./assets/css/GlobalStyle";
import GamingPage from "./components/GamingPage";
import { useState } from "react";

function App() {

  const [gameStarted, setGameStarted] = useState(false)
  const [gameIsOver, setGameIsOver] = useState(false)

  return (
    <>
      <GlobalStyle/>
      <Website>        
        <WelcomePage gameStarted={gameStarted} setGameStarted={setGameStarted}/>
        <GamingPage gameStarted={gameStarted} gameIsOver={gameIsOver} setGameIsOver={setGameIsOver}/>        
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
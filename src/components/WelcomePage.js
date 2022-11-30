import styled from "styled-components";
import logo from "./../assets/img/logo.png"

export default function WelcomePage({ gameStarted, setGameStarted }) {
    return (
        <>
            <WelcomeSection gameStarted={gameStarted}>
                <img src={logo} />
                <PageName>ZapRecall</PageName>
                <RecallButton
                    onClick={() => setGameStarted(true)}
                >
                    <p>Iniciar Recall!</p>
                </RecallButton>
            </WelcomeSection>
        </>
    );
}

const WelcomeSection = styled.section`
    height: 100vh;
    display: ${props => !props.gameStarted ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > img {
        width: 136px;
        height: 161px;
    }
`;

const PageName = styled.h1`
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    color: #FFFFFF;
    margin: 40px 0px;
`;

const RecallButton = styled.button`
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    > p {
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        color: #D70900;
    }
`;
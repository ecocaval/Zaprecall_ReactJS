import styled from "styled-components";
import logo from "./../img/logo.png"

export default function WelcomePage() {
    return(
        <>
            <WelcomeSection>
                <img src={logo}/>
                <h1>ZapRecall</h1>
                <button>
                    <p>Iniciar Recall!</p>
                </button>                
            </WelcomeSection>
        </>
    );
}

const WelcomeSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
        width: 136px;
        height: 161px;
    }
    > h1 {
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        text-align: center;
        color: #FFFFFF;
        margin: 40px 0px;
    }
    > button {
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
    }
`;
import styled from "styled-components";
import logo from "./../img/logo.png"
import cards from "./cards"
import ZapQuestion from "./ZapQuestion";

export default function GamingPage() {
    return(
        <>
            <GamingPageSection>
                <header>
                    <img src={logo}/>
                    <h1>ZapRecall</h1>
                </header>
                <main>
                    {cards.map((card, index) => (<ZapQuestion key={index} questionIndex={index} card={card}/>))}
                </main>
                <footer>
                    <p>X/X Concluidos</p>
                </footer>
            </GamingPageSection>
        </>
    );
}

const GamingPageSection = styled.section`
    > header {
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;

        > img {
            width: 52px;
            height: 60px;
            margin-right: 20px;
        }
        > h1 {
            font-family: 'Righteous';
            font-weight: 400;
            font-size: 36px;
            text-align: center;
            color: #FFFFFF;
        }
    }

    > main {
        height: 65vh;
        overflow-y: scroll;
    }

    > footer {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 70px;
        background-color: #FFFFFF;
        box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

        > p {
            font-family: 'Recursive';
            font-weight: 400;
            font-size: 18px;
            color: #333333;
        }
    }
    
`;


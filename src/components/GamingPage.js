import { useState } from "react";
import styled from "styled-components";
import logo from "./../assets/img/logo.png"
import cards from "./info/cards"
import ZapQuestion from "./ZapQuestion";

export default function GamingPage({gameStarted}) {

    const [questionsAnswered, setQuestionsAnswered] = useState(0)
    const [answersIcons, setAnswersIcons] = useState([])

    return (
        <StyledSection gameStarted={gameStarted}>
            <GamingPageHeader>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </GamingPageHeader>

            <GamingPageMain>
                {cards.map((card, index) => (
                    <ZapQuestion
                        key={index + 1}
                        questionIndex={index + 1}
                        card={card}
                        questionsAnswered={questionsAnswered}
                        setQuestionsAnswered={setQuestionsAnswered}
                        answersIcons={answersIcons}
                        setAnswersIcons={setAnswersIcons}
                    />
                ))}
            </GamingPageMain>

            <GamingPageFooter>
                <p>{questionsAnswered}/{cards.length} Concluidos</p>
                <AnswersIconsSection>
                    {answersIcons.map((answer) => {
                        return (
                            <img
                                data-test=''
                                src={answer}
                            />
                        );
                    })}
                </AnswersIconsSection>
            </GamingPageFooter>
        </StyledSection>
    );
}

const StyledSection = styled.section`
    display: ${props => (props.gameStarted ? "block" : "none")}
`;

const GamingPageMain = styled.main`
    height: 65vh;
    overflow-y: scroll;
`;

const GamingPageHeader = styled.header`
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
`;

const GamingPageFooter = styled.footer`
    display: flex;
    flex-direction: column;
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
        margin-bottom: 6px;
        color: #333333;
    }
`;

const AnswersIconsSection = styled.section`
    
`
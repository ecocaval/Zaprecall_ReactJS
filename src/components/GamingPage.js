import { useState } from "react";
import styled from "styled-components";
import cards from "./info/cards"
import ZapQuestion from "./ZapQuestion";
import logo from "./../assets/img/logo.png"
import party from "./../assets/img/party.png"
import icone_erro from "./../assets/img/icone_erro.png";
import sad from "./../assets/img/sad.png"

export default function GamingPage({ gameStarted, gameIsOver, setGameIsOver }) {

    const [questionsAnswered, setQuestionsAnswered] = useState(0)
    const [answersIcons, setAnswersIcons] = useState([])
    const gotAnswersRight = (answersIcons.includes(icone_erro) ? false : true);

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
                        numberOfAnswers={cards.length}
                        questionsAnswered={questionsAnswered}
                        setQuestionsAnswered={setQuestionsAnswered}
                        answersIcons={answersIcons}
                        setAnswersIcons={setAnswersIcons}
                        setGameIsOver={setGameIsOver}
                    />
                ))}
            </GamingPageMain>

            <GamingPageFooter>
                <AnswerCommentSection gameIsOver={gameIsOver}>
                    <div>
                        <img src={gotAnswersRight ? party : sad} />
                        <p>{gotAnswersRight ? 'Parabéns!' : 'Putz...'}</p>
                    </div>
                    <p>{gotAnswersRight ? "Você não esqueceu de nenhum flashcard!" : 'Ainda faltam alguns... Mas não desanime!'}</p>
                </AnswerCommentSection>

                <p>
                    {questionsAnswered}/{cards.length} CONCLUÍDOS
                </p>

                <AnswersIconsSection gameIsOver={gameIsOver} startedAnswering={!(questionsAnswered.length===0)}>
                    {answersIcons.map((answer,index) => {
                        return (
                            <img
                                key={index}
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
    min-height: 70px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    > p {
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        margin: 12px 0px 5px 0px;
        color: #333333;
    }
`;

const AnswerCommentSection = styled.section`
    display: ${props => props.gameIsOver ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    margin-top: 15px;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;

        > img {
            width: 23px;
            height: 23px;
            margin: 0px 10px 0px 0px;
        }

        > p {
            font-family: 'Recursive';
            font-weight: 700;
            font-size: 18px;
            color: #333333;
        }
    }

    > p {
        font-family: 'Recursive';
        width: 60%;
        text-align: center;
        margin-top: 10px;
    }
`;

const AnswersIconsSection = styled.section`
    display: ${props => props.startedAnswering ? "block" : "none"};
    margin: 0px 0px 10px 0px;
`
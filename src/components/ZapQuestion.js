import { useState } from "react";
import styled from "styled-components";

import questionButtons from "./info/questionButtons";

import seta_play from "./../assets/img/seta_play.png";
import seta_virar from "./../assets/img/seta_virar.png";
import icone_erro from "./../assets/img/icone_erro.png";
import icone_certo from "./../assets/img/icone_certo.png";
import icone_quase from "./../assets/img/icone_quase.png";

export default function ZapQuestion(props) {

    const { questionIndex, card, questionsAnswered, setQuestionsAnswered } = props

    const [questionClicked, setQuestionClicked] = useState(false)
    const [questionFliped, setQuestionFliped] = useState(false)
    const [questionIcon, setQuestionIcon] = useState(icone_erro)
    const [questionCurrentState, setQuestionCurrentState] = useState('')
    const [contentColor, setContentColor] = useState('#333333')

    const iconCondition = (questionClicked ? seta_virar :
        (!questionCurrentState ? seta_play : questionIcon))

    function questionClick() {
        const questionWasAnswered = (questionClicked || questionCurrentState)
        if (questionWasAnswered) {
            return
        }
        questionClicked ? setQuestionClicked(false) : setQuestionClicked(true);
    }

    function flipQuestion() {
        if (!questionClicked) {
            return
        }
        setQuestionFliped(true)
    }

    function buttonClick(status) {
        setQuestionClicked(false)
        setQuestionFliped(false)
        setQuestionCurrentState(status)
        setQuestionsAnswered(questionsAnswered+1)
        switch (status) {
            case 'wrong':
                setQuestionIcon(icone_erro)
                setContentColor('#FF3030') // set right color after
                break;
            case 'parcial':
                setQuestionIcon(icone_quase)
                setContentColor('#FF922E') // set right color after
                break;
            case 'zap':
                setQuestionIcon(icone_certo)
                setContentColor('#2FBE34') // set right color after
                break;
        }
    }

    console.log(`
        questionIndex: ${questionIndex}
        questionCurrentState = ${questionCurrentState}
    `);

    return (
        <Question
            onClick={questionClick}
            questionClicked={questionClicked}
            questionFliped={questionFliped}
        >
            <QuestionContent questionClicked={questionClicked} questionCurrentState={questionCurrentState} contentColor={contentColor}>
                {!questionClicked ? `Pergunta ${questionIndex}` : (questionFliped ? card.answer : card.question)}
            </QuestionContent>

            <QuestionIcon questionClicked={questionClicked} questionFliped={questionFliped}>
                <img src={iconCondition}
                    onClick={flipQuestion}
                />
            </QuestionIcon>

            <QuestionButtons questionFliped={questionFliped}>
                {questionButtons.map((button, index) => (
                    <QuestionButton key={index} onClick={() => buttonClick(button.status)}>
                        <p>{button.content}</p>
                    </QuestionButton>
                ))}
            </QuestionButtons>
        </Question>
    );
}

const Question = styled.div`
    margin: auto;
    width: 300px;
    min-height: ${props => props.questionClicked ? "135px" : "65px"};
    display: flex;
    flex-direction: ${props => props.questionClicked ? "column" : "row"};
    justify-content: space-between;
    align-items: center;
    background: ${props => props.questionClicked ? "#FFFFD5" : "#FFFFFF"};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 15px;
`;

const QuestionContent = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.contentColor};
    text-align: left;
    width: ${props => props.questionClicked ? "100%" : "auto"};
    text-decoration: ${props => props.questionCurrentState ? "line-through" : "none"};
`;

const QuestionIcon = styled.figure`
    justify-content: flex-end;
    width: ${props => props.questionClicked ? "100%" : "auto"};
    display: ${props => props.questionFliped ? "none" : "flex"};

    > img {
        width: ${props => props.questionClicked ? "25px" : "auto"};
    }
`;

const QuestionButtons = styled.span`
    display: ${props => props.questionFliped ? "flex" : "none"}; 
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;

    > button:nth-child(1) {
        background: #FF3030;
    }

    > button:nth-child(2) {
        background: #FF922E;
    }
    
    > button:nth-child(3) {
        background: #2FBE34;
    }
`

const QuestionButton = styled.button`
    width: 85px;
    height: 37px;
    border-radius: 5px;
    border: none;
    padding: 0px 10px;

    > p {
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 12px;
        color: white;
    }
`
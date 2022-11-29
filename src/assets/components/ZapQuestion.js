import { useState } from "react";
import styled from "styled-components";
import seta_play from "./../img/seta_play.png";
import seta_virar from "./../img/seta_virar.png";

export default function ZapQuestion({questionIndex, card}) {    

    const [questionClicked, setQuestionClicked] = useState(false)
    const [questionFliped, setQuestionFliped] = useState(false)
    const [questionIcon , setQuestionIcon] = useState(seta_play)
    const [questionContent, setQuestionContent] = useState(`Pergunta ${questionIndex}`)

    function questionClick() {
        if(questionClicked) return
        questionClicked?setQuestionClicked(false):setQuestionClicked(true);        
        questionClicked?setQuestionIcon(seta_play):setQuestionIcon(seta_virar);       
        questionClicked?setQuestionContent(`Pergunta ${questionIndex}`):setQuestionContent(card.question);       
    }

    function flipQuestion() {
        if(!questionClicked) { 
            return
        }
        setQuestionContent(card.answer)
        setQuestionFliped(true)
    }

    console.log(questionFliped);

    return(
        <Question onClick={questionClick} questionClicked={questionClicked} questionFliped={questionFliped}>
            <p>{questionContent}</p> 
            <figure><img src={questionIcon} onClick={flipQuestion}/></figure>
        </Question>
    );
}

const Question = styled.div`
    margin: auto;
    width: 300px;
    height: ${props => props.questionClicked ? "135px" : "65px"};
    display: flex;
    flex-direction: ${props => props.questionClicked ? "column" : "row"};
    justify-content: space-between;
    align-items: center;
    background: ${props => props.questionClicked ? "#FFFFD5" : "#FFFFFF"};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 20px;

    > p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
        text-align: left;
        width: ${props => props.questionClicked ? "100%" : "auto"};
    }
    > figure {
        width: ${props => props.questionClicked ? "100%" : "auto"};
        display: ${props => props.questionFliped ? "none" : "flex"};
        justify-content: flex-end;
        z-index: 10;
        > img {
            width: ${props => props.questionClicked ? "30px" : "auto"};
        }
    }
`;
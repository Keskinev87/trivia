import React from 'react';
import { service } from '../../services/socket-service';
import { QuestionProps } from './QuestionComponent'

function AnswerComponent(questionProps: QuestionProps) {
    console.log("Rendering answer")
    let elementClass: string = 'answer-container';
    
    if (!questionProps.active)
        elementClass += ' disabled';
    if(questionProps.answer && questionProps.answer === questionProps.id) {
        elementClass += ' own-answer';
    }
    if(questionProps.correctAnswer === questionProps.id)
        elementClass += ' correct-answer';
    if(questionProps.answer && questionProps.players) {
        Object.keys(questionProps.players).forEach((key, index) => {
            console.log(questionProps.players[key], questionProps.id)
            if(questionProps.players[key].currentAnswer === questionProps.id)
                elementClass += ` opponent${index}`
            })
    }
    return (
       <div className={elementClass} id={questionProps.id} onClick={questionProps.active ? service.sendAnswer : void(0)}>{questionProps.question[questionProps.id]}</div>
    )
}

export default AnswerComponent
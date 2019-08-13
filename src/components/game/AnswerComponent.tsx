import React from 'react';
import { service } from '../../services/socket-service';
import { QuestionProps } from './QuestionComponent'

function AnswerComponent(questionProps: QuestionProps) {
    console.log("The answer props are")
    console.log(questionProps, questionProps.id)
    let elementClass: string = 'answer-container';
    if (!questionProps.active)
        elementClass += ' disabled';
    if(questionProps.answer && questionProps.answer === questionProps.id)
        elementClass += ' own-answer';
    if(questionProps.correctAnswer && questionProps.correctAnswer)
        elementClass += ' correct-answer';
    if(questionProps.answer && questionProps.players) {
        Object.keys(questionProps.players).forEach((key, index) => {
            if(questionProps.players[key].currentAnswer === questionProps.correctAnswer)
                elementClass += ` opponent${index}-answer`
            })
    }
        
    return (
       <div className={elementClass} id={questionProps.id} onClick={questionProps.active ? service.sendAnswer : void(0)}>{questionProps.question[questionProps.id]}</div>
    )
}

export default AnswerComponent
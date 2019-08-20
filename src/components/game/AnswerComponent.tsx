import React from 'react';
import { service } from '../../services/socket-service';
import { QuestionProps } from './MultipleAnswerQuestionComponent'

function AnswerComponent(questionProps: QuestionProps) {
    let elementClass: string = 'answer-container';
    
    if (!questionProps.active)
        elementClass += ' disabled';
    if(questionProps.answer && questionProps.answer === questionProps.id) {
        elementClass += ' own-answer';
    }
    if(questionProps.correctAnswer === questionProps.id)
        elementClass += ' correct-answer';
    if(questionProps && questionProps.opponents) {
        Object.keys(questionProps.opponents).forEach((key, index) => {
            console.log(questionProps, questionProps.id)
            if(questionProps.opponents[key].currentAnswer === questionProps.id)
                elementClass += ` opponent${index + 1}`
        })
    }
    return (
       <div className={elementClass} id={questionProps.id} onClick={questionProps.active ? service.sendMultipleAnswer : void(0)}>
        {questionProps.question[questionProps.id]}
       </div>
    )
}

export default AnswerComponent
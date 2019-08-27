import React from 'react';
import { service } from '../../services/socket-service';

interface AnswerProps {
    id: string, 
    active: boolean;
    answer: string | undefined | null;
    correctAnswer: string | undefined;
    question: any;
    opponents: any;
}

function AnswerComponent(props: AnswerProps) {
    let elementClass: string = 'answer-container';
    
    if (!props.active)
        elementClass += ' disabled';
    if(props.answer && props.answer === props.id) {
        elementClass += ' own-answer';
    }
    if(props.correctAnswer === props.id)
        elementClass += ' correct-answer';
    if(props && props.opponents) {
        Object.keys(props.opponents).forEach((key, index) => {
            // console.log(props, props.id)
            if(props.opponents[key].currentAnswer === props.id)
                elementClass += ` opponent${index + 1}`
        })
    }
    return (
       <div className={elementClass} id={props.id} onClick={props.active ? service.sendMultipleAnswer : void(0)}>
        {props.question[props.id]}
       </div>
    )
}

export default AnswerComponent
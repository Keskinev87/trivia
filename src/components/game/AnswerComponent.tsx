import React from 'react';
import { service } from '../../services/socket-service';

function AnswerComponent(props: any) {
    console.log("The answer props are")
    console.log(props)
    let elementClass: string = 'answer-container';
 
        if(props.questionProps.answer && props.questionProps.answer === props.id)
            elementClass += ' own-answer';
        if (props.questionProps.correctAnswer && props.questionProps.correctAnswer === props.id)
            elementClass += ' correct-answer';
        if(props.questionProps.correctAnswer && props.questionProps.players) {
            Object.keys(props.questionProps.players).forEach((key, index) => {
                if(props.questionProps.players[key].currentAnswer === props.questionProps.correctAnswer)
                    elementClass += ` opponent${index}-answer`
            })
        }
        
    return (
       <div className={elementClass} id={props.id} onClick={props.questionProps.active ? service.sendAnswer : void(0)}>{props.questionProps.question[props.id]}</div>
    )
}

export default AnswerComponent
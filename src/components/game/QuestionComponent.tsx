import React from 'react';
import { service } from '../../services/socket-service';

function QuestionComponent(props: any) {
    console.log("The props for question are")
    console.log(props)
        return (
            <div className="question-container">
                <p>{props.body}</p>
                <div className="answer-container" id="answerA" onClick={service.sendAnswer}>A:{props.answerA}</div>
                <div className="answer-container" id="answerB" onClick={service.sendAnswer}>B:{props.answerB}</div>
                <div className="answer-container" id="answerC" onClick={service.sendAnswer}>C:{props.answerC}</div>
                <div className="answer-container" id="answerD" onClick={service.sendAnswer}>D:{props.answerD}</div>
            </div>
        )
}

export default QuestionComponent
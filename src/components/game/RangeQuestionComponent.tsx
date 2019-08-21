import React from 'react';
import { service } from '../../services/socket-service';

export interface QuestionProps {
    id?: any, 
    active: boolean;
    answer: string | undefined | null;
    correctAnswer: string | undefined;
    question: any;
    opponents: any;
}

function RangeQuestionComponent(props: QuestionProps) {
    console.log("Rendering question")
    console.log("The state players in question are")
    console.log(props.opponents)
    let firstOpponentAnswer:any = undefined;
    let secondOpponentAnswer: any = undefined;
    props.opponents && Object.keys(props.opponents).forEach((key, index) => {
        if(index === 0)
            firstOpponentAnswer = props.opponents[key].currentAnswer;
        if(index === 1)
            secondOpponentAnswer = props.opponents[key].currentAnswer;
    })
    return (
        <div className="question-container">
            <div className="question-body">
                <p>{props.question.body}</p>
            </div>
            <form onSubmit={service.sendRangedAnswer}>
                <div className="form-group">
                    <input className={props.active ? "" : "disabled"} autoFocus type="number" name="answer" id="ranged-question-answer" /> 
                </div>
                <button type="submit" value="Submit">Submit</button>
            </form>
            {props.correctAnswer && 
                <div className="ranged-answer-container">
                    <h3 className="correct">The correct answer is</h3>
                    <div className="ranged-answer correct-answer">{props.correctAnswer}</div>
                </div>}
            {firstOpponentAnswer && secondOpponentAnswer && 
                <div className="ranged-answer-container">
                    {firstOpponentAnswer && <div className="ranged-answer opponent1">{firstOpponentAnswer}</div>}
                    {secondOpponentAnswer && <div className="ranged-answer opponent2">{secondOpponentAnswer}</div>}
                </div>}
        </div>
    )
}

export default RangeQuestionComponent
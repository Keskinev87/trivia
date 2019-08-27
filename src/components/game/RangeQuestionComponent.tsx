import React from 'react';
import { service } from '../../services/socket-service';
import Timer from './Timer';


export interface QuestionProps {
    id?: any, 
    active: boolean;
    waitingForAnswers: boolean;
    answer: string | undefined | null;
    correctAnswer: string | undefined;
    question: any;
    opponents: any;
}

function RangeQuestionComponent(props: QuestionProps) {
    // console.log("Rendering question")
    // console.log("The state players in question are")
    // console.log(props.opponents)
    let firstOpponentAnswer:any = undefined;
    let firstOpponentName:string = '';
    let secondOpponentAnswer: any = undefined;
    let secondOpponentName:string = '';
    props.opponents && Object.keys(props.opponents).forEach((key, index) => {
        if(index === 0) {
            firstOpponentAnswer = props.opponents[key].currentAnswer;
            firstOpponentName = props.opponents[key].nickName;
        }
        if(index === 1) {
            secondOpponentAnswer = props.opponents[key].currentAnswer;
            secondOpponentName = props.opponents[key].nickName;
        }
            
    })
    return (
        <div className="question-container">
            <div className="question-body">
                <p id="question-body">{props.question.body}</p>
            </div>
            <form onSubmit={service.sendRangedAnswer}>
                <div className="form-group">
                    <input className={props.active ? "" : "disabled"} autoFocus type="number" name="answer" id="ranged-question-answer" /> 
                </div>
                <button id="submit-ranged-answer" className={props.active ? "" : "disabled"} type="submit" value="Submit">Submit</button>
            </form>
            {props.correctAnswer && 
                <div className="ranged-answer-container">
                    <h3 className="correct">The correct answer is</h3>
                    <div className="ranged-answer correct-answer">{props.correctAnswer}</div>
                </div>}
            {props.waitingForAnswers && <div className="question-announcement"><span>Waiting for other players to answer...</span></div>}
            {!props.active && !props.waitingForAnswers && 
                <div className="ranged-answer-container">
                    {firstOpponentAnswer && <div className="ranged-answer opponent1-color"><span>{firstOpponentName} answered: </span>{firstOpponentAnswer || "no answer"}</div>}
                    {secondOpponentAnswer && <div className="ranged-answer opponent2-color"><span>{secondOpponentName} answered: </span>{secondOpponentAnswer || "no answer"}</div>}
                </div>}
            {props.active &&
                <div className="timer-container">
                    <div className="timer"></div>
                    <Timer {...{seconds: 20}} />
                </div>
            }
        </div>
    )
}

export default RangeQuestionComponent
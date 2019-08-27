import React from 'react';
import AnswerComponent from './AnswerComponent';
import Timer from './Timer';

export interface QuestionProps {
    active: boolean;
    waitingForAnswers: boolean;
    answer: string | undefined | null;
    correctAnswer: string | undefined;
    question: any;
    opponents: any;
}

function MultipleAnswerQuestionComponent(props: QuestionProps) {
    // console.log("Rendering question")
    // console.log("Correct answer", props.correctAnswer);
    let resolveAnswer: boolean;
    let correctAnswer: boolean;
    props.answer && props.correctAnswer ? resolveAnswer = true : resolveAnswer = false;
    props.answer === props.correctAnswer ? correctAnswer = true : correctAnswer = false;
        return (
            <div className="question-container">
                <div className="question-body">
                    <p>{props.question.body}</p>
                </div>
                <div><div className="answer-name">A</div><AnswerComponent {...Object.assign({id:'answerA'}, props)}/></div>
                <div><div className="answer-name">B</div><AnswerComponent {...Object.assign({id:'answerB'}, props)}/></div>
                <div><div className="answer-name">C</div><AnswerComponent {...Object.assign({id:'answerC'}, props)}/></div>
                <div><div className="answer-name">D</div><AnswerComponent {...Object.assign({id:'answerD'}, props)}/></div>
                {props.active &&
                    <div className="timer-container">
                        <div className="timer"></div>
                        <Timer {...{seconds: 20}} />
                    </div>
                }
                {props.waitingForAnswers && <div className="question-announcement"><span>Waiting for other players to answer...</span></div>}
                {resolveAnswer && <span className={correctAnswer ? "resolved correct" : "resolved wrong"}>{correctAnswer ? "Correct Answer" : "Wrong Answer"}</span>}
            </div>
        )
}

export default MultipleAnswerQuestionComponent
import React from 'react';
import AnswerComponent from './AnswerComponent';

export interface QuestionProps {
    id?: any, 
    active: boolean;
    answer: string | undefined | null;
    correctAnswer: string | undefined;
    question: any;
    opponents: any;
}

function MultipleAnswerQuestionComponent(props: QuestionProps) {
    console.log("Rendering question")
    console.log("Correct answer", props.correctAnswer);
    let resolveAnswer: boolean;
    let correctAnswer: boolean;
    props.answer && props.correctAnswer ? resolveAnswer = true : resolveAnswer = false;
    props.answer === props.correctAnswer ? correctAnswer = true : correctAnswer = false;
        return (
            <div className="question-container">
                <div className="question-body">
                    <p>{props.question.body}</p>
                </div>
                <AnswerComponent {...Object.assign({id:'answerA'}, props)}/>
                <AnswerComponent {...Object.assign({id:'answerB'}, props)}/>
                <AnswerComponent {...Object.assign({id:'answerC'}, props)}/>
                <AnswerComponent {...Object.assign({id:'answerD'}, props)}/>
                {resolveAnswer && <span className={correctAnswer ? "resolved correct" : "resolved wrong"}>{correctAnswer ? "Correct Answer" : "Wrong Answer"}</span>}
            </div>
        )
}

export default MultipleAnswerQuestionComponent
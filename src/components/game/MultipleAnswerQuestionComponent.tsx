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
    console.log("The state players in question are")
    console.log(props.opponents)
        return (
            <div className="question-container">
                <div className="question-body">
                    <p>{props.question.body}</p>
                </div>
                <AnswerComponent {...Object.assign({id:'answerA'}, props)}/>
                <AnswerComponent {...Object.assign({id:'answerB'}, props)}/>
                <AnswerComponent {...Object.assign({id:'answerC'}, props)}/>
                <AnswerComponent {...Object.assign({id:'answerD'}, props)}/>
            </div>
        )
}

export default MultipleAnswerQuestionComponent
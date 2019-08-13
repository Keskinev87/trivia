import React from 'react';
import AnswerComponent from './AnswerComponent';

export interface QuestionProps {
    id?: any, 
    active: boolean;
    answer: string | undefined | null;
    correctAnswer: Boolean | undefined | null;
    question: any;
    players: any;
}

function QuestionComponent(props: QuestionProps) {
    console.log("The props for question are")
    console.log(props)
        return (
            <div className="question-container">
                <p>{props.question.body}</p>
                <AnswerComponent {...Object.assign({id:'answerA'}, props)}/>
                <AnswerComponent {...Object.assign({id:'answerB'}, props)}/>
                <AnswerComponent {...Object.assign({id:'answerC'}, props)}/>
                <AnswerComponent {...Object.assign({id:'answerD'}, props)}/>
            </div>
        )
}

export default QuestionComponent
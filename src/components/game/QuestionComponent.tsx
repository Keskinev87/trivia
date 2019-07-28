import React from 'react';
import AnswerComponent from './AnswerComponent';

function QuestionComponent(props: any) {
    console.log("The props for question are")
    console.log(props)
        return (
            <div className="question-container">
                <p>{props.question.body}</p>
                <AnswerComponent id = {'answerA'} questionProps = {props}/>
                <AnswerComponent id = {'answerB'} questionProps = {props}/>
                <AnswerComponent id = {'answerC'} questionProps = {props}/>
                <AnswerComponent id = {'answerD'} questionProps = {props}/>
            </div>
        )
}

export default QuestionComponent
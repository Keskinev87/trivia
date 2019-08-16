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
        return (
            <div className="question-container">
                <div className="question-body">
                    <p>{props.question.body}</p>
                </div>
                <form onSubmit={service.sendRangedAnswer}>
                    <div className="form-group">
                        <input autoFocus type="number" name="answer" id="ranged-question-answer" /> 
                    </div>
                    <button type="submit" value="Submit">Submit</button>
                </form>
                {props.correctAnswer && <div className="correct-answer">{props.correctAnswer}</div>}
            </div>
        )
}

export default RangeQuestionComponent
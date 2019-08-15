import React from 'react';
import { service } from '../../services/socket-service';

export interface QuestionProps {
    id?: any, 
    active: boolean;
    answer: string | undefined | null;
    correctAnswer: string | undefined;
    question: any;
    players: any;
}

function RangeQuestionComponent(props: QuestionProps) {
    console.log("Rendering question")
    console.log("The state players in question are")
    console.log(props.players)
        return (
            <div className="question-container">
                <div className="question-body">
                    <p>{props.question.body}</p>
                </div>
                <form onSubmit={service.sendRangedAnswer}>
                    <div className="form-group">
                        <label htmlFor='answer'>Answer:</label>
                        <input type="number" name="answer" id="ranged-question-answer" /> 
                    </div>
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
}

export default RangeQuestionComponent
import { Question } from '../models/Question';

export enum GameActionTypes {
    RECEIVE_QUESTION = "RECEIVE_QUESTION",
    SEND_ANSWER = "SEND_ANSWER"
}

export interface SendAnswer {
    type: GameActionTypes.SEND_ANSWER;
    answer: String;
}

export interface ReceiveQuestion {
    type: GameActionTypes.RECEIVE_QUESTION;
    question: Question;
}



export type GameActions = ReceiveQuestion | SendAnswer  // | next action

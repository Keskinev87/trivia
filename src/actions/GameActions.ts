import { Question } from '../models/Question';
import { Player } from '../models/Player';

export enum GameActionTypes {
    REQUEST_RANDOM_GAME_SEARCH  = "REQUEST_RANDOM_GAME_SEARCH",
    CANCEL_RANDOM_GAME_SEARCH = "CANCEL_RANDOM_GAME_SEARCH",
    START_RANDOM_GAME = "START_RANDOM_GAME",
    RECEIVE_QUESTION = "RECEIVE_QUESTION",
    SEND_ANSWER = "SEND_ANSWER",
    END_GAME = "END_GAME"
}

export interface RequestRandomGameSearch {
    type: GameActionTypes.REQUEST_RANDOM_GAME_SEARCH;
}

export interface CancelRandomGameSearch {
    type: GameActionTypes.CANCEL_RANDOM_GAME_SEARCH;
}

export interface StartRandomGame {
    type: GameActionTypes.START_RANDOM_GAME;
    roomId: number;
    players: Array<Player>;
}

export interface SendAnswer {
    type: GameActionTypes.SEND_ANSWER;
    answer: String;
}

export interface ReceiveQuestion {
    type: GameActionTypes.RECEIVE_QUESTION;
    question: Question;
}



export type GameActions = RequestRandomGameSearch | CancelRandomGameSearch | StartRandomGame | ReceiveQuestion | SendAnswer  // | next action

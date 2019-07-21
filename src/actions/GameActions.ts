import { Question } from '../models/Question';
import { Player } from '../models/Player';

export enum GameActionTypes {
    REQUEST_RANDOM_GAME_SEARCH  = "REQUEST_RANDOM_GAME_SEARCH",
    CANCEL_RANDOM_GAME_SEARCH = "CANCEL_RANDOM_GAME_SEARCH",
    CREATE_RANDOM_GAME = "CREATE_RANDOM_GAME",
    START_RANDOM_GAME = "START_RANDOM_GAME",
    RECEIVED_QUESTION = "RECEIVE_QUESTION",
    SEND_ANSWER = "SEND_ANSWER",
    END_GAME = "END_GAME"
}

export interface RequestRandomGameSearch {
    type: GameActionTypes.REQUEST_RANDOM_GAME_SEARCH;
}

export interface CancelRandomGameSearch {
    type: GameActionTypes.CANCEL_RANDOM_GAME_SEARCH;
}

export interface CreateRandomGame {
    type: GameActionTypes.CREATE_RANDOM_GAME;
    roomId: number;
    players: Array<Player>;
}

export interface StartRandomGame {
    type: GameActionTypes.START_RANDOM_GAME;
}

export interface SendAnswer {
    type: GameActionTypes.SEND_ANSWER;
    answer: String;
}

export interface ReceivedQuestion {
    type: GameActionTypes.RECEIVED_QUESTION;
    question: Question;
}



export type GameActions = RequestRandomGameSearch | CancelRandomGameSearch | CreateRandomGame | StartRandomGame | ReceivedQuestion
 | SendAnswer  // | next action

import { MultipleAnswerQuestion, RangeQuestion } from '../models/Question';
import { Player } from '../models/Player';

export enum GameActionTypes {
    REQUEST_RANDOM_GAME_SEARCH  = "REQUEST_RANDOM_GAME_SEARCH",
    CANCEL_RANDOM_GAME_SEARCH = "CANCEL_RANDOM_GAME_SEARCH",
    CREATE_RANDOM_GAME = "CREATE_RANDOM_GAME",
    START_RANDOM_GAME = "START_RANDOM_GAME",
    RECEIVED_QUESTION = "RECEIVE_QUESTION",
    SHOW_QUESTION = "SHOW_QUESTION",
    SEND_ANSWER = "SEND_ANSWER",
    CORRECT_ANSWER = "CORRECT_ANSWER",
    WRONG_ANSWER = "WRONG_ANSWER",
    START_NEW_ROUND = "START_NEW_ROUND",
    GAME_OVER = "GAME_OVER",
    RESET_GAME_STATE = "RESET_GAME_STATE"
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

export interface ReceivedQuestion {
    type: GameActionTypes.RECEIVED_QUESTION;
    question: MultipleAnswerQuestion | RangeQuestion;
}

export interface ShowQuestion {
    type: GameActionTypes.SHOW_QUESTION;
}

export interface SendAnswer {
    type: GameActionTypes.SEND_ANSWER;
    answer: string;
}

export interface CorrectAnswer {
    type: GameActionTypes.CORRECT_ANSWER;
    correctAnswer: string,
    playersAnswers: any;
}

export interface WrongAnswer {
    type: GameActionTypes.WRONG_ANSWER;
    playersAnswers: any;
}

export interface StartNewRound {
    type: GameActionTypes.START_NEW_ROUND;
}

export interface GameOver {
    type: GameActionTypes.GAME_OVER;
}

export interface ResetGameState {
    type: GameActionTypes.RESET_GAME_STATE
}


export type GameActions = RequestRandomGameSearch | CancelRandomGameSearch | CreateRandomGame | StartRandomGame | ReceivedQuestion
 | ShowQuestion | SendAnswer | CorrectAnswer | WrongAnswer | StartNewRound | GameOver | ResetGameState // | next action

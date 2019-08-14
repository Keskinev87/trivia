import { Reducer } from 'redux';
// import { Player } from '../models/Player';
import { Question } from '../models/Question'
import { GameActionTypes, GameActions } from '../actions/GameActions'

export enum GameStatus {
    NOT_PLAYING = "NOT_PLAYING",
    SEARCHING_FOR_GAME = "SEARCHING_FOR_GAME",
    WAITING_FOR_PLAYERS = "WAITING_FOR_PLAYERS",
    STARTING = "STARTING",
    RUNNING = "RUNNING",
    ANSWER_SUBMITTED = "ANSWER_SUBMITTED",
    WAITING_FOR_ANSWER = "WAITING_FOR_ANSWER",
    RESOLVING_ANSWERS = "RESOLVING_ANSWERS",
    GETTING_NEXT_QUESTION = "GETTING_NEXT_QUESTION",
    GAME_OVER = "GAME_OVER"
}

export interface GameState {
    roomId: Number | null,
    status: GameStatus,
    currentQuestion: Question | undefined,
    currentAnswer: string | undefined,
    correctAnswer: string | undefined,
    players: any,
    isLoading: Boolean,
    isError: Boolean,
    error: string | undefined
}

const initialGameState: GameState = {
    roomId: null,
    status: GameStatus.NOT_PLAYING,
    currentQuestion: undefined,
    currentAnswer: undefined,
    correctAnswer: undefined,
    players: undefined,
    isLoading: false,
    isError: false,
    error: undefined
}

export const gameReducer: Reducer<GameState, GameActions> = (
    state = initialGameState,
    action
) => {
    switch (action.type) {
        case GameActionTypes.REQUEST_RANDOM_GAME_SEARCH: {
            console.log("Request random game search")
            return {
                ...state,
                status: GameStatus.SEARCHING_FOR_GAME,
                isLoading: true
            }
        }
        case GameActionTypes.CANCEL_RANDOM_GAME_SEARCH: {
            return {
                ...state,
                status: GameStatus.NOT_PLAYING,
                isLoading: false
            }
        }
        case GameActionTypes.CREATE_RANDOM_GAME: {
            return {
                ...state,
                status: GameStatus.STARTING,
                isLoading: false,
                players: action.players,
                roomId: action.roomId
            }
        }
        case GameActionTypes.START_RANDOM_GAME: {
            return {
                ...state,
                status: GameStatus.RUNNING
            }
        }
        case GameActionTypes.RECEIVED_QUESTION: {
            return {
                ...state,
                currentQuestion: action.question,
                status: GameStatus.WAITING_FOR_ANSWER
            }
        }
        case GameActionTypes.SHOW_QUESTION: {
            return {
                ...state,
                status: GameStatus.WAITING_FOR_ANSWER
            }
        }
        case GameActionTypes.SEND_ANSWER: {
            return {
                ...state,
                status: GameStatus.ANSWER_SUBMITTED,
                currentAnswer: action.answer
            }
        }
        case GameActionTypes.CORRECT_ANSWER: {
            Object.keys(state.players).forEach((key) => {
                state.players[key].currentAnswer = action.playersAnswers[key];
            });
            return {
                ...state,
                status: GameStatus.RESOLVING_ANSWERS,
                correctAnswer: action.correctAnswer,
            }
        }
        // case GameActionTypes.WRONG_ANSWER: {
        //     return {
        //         ...state,
        //         status: GameStatus.RESOLVING_ANSWERS,
        //         correctAnswer: false
        //     }
        // }
        case GameActionTypes.START_NEW_ROUND: {
            return {
                ...state,
                status: GameStatus.GETTING_NEXT_QUESTION,
                currentQuestion: undefined,
                currentAnswer: undefined,
                correctAnswer: undefined
            }
        }
        case GameActionTypes.GAME_OVER: {
            return {
                ...state,
                status: GameStatus.GAME_OVER
            }
        }
        case GameActionTypes.RESET_GAME_STATE: {
            return {
                ...initialGameState
            }
        }
        default: {
            console.log("Defaulted");
            return state;
        }
    }
}
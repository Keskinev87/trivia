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
    OVER = "OVER"
}

export interface GameState {
    roomId: Number | null,
    status: GameStatus,
    currentQuestion: Question | undefined,
    currentAnswer: String | undefined,
    correctAnswer: Boolean,
    players: object | undefined,
    isLoading: Boolean,
    isError: Boolean,
    error: String
}

const initialGameState: GameState = {
    roomId: null,
    status: GameStatus.NOT_PLAYING,
    currentQuestion: undefined,
    currentAnswer: undefined,
    correctAnswer: false,
    players: undefined,
    isLoading: false,
    isError: false,
    error: ''
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
            return {
                ...state,
                status: GameStatus.RESOLVING_ANSWERS,
                correctAnswer: true
            }
        }
        case GameActionTypes.WRONG_ANSWER: {
            return {
                ...state,
                status: GameStatus.RESOLVING_ANSWERS,
                correctAnswer: false
            }
        }
        case GameActionTypes.START_NEW_ROUND: {
            return {
                ...state,
                status: GameStatus.RUNNING,
                currentQuestion: undefined,
                currentAnswer: undefined,
                correctAnswer: false
            }
        }
        default: {
            console.log("Defaulted");
            return state;
        }
    }
}
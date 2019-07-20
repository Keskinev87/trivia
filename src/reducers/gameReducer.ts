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
    OVER = "OVER"
}

export interface GameState {
    roomId: Number | null,
    status: GameStatus,
    currentQuestion: Question | {},
    players: object | undefined,
    isLoading: Boolean,
    isError: Boolean,
    error: String
}

const initialGameState: GameState = {
    roomId: null,
    status: GameStatus.NOT_PLAYING,
    currentQuestion: {},
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
        case GameActionTypes.START_RANDOM_GAME: {
            return {
                ...state,
                status: GameStatus.STARTING,
                isLoading: false,
                players: action.players,
                roomId: action.roomId
            }
        }
        case GameActionTypes.RECEIVE_QUESTION: {
            return {
                ...state,
                currentQuestion: action.question
            }
        }
        default: {
            console.log("Defaulted");
            return state;
        }
    }
}
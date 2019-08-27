import { Reducer } from 'redux';
// import { Player } from '../models/Player';
import { MultipleAnswerQuestion, RangeQuestion } from '../models/Question'
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
    RESOLVING_ROUND = "RESOLVING_ROUND",
    GETTING_NEXT_QUESTION = "GETTING_NEXT_QUESTION",
    RESOLVING_GAME = "RESOLVING_GAME",
    GAME_OVER = "GAME_OVER"
}

export interface GameInfo {
    questionsCount: number,
    currentQuestionNumber: number,
}

export interface PlayerInfo {
    // answers: []
    avatar: string,
    health: number,
    id: string,
    nickName: string,
    correctAnswers: number,
    wrongAnswers: number
}

export interface GameState {
    roomId: Number | null,
    status: GameStatus,
    gameInfo: GameInfo | undefined,
    playerInfo: PlayerInfo | undefined,
    currentQuestion: MultipleAnswerQuestion | RangeQuestion | undefined,
    currentAnswer: string | undefined,
    correctAnswer: string | undefined,
    opponents: any,
    resolveData: any,
    resolveGameData: any,
    isLoading: Boolean,
    isError: Boolean,
    error: string | undefined
}

const initialGameState: GameState = {
    roomId: null,
    status: GameStatus.NOT_PLAYING,
    gameInfo: undefined,
    playerInfo: undefined,
    currentQuestion: undefined,
    currentAnswer: undefined,
    correctAnswer: undefined,
    opponents: undefined,
    resolveData: undefined,
    resolveGameData: undefined,
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
                opponents: action.opponents,
                gameInfo: action.gameInfo,
                playerInfo: action.playerInfo,
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
        case GameActionTypes.ANSWER_RECEIVED: {
            Object.keys(state.opponents).forEach((key) => {
                state.opponents[key].currentAnswer = action.opponentsAnswers[key];
            });
            return {
                ...state,
                status: GameStatus.RESOLVING_ANSWERS,
                correctAnswer: action.correctAnswer,
            }
        }
        case GameActionTypes.RESOLVE_ROUND: {
            if(state.playerInfo) {
                state.playerInfo.health -= action.resolveData[state.playerInfo.id].damage;
                action.resolveData[state.playerInfo.id].damage > 0 ? state.playerInfo.wrongAnswers++ : state.playerInfo.correctAnswers++;
                Object.keys(state.opponents).forEach((key) => {
                    state.opponents[key].health -= action.resolveData[key].damage;
                    action.resolveData[key].damage > 0 ? state.opponents[key].wrongAnswers++ : state.opponents[key].correctAnswers++;
                })
            }
            
            return {
                ...state,
                status: GameStatus.RESOLVING_ROUND,
                resolveData: action.resolveData
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
            state.gameInfo && state.gameInfo.currentQuestionNumber++;
            return {
                ...state,
                status: GameStatus.GETTING_NEXT_QUESTION,
                currentQuestion: undefined,
                currentAnswer: undefined,
                correctAnswer: undefined,
                resolveData: undefined
            }
        }
        case GameActionTypes.RESOLVE_GAME: {
            console.log("Resolve game action dispatched")
            console.log(action.resolveData)
            return {
                ...state,
                status: GameStatus.RESOLVING_GAME,
                resolveGameData: action.resolveData
            }
        }
        case GameActionTypes.RESET_GAME_STATE: {
            return {
                ...initialGameState
            }
        }
        default: {
            // console.log("Defaulted");
            return state;
        }
    }
}
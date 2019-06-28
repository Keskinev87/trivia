import { Reducer } from 'redux';
import { Player } from '../models/Player';
import { Question } from '../models/Question'
import { GameActionTypes, GameActions } from '../actions/GameActions'
import { UserActionTypes } from '../actions/UserActions';

export interface GameState {
    roomId: Number | null,
    currentQuestion: Question | {},
    players: Array<Player>,
    isLoading: Boolean,
    isError: Boolean,
    error: String
}

const initialGameState: GameState = {
    roomId: null,
    currentQuestion: {},
    players: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const gameReducer: Reducer<GameState, GameActions> = (
    state = initialGameState,
    action
) => {
    switch (action.type) {
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
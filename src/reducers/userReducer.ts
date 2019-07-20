import { Reducer } from 'redux';
import { User } from '../models/User';
import { UserActionTypes, UserActions } from '../actions/UserActions'

export enum PlayerStatus {
    IDLE = "IDLE",
    CHALLENGED = "CHALLENGED",
    PLAYING = "PLAYING",
    WAITING = "WAITING",
    OFFLINE = "OFFLINE",
    RECONNECTING = "RECONNECTING",
}

export interface UserState {
    user: User | undefined,
    token: String | undefined,
    status: PlayerStatus,
    challengeRoomId: String | undefined,
    isLoading: Boolean,
    isError: Boolean,
    error: String,
    email: String,
    password: String
}

const initialUserState: UserState = {
    user: undefined,
    token: undefined,
    status: PlayerStatus.IDLE,
    challengeRoomId: undefined,
    isLoading: false,
    isError: false,
    error: '',
    email: '',
    password: ''
}

export const userReducer: Reducer<UserState, UserActions> = (
    state = initialUserState,
    action
) => {
    switch (action.type) {
        case UserActionTypes.TRY_LOGIN: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case UserActionTypes.LOGIN_FAILED: {
            return{
                ...state,
                isLoading: false,
                isError: true,
                error: action.error,
            }
        }
        case UserActionTypes.LOGIN_SUCCESS: {
            console.log("Login was succ")
            return {
                ...state,
                isLoading: false,
                isError: false,
                user: action.user,
                token: action.token,
                error: ''
            }
        }
        case UserActionTypes.LOGOUT: {
            return {
                ...state,
                user: undefined,
                token: ''
            }
        }
        case UserActionTypes.START_RANDOM_GAME: {
            return {
                ...state,
                status: PlayerStatus.PLAYING
            }
        }
        default: {
            console.log("Defaulted");
            return state;
        }
    }
}
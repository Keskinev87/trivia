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
    SIGNINGUP = "SIGNINGUP",
    LOGGINGIN = "LOGGINGIN"
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
        case UserActionTypes.CHECK_LOGGED_IN: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case UserActionTypes.SELECT_LOGIN: {
            return {
                ...state,
                status: PlayerStatus.LOGGINGIN
            }
        }
        case UserActionTypes.SELECT_SIGNUP: {
            return {
                ...state,
                status: PlayerStatus.SIGNINGUP
            }
        }
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
        default: {
            console.log("Defaulted");
            return state;
        }
    }
}
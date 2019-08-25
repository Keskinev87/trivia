import { Reducer } from 'redux';
import { User } from '../models/User';
import { UserActionTypes, UserActions } from '../actions/UserActions'

export enum PlayerStatus {
    IDLE = "IDLE",
    CHALLENGED = "CHALLENGED",
    PLAYING = "PLAYING",
    SEARCHING_FOR_RANDOM_GAME = "SEARCHING_FOR_RANDOM_GAME",
    WAITING = "WAITING",
    OFFLINE = "OFFLINE",
    RECONNECTING = "RECONNECTING",
}

export enum Intents {
    LOGIN = "LOGIN",
    SIGNUP = "SIGNUP"
}

export interface SignupData {
    email: string,
    password: string,
    nickName: string,
    avatar: string
}

export interface LoginData {
    email: string,
    password: string
}

export interface UserState {
    user: User | undefined,
    intent: Intents,
    signupData: SignupData,
    loginData: LoginData,
    token: string | undefined,
    status: PlayerStatus,
    challengeRoomId: string | undefined,
    isLoading: Boolean,
    isError: Boolean,
    error: string,
    email: string,
    password: string
}

const initialUserState: UserState = {
    user: undefined,
    intent: Intents.LOGIN,
    signupData: {
        email: '',
        password: '',
        nickName: '',
        avatar: 'empty'
    },
    loginData: {
        email: '',
        password: ''
    },
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
        case UserActionTypes.CHANGE_INTENT: {
            return {
                ...state,
                intent: Intents[action.intent]
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
            console.log("Login was succ")
            return {
                ...state,
                loginData: initialUserState.loginData,
                isLoading: false,
                isError: false,
                user: action.user,
                token: action.token,
                error: ''
            }
        }
        case UserActionTypes.TRY_SIGNUP: {
            return {
                ...state,
                signupData: action.signupData,
                isLoading: true
            }
        }
        case UserActionTypes.SIGNUP_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        }
        case UserActionTypes.SIGNUP_SUCCESS: {
            return {
                ...state,
                intent: Intents.LOGIN,
                signupData: initialUserState.signupData,
                isLoading: false,
                isError: false,
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
        case UserActionTypes.SEARCHING_FOR_GAME: {
            return {
                ...state,
                status: PlayerStatus.SEARCHING_FOR_RANDOM_GAME
            }
        }
        case UserActionTypes.START_RANDOM_GAME: {
            return {
                ...state,
                status: PlayerStatus.PLAYING
            }
        }
        case UserActionTypes.EXIT_GAME: {
            return {
                ...state,
                status: PlayerStatus.IDLE
            }
        }
        default: {
            console.log("Defaulted");
            return state;
        }
    }
}
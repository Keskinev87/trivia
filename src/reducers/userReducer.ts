import { Reducer } from 'redux';
import { User } from '../models/User';
import { UserActionTypes, UserActions } from '../actions/UserActions'

export interface UserState {
    user: User | undefined,
    token: String | undefined,
    isLoading: Boolean,
    isError: Boolean,
    error: String
}

const initialUserState: UserState = {
    user: undefined,
    token: undefined,
    isLoading: false,
    isError: false,
    error: ''
}

export const userReducer: Reducer<UserState, UserActions> = (
    state = initialUserState,
    action
) => {
    switch (action.type) {
        case UserActionTypes.TRY_LOGIN: {
            return {
                isLoading: true,
                ...state
            }
        }
        case UserActionTypes.LOGIN_FAILED: {
            return{
                isLoading: false,
                isError: true,
                error: action.error,
                ...state
            }
        }
        case UserActionTypes.LOGIN_SUCCESS: {
            return {
                isLoading: false,
                isError: false,
                user: action.user,
                token: action.token,
                error: ''
            }
        }
        default: {
            console.log("Defaulted");
            return state;
        }
    }
}
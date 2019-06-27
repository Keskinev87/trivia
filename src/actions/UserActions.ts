import { User } from '../models/User';
import { UserState } from '../reducers/userReducer';

export enum UserActionTypes {
    CHECK_LOGGED_IN = "CHECK_LOGGED_IN",
    TRY_LOGIN = "TRY_LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILED = "LOGIN_FAILED"
}

export interface CheckLoggedIn {
    type: UserActionTypes.CHECK_LOGGED_IN,
    token: String
}

export interface UserTryLogin {
    type: UserActionTypes.TRY_LOGIN;
    loginCredentials: Object;
}

export interface UserLoginSuccess {
    type: UserActionTypes.LOGIN_SUCCESS;
    user: User;
    token: String;
}

export interface UserLoginFailed {
    type: UserActionTypes.LOGIN_FAILED;
    error: String;
}

export type UserActions = CheckLoggedIn | UserTryLogin | UserLoginSuccess | UserLoginFailed // | next action
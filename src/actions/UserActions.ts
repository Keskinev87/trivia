import { User } from '../models/User';
import { Friend } from '../models/Friend';
import { Intents, SignupData, LoginData } from '../reducers/userReducer';

export enum UserActionTypes {
    CHANGE_INTENT = "CHANGE_INTENT",
    TRY_LOGIN = "TRY_LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILED = "LOGIN_FAILED",
    LOGOUT = "LOGOUT",
    TRY_SIGNUP = "TRY_SIGNUP",
    SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
    SIGNUP_FAILED = "SIGNUP_FAILED",
    FRIEND_IS_ONLINE = "FRIEND_IS_ONLINE",
    FRIEND_IS_OFFLINE = "FRIEND_IS_OFFLINE",
    SEARCHING_FOR_GAME = "SEARCHING_FOR_GAME",
    START_RANDOM_GAME = "START_RANDOM_GAME",
    EXIT_GAME = "EXIT_GAME",
    // RECEIVED_CHALLENGE = "RECEIVED_CHALLENGE", //TODO: think of the logic for private games
    // SEND_CHALLENGE = "SEND_CHALLENGE",
    TRY_JOIN_RANDOM_ROOM = "",
    CANCEL_JOIN_RANDOM_ROOM = "",
    JOIN_RANDOM_ROOM_SUCCESS = "",
    JOIN_RANDOM_ROOM_FAIL = ""
}

export interface ChangeIntent {
    type: UserActionTypes.CHANGE_INTENT;
    intent: Intents
}

export interface UserTryLogin {
    type: UserActionTypes.TRY_LOGIN;
    loginData: LoginData;
}

export interface UserLoginSuccess {
    type: UserActionTypes.LOGIN_SUCCESS;
    user: User;
    token: string;
}

export interface UserLoginFailed {
    type: UserActionTypes.LOGIN_FAILED;
    error: string;
}

export interface UserLogout {
    type: UserActionTypes.LOGOUT;
}

export interface TrySignup {
    type: UserActionTypes.TRY_SIGNUP;
    signupData: SignupData
}

export interface SignupSuccess {
    type: UserActionTypes.SIGNUP_SUCCESS;
}

export interface SignupFailed {
    type: UserActionTypes.SIGNUP_FAILED;
    error: string;
}

export interface FriendIsOnline {
    type: UserActionTypes.FRIEND_IS_ONLINE,
    friend: Friend
}

export interface FriendIsOffline {
    type: UserActionTypes.FRIEND_IS_OFFLINE,
    friend: Friend
}

export interface SearchingForGame {
    type: UserActionTypes.SEARCHING_FOR_GAME
}

export interface StartRandomGame {
    type: UserActionTypes.START_RANDOM_GAME
}

export interface TryJoinRandomRoom {
    type: UserActionTypes.TRY_JOIN_RANDOM_ROOM
}

export interface CancelJoinRandomRoom {
    type: UserActionTypes.CANCEL_JOIN_RANDOM_ROOM
}

export interface JoinRandomRoomSuccess {
    type: UserActionTypes.JOIN_RANDOM_ROOM_SUCCESS
}

export interface JoinRandomRoomFail {
    type: UserActionTypes.JOIN_RANDOM_ROOM_FAIL
}

export interface ExitGame {
    type: UserActionTypes.EXIT_GAME;
}



export type UserActions = ChangeIntent | UserTryLogin | UserLoginSuccess | UserLoginFailed | UserLogout| TrySignup | SignupSuccess | SignupFailed |
 FriendIsOnline | FriendIsOffline | SearchingForGame| StartRandomGame | TryJoinRandomRoom | CancelJoinRandomRoom | JoinRandomRoomSuccess | JoinRandomRoomFail |
 ExitGame // | next action

import { User } from '../models/User';
import { Friend } from '../models/Friend';

export enum UserActionTypes {
    TRY_LOGIN = "TRY_LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILED = "LOGIN_FAILED",
    LOGOUT = "LOGOUT",
    TRY_SIGNUP = "TRY_SIGNUP",
    SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
    SIGNUP_FAILED = "SIGNUP_FAILED",
    FRIEND_IS_ONLINE = "FRIEND_IS_ONLINE",
    FRIEND_IS_OFFLINE = "FRIEND_IS_OFFLINE",
    START_RANDOM_GAME = "START_RANDOM_GAME",
    // RECEIVED_CHALLENGE = "RECEIVED_CHALLENGE", //TODO: think of the logic for private games
    // SEND_CHALLENGE = "SEND_CHALLENGE",
    TRY_JOIN_RANDOM_ROOM = "",
    CANCEL_JOIN_RANDOM_ROOM = "",
    JOIN_RANDOM_ROOM_SUCCESS = "",
    JOIN_RANDOM_ROOM_FAIL = ""
}

export interface UserTryLogin {
    type: UserActionTypes.TRY_LOGIN;
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

export interface UserLogout {
    type: UserActionTypes.LOGOUT;
}

export interface TrySignup {
    type: UserActionTypes.TRY_SIGNUP;
}

export interface SignupSuccess {
    type: UserActionTypes.SIGNUP_SUCCESS;
}

export interface SignupFailed {
    type: UserActionTypes.SIGNUP_FAILED;
}

export interface FriendIsOnline {
    type: UserActionTypes.FRIEND_IS_ONLINE,
    friend: Friend
}

export interface FriendIsOffline {
    type: UserActionTypes.FRIEND_IS_OFFLINE,
    friend: Friend
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



export type UserActions = UserTryLogin | UserLoginSuccess | UserLoginFailed | UserLogout| TrySignup | SignupSuccess | SignupFailed |
 FriendIsOnline | FriendIsOffline | StartRandomGame | TryJoinRandomRoom | CancelJoinRandomRoom | JoinRandomRoomSuccess | JoinRandomRoomFail // | next action

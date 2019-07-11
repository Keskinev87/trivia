import { User } from '../models/User';
import { Friend } from '../models/Friend';

export enum UserActionTypes {
    CHECK_LOGGED_IN = "CHECK_LOGGED_IN",
    SELECT_LOGIN = "SELECT_LOGIN",
    SELECT_SIGNUP = "SELECT_SIGNUP",
    TRY_LOGIN = "TRY_LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILED = "LOGIN_FAILED",
    LOGOUT = "LOGOUT",
    FRIEND_IS_ONLINE = "FRIEND_IS_ONLINE",
    FRIEND_IS_OFFLINE = "FRIEND_IS_OFFLINE",
    // RECEIVED_CHALLENGE = "RECEIVED_CHALLENGE", //TODO: think of the logic for private games
    // SEND_CHALLENGE = "SEND_CHALLENGE",
    TRY_JOIN_RANDOM_ROOM = "",
    CANCEL_JOIN_RANDOM_ROOM = "",
    JOIN_RANDOM_ROOM_SUCCESS = "",
    JOIN_RANDOM_ROOM_FAIL = ""
}

export interface CheckLoggedIn {
    type: UserActionTypes.CHECK_LOGGED_IN;
}

export interface SelectLogin {
    type: UserActionTypes.SELECT_LOGIN;
}

export interface SelectSignup {
    type: UserActionTypes.SELECT_SIGNUP;
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

export interface FriendIsOnline {
    type: UserActionTypes.FRIEND_IS_ONLINE,
    friend: Friend
}

export interface FriendIsOffline {
    type: UserActionTypes.FRIEND_IS_OFFLINE,
    friend: Friend
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



export type UserActions = CheckLoggedIn | SelectLogin | SelectSignup | UserTryLogin | UserLoginSuccess | UserLoginFailed | UserLogout
| FriendIsOnline | FriendIsOffline | TryJoinRandomRoom | CancelJoinRandomRoom | JoinRandomRoomSuccess | JoinRandomRoomFail // | next action

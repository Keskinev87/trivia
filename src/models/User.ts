import { Friend } from './Friend'

export interface User {
    nickName: String,
    email: String,
    friends: Array<Friend>,
    onlineFriends: Array<Friend>,
    status: String,
    logged_in: Boolean
}
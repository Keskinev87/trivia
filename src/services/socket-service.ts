import {store} from '../index';
import io from 'socket.io-client';
import { UserActionTypes } from '../actions/UserActions';
import { User } from '../models/User';
import { GameActionTypes } from '../actions/GameActions';

var socket: any;
let token = localStorage.getItem('token');
socket = io('localhost:3001', {query: token ? `auth_token=${token}` : '', reconnection: true});

socket.on("login success", (data: any) => {
    localStorage.setItem("token", data.token);
    store.dispatch({
        type: UserActionTypes.LOGIN_SUCCESS,
        user: data.user,
        token: data.token
    })
})

socket.on("login failed", (data: any) => {
    console.log("error")
    console.log(data.reason)
    store.dispatch({
        type: UserActionTypes.LOGIN_FAILED,
        error: data.reason
    })
});

socket.on("user", (user: User) => {
    console.log("Got user")
    console.log(user)
    user ? 
    store.dispatch({
      user: user,
      type: UserActionTypes.LOGIN_SUCCESS,
    }) :
    store.dispatch({
      type: UserActionTypes.LOGIN_FAILED
    })
  });

  socket.on("error", (data: any) => {
    console.log(data);
  });
  //if the login succeeds, reconnect the socket in order to add the token to it. 

socket.on("signup failed", (data: any) => {
    console.log("error")
    console.log(data.reason)
    store.dispatch({
        type: UserActionTypes.SIGNUP_FAILED,
        error: data.reason
    })
});

socket.on("signup success", (data: any) => {
    console.log("Signup was successfull")
    store.dispatch({
        type: UserActionTypes.SIGNUP_SUCCESS
    })
})

socket.on("logout success", () => {
    socket = io.connect('localhost:3001');
    store.dispatch({
      type: UserActionTypes.LOGOUT
    })
})
// GAME EVENTS
socket.on("random game created", (data: any) => {
    console.log("Game was created")
    store.dispatch({
        type: GameActionTypes.START_RANDOM_GAME,
        roomId: data.roomId,
        players: data.players
    });
})

export const service: any = {
    getUser: () => {
        console.log("Trying to get user")
        socket.emit('get user')
        store.dispatch({
            type:UserActionTypes.TRY_LOGIN
        })
    },
    tryLogin: (email: string, password: string) => {
        store.dispatch({
            type:UserActionTypes.TRY_LOGIN,
        })
        socket.emit("login", {email: email, password: password});
    },
    trySignup: (email: string, password: string) => {
        store.dispatch({
            type:UserActionTypes.TRY_SIGNUP,
        })
        socket.emit("signup", {email: email, password: password});
    },
    //game services
    searchForRandomGame: () => {
        console.log("Will search for random game")
        store.dispatch({
            type: GameActionTypes.REQUEST_RANDOM_GAME_SEARCH
        })
        socket.emit("join random game")
    }
}
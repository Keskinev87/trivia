import {store} from '../index';
import io from 'socket.io-client';
import { UserActionTypes } from '../actions/UserActions';
import { User } from '../models/User';
import { GameActionTypes } from '../actions/GameActions';

var socket: any;
let token = localStorage.getItem('token');
socket = io('localhost:3001', {query: token ? `auth_token=${token}` : '', reconnection: true});
console.log("Socket initialized")
socket.on("login success", (data: any) => {
    localStorage.setItem("token", data.token);
    socket = io.connect('localhost:3001', {query: `auth_token=${data.token}`, reconnection: true});
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
    console.log(data)
    store.dispatch({
        type: GameActionTypes.CREATE_RANDOM_GAME,
        roomId: data.roomId,
        players: data.players
    });
});

socket.on("game started", () => {
    console.log("Game started");
    store.dispatch({
        type: GameActionTypes.START_RANDOM_GAME
    })
});

socket.on("new question", (data:any) => {
    console.log("QUestion is");
    console.log(data.question);
    store.dispatch({
        type: GameActionTypes.RECEIVED_QUESTION,
        question: data.question
    });
    socket.emit("question received");
})

socket.on("show question", () => {
    store.dispatch({
        type: GameActionTypes.SHOW_QUESTION
    })
})

socket.on("game over", () => {
    console.log("Game is over")
})

socket.on("show answer", (data: any) => {
    console.log("The answer is")
    console.log(data.answer)
    console.log("Your answer is");
    console.log(store.getState().gameState)
    if(data.answer === store.getState().gameState.currentAnswer) {
        console.log("Right answer")
        store.dispatch({
            type: GameActionTypes.CORRECT_ANSWER,
            playersAnswers: data.playersAnswers
        })
    } else {
        console.log("Wrong answer")
        store.dispatch({
            type: GameActionTypes.WRONG_ANSWER,
            playersAnswers: data.playersAnswers
        })
    }
    setTimeout(() => {
        store.dispatch({
            type: GameActionTypes.START_NEW_ROUND
        })
    }, 3000)
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
    trySignup: (email: string, password: string, nickName: string) => {
        store.dispatch({
            type:UserActionTypes.TRY_SIGNUP,
        })
        socket.emit("signup", {email: email, password: password, nickName: nickName});
    },
    //game services
    searchForRandomGame: () => {
        console.log("Will search for random game")
        socket.emit("join random game")
        store.dispatch({
            type: GameActionTypes.REQUEST_RANDOM_GAME_SEARCH
        })
    },
    getQuestion: () => {
        console.log("Getting question");
        socket.emit("get question");
    },
    sendAnswer: (event: any) => {
        console.log(event.target.id);
        store.dispatch({
            type: GameActionTypes.SEND_ANSWER,
            answer: event.target.id
        })
        socket.emit('set answer', {answer: event.target.id});
    }
}
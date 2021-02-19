import {store} from '../index';
import io from 'socket.io-client';
import { UserActionTypes } from '../actions/UserActions';
import { User } from '../models/User';
import { GameActionTypes } from '../actions/GameActions';
import { GeneralAppActionTypes } from '../actions/GeneralAppActions';
let env = 'production';
let connectionEndPoint: string;

env === "production" ? connectionEndPoint = 'https://trivia-gladiators-server.herokuapp.com/' : connectionEndPoint = 'localhost:3001';

if( env === "development" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    connectionEndPoint = 'http://192.168.1.138:3001/';
}
var socket: any;

export const service: any = {
    init: () => {
        // console.log("Initing")
        let token = localStorage.getItem('token');
        socket = io(connectionEndPoint, {query: token ? `auth_token=${token}` : '', reconnection: true});
        // console.log(socket)
        if(socket.disconnected===false) {
            store.dispatch({
                type: GeneralAppActionTypes.ERROR,
                message: "It seems you have opened the game on another device or tab of your browser. Only one connection is allowed at a time. Please close the other window id you want to continue..."
            })
        } else {
            attachSocketEventListeners();
            // console.log("Socket initialized");
            service.getUser();
        }
        // console.log("Socket initialized");
    },
    setIntent: (e: any) => {
        // console.log("Target is")
        // console.log(e.target)
        store.dispatch({
            type:UserActionTypes.CHANGE_INTENT,
            intent: e.target.id ? e.target.id : e.target.parentNode.id
        })
    },
    getUser: () => {
        // console.log("Trying to get user")
        socket.emit('get user')
        store.dispatch({
            type:UserActionTypes.TRY_LOGIN
        })
    },
    tryLogin: (email: string, password: string) => {
        store.dispatch({
            type:UserActionTypes.TRY_LOGIN,
            loginData: {email, password}
        })
        socket.emit("login", {email: email, password: password});
    },
    tryLoginWithFacebook: (data: any ) => {
        store.dispatch({
            type: UserActionTypes.TRY_LOGIN
        })
        socket.emit("login facebook", data);
    },
    trySignup: (email: string, password: string, nickName: string, avatar: string) => {
        store.dispatch({
            type:UserActionTypes.TRY_SIGNUP,
            signupData: {
                email, password, nickName, avatar
            }
        })
        socket.emit("signup", {email: email, password: password, nickName: nickName, avatar: avatar});
    },
    //game services
    searchForRandomGame: () => {
        // console.log("Will search for random game")
        // console.log(socket)
        socket.emit("join random game")
        store.dispatch({
            type: UserActionTypes.SEARCHING_FOR_GAME
        })
        store.dispatch({
            type: GameActionTypes.REQUEST_RANDOM_GAME_SEARCH
        })
    },
    getQuestion: () => {
        // console.log("Getting question");
        socket.emit("get question");
    },
    sendMultipleAnswer: (event: any) => {
        // console.log(event.target.id);
        store.dispatch({
            type: GameActionTypes.SEND_ANSWER,
            answer: event.target.id
        })
        socket.emit('set multiple answer', {answer: event.target.id});
    },
    sendRangedAnswer: (event: any) => {
        event.preventDefault();
        let answer = (document.getElementById("ranged-question-answer") as HTMLInputElement).value;
        store.dispatch({
            type: GameActionTypes.SEND_ANSWER,
            answer: event.target.id
        })
        socket.emit('set ranged answer', {answer: answer});
    },
    endGame: () => {
        console.log("Ending game");
        store.dispatch({
            type: UserActionTypes.EXIT_GAME
        });
        store.dispatch({
            type: GameActionTypes.RESET_GAME_STATE
        })
    }
}

function attachSocketEventListeners() {
    socket.on("login success", (data: any) => {
        localStorage.setItem("token", data.token);
        socket = io.connect(connectionEndPoint, {query: `auth_token=${data.token}`, reconnection: true});
        attachSocketEventListeners();
        store.dispatch({
            type: UserActionTypes.LOGIN_SUCCESS,
            user: data.user,
            token: data.token
        });
    })
    
    socket.on("login failed", (data: any) => {
        // console.log("error")
        // console.log(data.reason)
        store.dispatch({
            type: UserActionTypes.LOGIN_FAILED,
            error: data.reason
        });
    });
    
    socket.on("user", (user: User) => {
        // console.log("Got user")
        // console.log(user)
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
        // console.log("error")
        // console.log(data.reason)
        store.dispatch({
            type: UserActionTypes.SIGNUP_FAILED,
            error: data.reason
        });
    });
    
    socket.on("signup success", (data: any) => {
        console.log("Signup was successfull")
        store.dispatch({
            type: UserActionTypes.SIGNUP_SUCCESS
        });
    })
    
    socket.on("logout success", () => {
        socket = io.connect(connectionEndPoint);
        attachSocketEventListeners();
        store.dispatch({
          type: UserActionTypes.LOGOUT
        })
    })
    // GAME EVENTS
    socket.on("random game created", (data: any) => {
        console.log("Game was created")
        // console.log(data)
        store.dispatch({
            type: GameActionTypes.CREATE_RANDOM_GAME,
            roomId: data.roomId,
            gameInfo: data.gameInfo,
            playerInfo: data.playerInfo,
            opponents: data.opponents
        });
    });
    
    socket.on("game started", () => {
        console.log("Game started");
        store.dispatch({
            type: GameActionTypes.START_RANDOM_GAME
        });
    });
    
    socket.on("new question", (data:any) => {
        // console.log("QUestion is");
        // console.log(data.question);
        store.dispatch({
            type: GameActionTypes.RECEIVED_QUESTION,
            question: data.question
        });
        socket.emit("question received");
    })
    
    socket.on("show question", () => {
        store.dispatch({
            type: GameActionTypes.SHOW_QUESTION
        });
    })

    socket.on("resolve game", (resolveData: any) => {
        // console.log("The resolve game data is")
        // console.log(resolveData)
        store.dispatch({
            type: GameActionTypes.RESOLVE_GAME,
            resolveData: resolveData
        })
    })
    
    // socket.on("game over", () => {
    //     console.log("Game is over")
    //     store.dispatch({
    //         type: GameActionTypes.GAME_OVER
    //     });
    // })

    socket.on('resolve round', (data: any) => {
        // console.log("Should resolve round now")
        // console.log(data)
        store.dispatch({
            type: GameActionTypes.RESOLVE_ROUND,
            resolveData: data
        });
    })
    
    socket.on("start new round", () => {
        console.log("Starting new round")
        store.dispatch({
            type: GameActionTypes.START_NEW_ROUND
        });
    })

    socket.on("show answer", (data: any) => {
        // console.log("The answer is")
        // console.log(data.correctAnswer)
        // console.log("Your answer is");
        // console.log(store.getState().gameState)
        // console.log("Other players' answers")
        // console.log(data.opponentsAnswers)
        // if(data.answer === store.getState().gameState.currentAnswer) {
            // console.log("Right answer")
            store.dispatch({
                type: GameActionTypes.ANSWER_RECEIVED,
                correctAnswer: data.correctAnswer,
                opponentsAnswers: data.opponentsAnswers
            })
        // } else {
        //     console.log("Wrong answer")
        //     store.dispatch({
        //         type: GameActionTypes.WRONG_ANSWER,
        //         playersAnswers: data.playersAnswers
        //     })
        // }
    }) 
}
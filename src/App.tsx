import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { User } from './models/User';
import { UserState } from './reducers/userReducer';
import { AppState } from './store/Store';
import io from 'socket.io-client';
import { UserActionTypes } from './actions/UserActions'


export var socket: any;

interface AppProps {
  dispatch: any,
  history: any,
  userState: UserState
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    console.log("Props are")
    console.log(this.props)
    socket = io('localhost:3001');
    socket.emit("get user");
    this.props.dispatch({
      type: UserActionTypes.TRY_LOGIN
    })
    socket.on("user", (data: User) => {
      this.props.dispatch({
        user: data,
        type: UserActionTypes.LOGIN_SUCCESS,
      });
      this.props.history.push('/menu');
    })
  }
  public render() {
    const userState = this.props.userState;
    console.log("User state is");
    console.log(userState)
    return (
      <div className="name-container">
        {userState.isLoading && 
          <p>Loading...</p>
        }
        {userState.user && 
          <p>Hello {userState.user.nickName}</p>
        }
      </div>
    );
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: AppState) => {
  return {
    userState: store.userState
  };
};

export default connect(mapStateToProps)(App);


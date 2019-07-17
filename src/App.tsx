import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { User } from './models/User';
import { UserState } from './reducers/userReducer';
import { AppState } from './store/Store';
import io from 'socket.io-client';
import { UserActionTypes } from './actions/UserActions'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './components/Menu';
import LoginSignup from './components/LoginSignup';


export var socket: any;

interface AppProps {
  dispatch: any,
  userState: UserState
}

class App extends React.Component<AppProps> {
  componentWillMount() {
    console.log("Props are")
    console.log(this.props)
    // socket = socketIOClient(this.state.endpoint,{query: token ? `auth_token=${token}` : ''});
    socket = io('localhost:3001', {query: this.props.userState.token ? `auth_token=${this.props.userState.token}` : '1234', reconnection: true});
    socket.emit("get user");
    console.log(socket)
    this.props.dispatch({
      type: UserActionTypes.TRY_LOGIN
    })
    socket.on("user", (data: User) => {
      this.props.dispatch({
        user: data,
        type: UserActionTypes.LOGIN_SUCCESS,
      });
    });
    socket.on("error", (data: any) => {
      console.log(data);
    });
    socket.on("login success", (data: any) => {
      socket = io.connect('localhost:3001', {forceNew: true, query: `auth_token=${data.token}`});
      console.log(socket)
    })
    if(this.props.userState.token){
      console.log("Reconnecting")
      socket = io.connect('localhost:3001', {forceNew: true, query: `auth_token=${this.props.userState.token}`}); 
    }
      
  }
  public render() {
    const userState = this.props.userState;

    return (
      <div className="main">
        {userState.user ? 
        <Router>
          <Route exact path="/" component = { Menu } />
        </Router> :
        <LoginSignup />}
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


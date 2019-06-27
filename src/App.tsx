import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { User } from './models/User';
import { AppState } from './store/Store';
import io from 'socket.io-client';
import { UserActions } from './actions/UserActions'


var socket: any;

interface AppProps {
  user: User | undefined
}

class App extends React.Component<AppProps> {
  componentWillMount(){
    socket = io('localhost:3001');
    socket.emit("test");
    socket.on("user", (data: User) => {
      console.log(data);
    })
  }
  public render() {
    const user = this.props.user;
    return (
      <div className="name-container">
        <p>There should be a user</p>
        {user && user.nickName}
      </div>
    );
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: AppState) => {
  return {
    user: store.userState.user
  };
};

export default connect(mapStateToProps)(App);

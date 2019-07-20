import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { UserState, PlayerStatus } from './reducers/userReducer';
import { AppState } from './store/Store';
import Menu from './components/Menu';
import LoginSignup from './components/LoginSignup';
import { GameState } from './reducers/gameReducer';
import Game from './components/Game';

interface AppProps {
  dispatch: any,
  userState: UserState,
  gameState: GameState
}

class App extends React.Component<AppProps> {
  render() {
    console.log("Rendering App")
    let userState = this.props.userState;
    let element: any;
    switch (true) {
      case userState.isLoading:
        element = <div>Loading...</div>;
        break;
      case userState.user === undefined:
        element = <LoginSignup />;
        break;
      case userState.status === PlayerStatus.IDLE:
        element = <Menu />;
        break;
      case userState.status === PlayerStatus.PLAYING:
        element = <Game />;
        break;
      default: 
        element = LoginSignup;
        break;
    }
    return(
      <div className="main">
        { element }
      </div>
    )
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: AppState) => {
  return {
    gameState: store.gameState,
    userState: store.userState
  };
};

export default connect(mapStateToProps)(App);


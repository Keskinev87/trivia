import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { UserState, PlayerStatus } from './reducers/userReducer';
import { AppState } from './store/Store';
import Menu from './components/Menu';
import LoginSignup from './components/LoginSignup';
import Game from './components/Game';
import GeneralLoader from './components/shared/GeneralLoader';
import { GameState } from './reducers/gameReducer';
import { GeneralAppState } from './reducers/generalAppReducer';

interface AppProps {
  dispatch: any,
  userState: UserState,
  gameState: GameState,
  generalAppState: GeneralAppState
}

class App extends React.Component<AppProps> {
  render() {
    // console.log("Rendering App")
    let userState = this.props.userState;
    let element: any;
    if (this.props.generalAppState.isError) {
      element = <div className="general-error-message">{this.props.generalAppState.error}</div>
    } else {
      switch (true) {
        case userState.isLoading:
          element = <GeneralLoader text="Loading..."/>;
          break;
        case userState.user === undefined:
          element = <LoginSignup />;
          break;
        case userState.status === PlayerStatus.IDLE:
          element = <Menu />;
          break;
        case userState.status === PlayerStatus.SEARCHING_FOR_RANDOM_GAME:
          element = <Game />;
          break;
        case userState.status === PlayerStatus.PLAYING:
          element = <Game />;
          break;
        default: 
          element = <LoginSignup />;
          break;
      }
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
    userState: store.userState,
    gameState: store.gameState,
    generalAppState: store.generalAppState
  };
};

export default connect(mapStateToProps)(App);


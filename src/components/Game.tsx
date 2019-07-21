import React from 'react';
import { connect } from 'react-redux';
// import { socket } from '../App';
import { UserState } from '../reducers/userReducer';
import { AppState } from '../store/Store';
import Button from './shared/Button';
import { service } from '../services/socket-service';
import { GameState, GameStatus } from '../reducers/gameReducer';

interface AppProps {
  userState: UserState,
  gameState: GameState
}

class Game extends React.Component<AppProps> {
  componentWillMount() {
    this.props.gameState.status === GameStatus.STARTING && console.log("Game starting");
    this.props.gameState.status === GameStatus.RUNNING && service.getQuestion();
  }

  render() {
    return(
        <div>I want to play a game</div>
    )
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: AppState) => {
  return {
    userState: store.userState,
    gameState: store.gameState
  };
};

export default connect(mapStateToProps)(Game);

import React from 'react';
import { connect } from 'react-redux';
// import { socket } from '../App';
import { UserState } from '../reducers/userReducer';
import { AppState } from '../store/Store';
import Button from './shared/Button';
import { service } from '../services/socket-service';
import { GameState, GameStatus } from '../reducers/gameReducer';
import QuestionComponent from './game/QuestionComponent';

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
    let element: any;
    if (this.props.gameState.status === GameStatus.WAITING_FOR_ANSWER && this.props.gameState.currentQuestion) {
      console.log("The props for game are")
      console.log(this.props.gameState.currentQuestion)
      element = <QuestionComponent {...this.props.gameState.currentQuestion} />
    } else {
      element = <span>Loading...</span>
    }
      
    return(
        <div>
          {element}
        </div>
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

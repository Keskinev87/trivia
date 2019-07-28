import React from 'react';
import { connect } from 'react-redux';
// import { socket } from '../App';
import { UserState } from '../reducers/userReducer';
import { AppState } from '../store/Store';
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

  componentDidUpdate() {
    this.props.gameState.status === GameStatus.RUNNING && service.getQuestion();
  }

  render() {
    let element: any;
    let status: GameStatus = this.props.gameState.status
    switch (status) {
      case GameStatus.SEARCHING_FOR_GAME: {
        element = <div>Searching...</div>;
        break;
      }
      case GameStatus.STARTING: {
        element = <div>Starting...</div>;
        break;
      }
      case GameStatus.RUNNING: {
        element = <div>Running...</div>
        break;
      }
      case GameStatus.WAITING_FOR_ANSWER: {
        let props = {
          active: true,
          question: this.props.gameState.currentQuestion
        }
        element = <QuestionComponent {...props}/>
        break;
      }
      case GameStatus.ANSWER_SUBMITTED: {
        let props = {
          active: false,
          question: this.props.gameState.currentQuestion,
          answer: this.props.gameState.currentAnswer
        }
        element = <QuestionComponent {...props} />
        break;
      }
      case GameStatus.RESOLVING_ANSWERS: {
        let props = {
          active: false,
          question: this.props.gameState.currentQuestion,
          answer: this.props.gameState.currentAnswer,
          correctAnswer: this.props.gameState.correctAnswer,
          players: this.props.gameState.players
        }
        element = <QuestionComponent {...props} />
        break;
      }
      default: {
        element = <div>Unknown status...</div>;
        break;
      }
        
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

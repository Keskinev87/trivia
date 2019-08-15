import React from 'react';
import { connect } from 'react-redux';
// import { socket } from '../App';
import { UserState } from '../reducers/userReducer';
import { AppState } from '../store/Store';
import { service } from '../services/socket-service';
import { GameState, GameStatus } from '../reducers/gameReducer';
import MultipleAnswerQuestionComponent from './game/MultipleAnswerQuestionComponent';
import RangeQuestionComponent from './game/RangeQuestionComponent';
import Button from './shared/Button';
import GeneralLoader from'./shared/GeneralLoader';

interface AppProps {
  userState: UserState,
  gameState: GameState
}

class Game extends React.Component<AppProps> {
  componentWillMount() {
    this.props.gameState.status === GameStatus.STARTING && console.log("Game starting");
    
  }

  componentDidUpdate() {
    this.props.gameState.status === GameStatus.RUNNING && service.getQuestion();
    this.props.gameState.status === GameStatus.GETTING_NEXT_QUESTION && service.getQuestion();
  }

  render() {
    let element: any;
    let status: GameStatus = this.props.gameState.status;
    let question = this.props.gameState.currentQuestion;
    console.log("Status is", status)
    switch (status) {
      case GameStatus.SEARCHING_FOR_GAME: {
        element = <GeneralLoader text="Searching for a game..." />;
        break;
      }
      case GameStatus.STARTING: {
        element = <GeneralLoader text="Starting game..." />;
        break;
      }
      case GameStatus.RUNNING: {
        element = <div>Running...</div>
        break;
      }
      case GameStatus.GETTING_NEXT_QUESTION: {
        element = <div>Getting next question...</div>
        break;
      }
      case GameStatus.WAITING_FOR_ANSWER: {
        let props = {
          active: true,
          question: this.props.gameState.currentQuestion,
          answer: undefined,
          correctAnswer: undefined,
          players: undefined
        }
        console.log("Question type is", question && question.questionType)
        element = question && question.questionType === "multiple" ? <MultipleAnswerQuestionComponent {...props}/> : <RangeQuestionComponent {...props} />;
        break;
      }
      case GameStatus.ANSWER_SUBMITTED: {
        let props = {
          active: false,
          question: this.props.gameState.currentQuestion,
          answer: this.props.gameState.currentAnswer,
          correctAnswer: undefined,
          players: undefined
        }
        element = question && question.questionType === "multiple" ? <MultipleAnswerQuestionComponent {...props}/> : <RangeQuestionComponent {...props} />;
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
        element = question && question.questionType === "multiple" ? <MultipleAnswerQuestionComponent {...props}/> : <RangeQuestionComponent {...props} />;
        break;
      }
      case GameStatus.GAME_OVER: {
        element = <div>
          <h1>Game Over Screen</h1>
          <Button {...{btnName: "Return to lobby", onClick: service.endGame}}/>
        </div>
        break;
      }
      default: {
        element = <div>Unknown status...</div>;
        break;
      }
        
    }
      
    return(
        <div className="game-section">
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

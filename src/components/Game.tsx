import React from 'react';
import { connect } from 'react-redux';
// import { socket } from '../App';
import { UserState } from '../reducers/userReducer';
import { AppState } from '../store/Store';
import { service } from '../services/socket-service';
import { GameState, GameStatus } from '../reducers/gameReducer';
import PlayerAvatar from './game/PlayerAvatar';
import MultipleAnswerQuestionComponent from './game/MultipleAnswerQuestionComponent';
import RangeQuestionComponent from './game/RangeQuestionComponent';
import GeneralLoader from'./shared/GeneralLoader';
import GameInfoComponent from './game/GameInfoComponent';
import ResolveRoundContainer from './game/ResolveRoundComponent';
import ResolveGameComponent from './game/ResolveGameComponent';

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
    let opponents = this.props.gameState.opponents;
    let gameInfo = this.props.gameState.gameInfo;
    let playerInfo = this.props.gameState.playerInfo;
    // let opponentOneProps: any;
    // let opponentTwoProps: any;
    let showGameInfo = false;
    let gameInfoProps: any;

    console.log("Status is", status)
    switch (status) {
      case GameStatus.SEARCHING_FOR_GAME: {
        element = <GeneralLoader text="Searching for a game..." />;
        break;
      }
      case GameStatus.STARTING: {
        let opponentKeys = Object.keys(opponents);
      
        let opponentOneProps = {
          ...opponents[opponentKeys[0]],
          class: "opponent1"
        }
        let opponentTwoProps = {
          ...opponents[opponentKeys[1]],
          class: "opponent2"
        }
        element = <div className="players-announcement-container">
            <h2>Starting new game with players</h2>
            <div className="player-info-container"><PlayerAvatar {...Object.assign({class:'player'}, playerInfo)} /></div>
            <div className="player-info-container"><PlayerAvatar {...opponentOneProps} /></div>
            <div className="player-info-container"><PlayerAvatar {...opponentTwoProps} /></div>
          </div>
        break;
      }
      case GameStatus.RUNNING: {
        showGameInfo = true;
        element = <GeneralLoader text="Loading next question..." />
        break;
      }
      case GameStatus.GETTING_NEXT_QUESTION: {
        showGameInfo = true;
        element = <GeneralLoader text="Loading next question..." />
        break;
      }
      case GameStatus.WAITING_FOR_ANSWER: {
        showGameInfo = true;
        let props = {
          active: true,
          waitingForAnswers: false,
          question: this.props.gameState.currentQuestion,
          answer: undefined,
          correctAnswer: undefined,
          opponents: undefined
        }
        console.log("Question type is", question && question.questionType)
        element = question && question.questionType === "multiple" ? <MultipleAnswerQuestionComponent {...props}/> : <RangeQuestionComponent {...props} />;
        break;
      }
      case GameStatus.ANSWER_SUBMITTED: {
        showGameInfo = true;
        let props = {
          active: false,
          waitingForAnswers: true,
          question: this.props.gameState.currentQuestion,
          answer: this.props.gameState.currentAnswer,
          correctAnswer: undefined,
          opponents: undefined
        }
        element = question && question.questionType === "multiple" ? <MultipleAnswerQuestionComponent {...props}/> : <RangeQuestionComponent {...props} />;
        break;
      }
      case GameStatus.RESOLVING_ANSWERS: {
        showGameInfo = true;
        let props = {
          active: false,
          waitingForAnswers: false,
          question: this.props.gameState.currentQuestion,
          answer: this.props.gameState.currentAnswer,
          correctAnswer: this.props.gameState.correctAnswer,
          opponents: this.props.gameState.opponents
        }
        element = question && question.questionType === "multiple" ? <MultipleAnswerQuestionComponent {...props}/> : <RangeQuestionComponent {...props} />;
        break;
      }
      case GameStatus.RESOLVING_ROUND: {
        showGameInfo = true;
        let resolveRoundProps = {
          playerInfo: playerInfo,
          opponents: opponents,
          resolveData: this.props.gameState.resolveData
        }
        element = <ResolveRoundContainer {...resolveRoundProps} />
        break;
      }
      case GameStatus.RESOLVING_GAME: {
        if (playerInfo && this.props.gameState.resolveGameData) {
          let resolveGameProps = {
            playerInfo: playerInfo,
            opponents: opponents,
            resolveGameData: this.props.gameState.resolveGameData
          }
          
           element = <ResolveGameComponent {...resolveGameProps} />
        }
        break;
      }
      default: {
        element = <div>Unknown status...</div>;
        break;
      }
    }
      
    // if(opponents) {
    //   console.log("There are opponents")
    //   console.log(opponents)
      
      // let opponentKeys = Object.keys(opponents);
      
      // opponentOneProps = {
      //   class: "opponent1",
      //   nickName: opponents[opponentKeys[0]].nickName,
      //   avatar: opponents[opponentKeys[0]].avatar,
      //   health: opponents[opponentKeys[0]].health
      // }
      // opponentTwoProps = {
      //   class: "opponent2",
      //   nickName: opponents[opponentKeys[1]].nickName,
      //   avatar: opponents[opponentKeys[1]].avatar,
      //   health: opponents[opponentKeys[1]].health
      // }
    // }

    if(gameInfo) {
      gameInfoProps = {
        questionsCount: gameInfo.questionsCount,
        currenQuestionNumber: gameInfo.currentQuestionNumber,
        currentQuestionCategory: question && question.category,
        playerInfo: playerInfo
      }
    }
    
    return(
        <div className="game-section">
          {showGameInfo && <GameInfoComponent {...gameInfoProps} />}
          {element}
          {/* <div className="opponents-container">
            {opponents && <PlayerAvatar {...opponentOneProps} />}
            {opponents && <PlayerAvatar {...opponentTwoProps} />}
          </div> */}
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

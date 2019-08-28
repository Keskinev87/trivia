import React from 'react';
import { connect } from 'react-redux';
// import { socket } from '../App';
import { UserState, Intents } from '../reducers/userReducer';
import { AppState } from '../store/Store';
import Button from './shared/Button';
import { service } from '../services/socket-service';
import { GameState } from '../reducers/gameReducer';
import logo from '../images/logo.png';

interface AppProps {
  dispatch: any,
  userState: UserState,
  gameState: GameState
}

class Menu extends React.Component<AppProps> {

  render() {
   
    let randomBtnProps = {
      id: "play-random-game-btn",
      btnName: "Play",
      onClick: service.searchForRandomGame
    }
    let instructionBtnProps = {
      id: "INSTRUCTIONS",
      btnName: "Instructions",
      onClick: service.setIntent
    }
    let backToMenuBtnProps = {
      id: "MENU",
      btnName: "Back to menu",
      onClick: service.setIntent
    }
    // let friendBtnProps = {
    //   btnName: "Challenge Friend",
    //   onClick: service.challengeFriend
    // }
    
    return(
      <div className="menu-section">
        <div className="logo-container">
          <img className="logo-big" src={logo} alt="trivia-logo"></img>
        </div>
        <h1>Trivia Gladiators</h1>
        {this.props.userState.intent === Intents.MENU &&
          <div>
            <Button {...randomBtnProps} />
            {/* <Button {...friendBtnProps} /> */}
            <Button {...instructionBtnProps} />
          </div>}
        {this.props.userState.intent === Intents.INSTRUCTIONS &&
          <div className="instructions-container">
            <h3>Instructions</h3>
            <p>NOTES FOR REVIEW OF THE GAME - The game is played by 3 players online. 2 bots are running constantly between 09:00 - 18:00 for demo.
              As an alternative you can just open three different browsers and login from them with three different accounts
              (the game prevents the same user to connect multiple times). Or just play with real people. Since this is alpha version,
               you can create an account with any email address. You don't have to confirm the registration after that.</p>
            <p>The game consists of 10 questions - 5 multiple answer questions and 5 where you have to give the closest numerical answer.
              You have 20 seconds for each question. Can you answer them all?
            </p>
            <Button {...backToMenuBtnProps} />
          </div>
          
        }
        
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

export default connect(mapStateToProps)(Menu);

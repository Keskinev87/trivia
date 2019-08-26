import React from 'react';
import { connect } from 'react-redux';
// import { socket } from '../App';
import { UserState } from '../reducers/userReducer';
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
      btnName: "Play",
      onClick: service.searchForRandomGame
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
        <div>
          <Button {...randomBtnProps} />
          {/* <Button {...friendBtnProps} /> */}
        </div>
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

import React from 'react';
import { connect } from 'react-redux';
// import { socket } from '../App';
import { UserState } from '../reducers/userReducer';
import { AppState } from '../store/Store';
import Button from './shared/Button';
import { service } from '../services/socket-service';
import { GameState } from '../reducers/gameReducer';
import GeneralLoader from '../components/shared/GeneralLoader';

interface AppProps {
  dispatch: any,
  userState: UserState,
  gameState: GameState
}

class Menu extends React.Component<AppProps> {

  render() {
    let loading = this.props.gameState.isLoading;
    let element: any;
    if (loading) {
      element = <GeneralLoader />
    } else {
      let randomBtnProps = {
        btnName: "Random Game",
        onClick: service.searchForRandomGame
      }
      let friendBtnProps = {
        btnName: "Challenge Friend",
        onClick: service.challengeFriend
      }
      element = <div>
        <Button {...randomBtnProps} />
        <Button {...friendBtnProps} />
      </div>
    }
    
    return(
            <div className="menu-section">
              { element }
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

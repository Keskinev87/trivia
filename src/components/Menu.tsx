import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../App';
import { UserState } from '../reducers/userReducer';
import { AppState } from '../store/Store'

interface AppProps {
  dispatch: any,
  history: any,
  userState: UserState
}

class Menu extends React.Component<AppProps> {
  componentDidMount() {
    socket.emit("test");
    socket.on("test received", () => {
        console.log("Received back the test")
    })
  }
  public render() {
      const user = this.props.userState.user;
    return (
        <div>
            <p>Menu</p>
            {user && 
                <p>{user.nickName}</p>
            }
        </div>
    );
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: AppState) => {
  return {
    userState: store.userState
  };
};

export default connect(mapStateToProps)(Menu);

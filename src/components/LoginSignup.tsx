import React from 'react';
import { connect } from 'react-redux'
import { socket } from '../App';
import { AppState } from '../store/Store'
import { UserActionTypes } from '../actions/UserActions';
import Login from './authentication/Login'

// interface UserProps {
//   dispatch: any,
//   history: any,
//   userState: UserState
// }

class LoginSignup extends React.Component<any> {
  componentWillMount() {
    this.props.dispatch({
      type: UserActionTypes.SELECT_LOGIN
    })
  }
  componentDidMount() {
    socket.emit("test");
    socket.on("test received", () => {
        console.log("Received back the test")
    })
  }

  selectSignup = () => {
    this.props.dispatch({
      type: UserActionTypes.SELECT_SIGNUP
    })
  }

  selectLogin = () => {
    this.props.dispatch({
      type: UserActionTypes.SELECT_LOGIN
    })
  }


  public render() {
    return (
        <div>
            <div className="auth-nav">
              <div className="auth-section" onClick={this.selectLogin}><span >Login</span></div>
              <div className="auth-section" onClick={this.selectSignup}><span >Signup</span></div>
            </div>
            <div className="auth-form">
              {this.props.userState.status === "SIGNINGUP" ? "Signup" : <Login />}
            </div>
        </div>
    );
  }
}

const mapStateToProps = (store: AppState) => {
  return {
    userState: store.userState
  };
};

export default connect(mapStateToProps)(LoginSignup);

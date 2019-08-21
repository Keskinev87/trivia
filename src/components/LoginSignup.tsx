import React from 'react';
import { connect } from 'react-redux';
import { UserState } from '../reducers/userReducer';
import { AppState } from '../store/Store';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import { service } from '../services/socket-service';
import { Intents } from '../reducers/userReducer';


interface UserProps {
  userState: UserState
}

class LoginSignup extends React.Component<UserProps> {

  public render() {
    return (
        <div className="auth-section">
            <div className="auth-nav">
              <div className={this.props.userState.intent === Intents.LOGIN ? "auth-tab active" : "auth-tab inactive"} 
                  onClick={service.setIntent}
                  id="LOGIN">
                <h2>
                  Login
                </h2>
              </div>
              <div className={this.props.userState.intent === Intents.SIGNUP ? "auth-tab active" : "auth-tab inactive"}
                   onClick={service.setIntent}
                   id="SIGNUP">
                <h2>
                  Signup
                </h2>
              </div>
            </div>
            <div className="auth-form">
              {this.props.userState.intent === Intents.SIGNUP ? <Signup /> : <Login />}
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

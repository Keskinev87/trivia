import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/Store';
import Login from './authentication/Login';
import Signup from './authentication/Signup';

// interface UserProps {
//   dispatch: any,
//   history: any,
//   userState: UserState
// }

class LoginSignup extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state= {
      intent: 'Login'
    }

    this.setIntent = this.setIntent.bind(this);
  }

  setIntent(event: any) {
    this.setState({
      intent: event.target.innerText
    })
  }

  public render() {
    return (
        <div className="auth-section">
            <div className="auth-nav">
              <div className={this.state.intent === 'Login' ? "auth-tab active" : "auth-tab inactive"} 
                  onClick={this.setIntent}>
                <h2>
                  Login
                </h2>
              </div>
              <div className={this.state.intent === 'Signup' ? "auth-tab active" : "auth-tab inactive"}
                   onClick={this.setIntent}>
                <h2>
                  Signup
                </h2>
              </div>
            </div>
            <div className="auth-form">
              {this.state.intent === "Signup" ? <Signup /> : <Login />}
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

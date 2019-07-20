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
        <div>
            <div className="auth-nav">
              <div className="auth-section" onClick={this.setIntent}><span >Login</span></div>
              <div className="auth-section" onClick={this.setIntent}><span >Signup</span></div>
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

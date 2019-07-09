import React from 'react';
import { connect } from 'react-redux'
import { socket } from '../App';
import { UserState } from '../reducers/userReducer';
import { AppState } from '../store/Store'

// interface UserProps {
//   dispatch: any,
//   history: any,
//   userState: UserState
// }

class LoginSignup extends React.Component<any> {
  componentDidMount() {
    socket.emit("test");
    socket.on("test received", () => {
        console.log("Received back the test")
    })
  }
  public render() {
    return (
        <div>
            <p>Login / Signup</p>
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

export default connect(mapStateToProps)(LoginSignup);

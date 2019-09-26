import React from 'react';
import { AppState } from '../../store/Store';
import { connect } from 'react-redux';
import { service } from '../../services/socket-service';
import FacebookLogin from 'react-facebook-login';

interface fbData {
    accessToken: string,
    data_access_expiration_time: number,
    email: string,
    expiresIn: number,
    id: string,
    name: string
    signedRequest: string,
    userID: string
}


class Login extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        
        this.state = {
            email: this.props.userState.loginData.email,
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
    }

    handleChange(event: any) {
        let name: any = event.target && event.target.name;
        this.setState({
            [name]:event.target.value
        })
    }

    handleSubmit(event : any) {
        event.preventDefault();
        service.tryLogin(this.state.email, this.state.password)
    }

    handleFacebookLogin(result: fbData) {
        console.log("Facebook result is");
        console.log(result);
        service.tryLoginWithFacebook(result);
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /> 
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                {this.props.userState.isError && <p>{this.props.userState.error}</p>}
                <button className="auth-submit" type="submit" value="Submit">Login</button>
                <FacebookLogin
                    appId="676275349561535"
                    autoLoad={true}
                    fields="name,email"
                    // onClick={componentClicked}
                    callback={this.handleFacebookLogin} />
            </form>
        )
    }
}

const mapStateToProps = (store: AppState) => {
    return {
      userState: store.userState
    };
  };
  
export default connect(mapStateToProps)(Login);

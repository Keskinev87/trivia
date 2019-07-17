import React from 'react';
import { AppState } from '../../store/Store';
import { connect } from 'react-redux';
import { socket } from '../../App';
import { UserActionTypes } from '../../actions/UserActions'

class Login extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        
        this.state = {
            email:'',
            password:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        socket.on("login failed", (data: any) => {
            console.log("error")
            console.log(data.reason)
            this.props.dispatch({
                type: UserActionTypes.LOGIN_FAILED,
                error: data.reason
            })
        });
        socket.on("login success", (data: any) => {
            console.log("Login succeded");
            this.props.dispatch({
                type: UserActionTypes.LOGIN_SUCCESS,
                user: data.user,
                token: data.token
            })
        })
    }

    componentWillUnmount() {
        socket.off("login failed");
        socket.off("login success");
    }

    handleChange(event: any) {
        let name: any = event.target && event.target.name;
        this.setState({
            [name]:event.target.value
        })
    }

    handleSubmit(event : any) {
        event.preventDefault();
        this.props.dispatch({
            type:UserActionTypes.TRY_LOGIN,
        })
        socket.emit("login", {email: this.state.email, password: this.state.password});
        
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
                <button type="submit" value="Submit">Login</button>
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

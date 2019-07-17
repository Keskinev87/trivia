import React from 'react';
import { AppState } from '../../store/Store';
import { connect } from 'react-redux';
import { socket } from '../../App';
import { UserActionTypes } from '../../actions/UserActions'

class Signup extends React.Component<any, any> {
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
        socket.on("signup failed", (data: any) => {
            console.log("error")
            console.log(data.reason)
            this.props.dispatch({
                type: UserActionTypes.SIGNUP_FAILED,
                error: data.reason
            })
        });
        socket.on("signup success", (data: any) => {
            console.log("Signup was successfull")
            this.props.dispatch({
                type: UserActionTypes.SIGNUP_SUCCESS
            })
        })
    }

    componentWillUnmount() {
        socket.off("login failed");
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
            type:UserActionTypes.TRY_SIGNUP,
        })
        socket.emit("signup", {email: this.state.email, password: this.state.password});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Signup</h2>
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /> 
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <button type="submit" value="Submit">Signup</button>
            </form>
        )
    }
}

const mapStateToProps = (store: AppState) => {
    return {
      userState: store.userState
    };
  };
  
export default connect(mapStateToProps)(Signup);

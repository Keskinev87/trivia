import React from 'react';
import { AppState } from '../../store/Store';
import { connect } from 'react-redux';
import { service } from '../../services/socket-service';

class Signup extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        
        this.state = {
            email:'',
            password:'',
            nickName:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        let name: any = event.target && event.target.name;
        this.setState({
            [name]:event.target.value
        })
    }

    handleSubmit(event : any) {
        event.preventDefault();
        service.trySignup(this.state.email, this.state.password, this.state.nickName);
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
                <div className="form-group">
                    <label htmlFor='nickName'>Nickname</label>
                    <input type="text" name="nickName" value={this.state.nickName} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor='avatar'>Avatar</label>
                    <select>
                        <option value="boy1">boy1</option>
                        <option value="boy2">boy2</option>
                        <option value="boy3">boy3</option>
                        <option value="boy4">boy4</option>
                        <option value="girl1">girl1</option>
                        <option value="girl2">girl1</option>
                        <option value="girl3">girl1</option>
                        <option value="girl4">girl1</option>
                    </select>
                </div>
                {this.props.userState.isError && <p>{this.props.userState.error}</p>}
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

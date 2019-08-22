import React from 'react';
import { AppState } from '../../store/Store';
import { connect } from 'react-redux';
import { service } from '../../services/socket-service';
import AvatarImage from './AvatarImage';
import boy1 from '../../images/boy1.svg';
import boy2 from '../../images/boy2.svg';
import boy3 from '../../images/boy3.svg';
import boy4 from '../../images/boy4.svg';
import girl1 from '../../images/girl1.svg';
import girl2 from '../../images/girl2.svg';
import girl3 from '../../images/girl3.svg';
import girl4 from '../../images/girl4.svg';
import empty from '../../images/empty.svg';
import { UserState } from '../../reducers/userReducer';

let avatars: any = {
    boy1: boy1,
    boy2: boy2,
    boy3: boy3,
    boy4: boy4,
    girl1: girl1,
    girl2: girl2,
    girl3: girl3,
    girl4: girl4,
    empty: empty
}

interface UserProps {
    userState: UserState;
}

interface SignupProps {
    email: string,
    password: string,
    nickName: string,
    avatar: string,
    showAvatars: boolean
}

class Signup extends React.Component<UserProps, any> {
    constructor(props:any) {
        super(props);
        
        this.state = {
            email: this.props.userState.signupData.email,
            password: this.props.userState.signupData.password,
            nickName: this.props.userState.signupData.nickName,
            avatar:this.props.userState.signupData.avatar,
            showAvatars: false
        };
        this.closeAvatars = this.closeAvatars.bind(this);
        this.handleShowAvatars = this.handleShowAvatars.bind(this);
        this.handleSelectAvatar = this.handleSelectAvatar.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    closeAvatars() {
        if (this.state.showAvatars)
            this.setState({
                showAvatars: false
            })
    }

    handleShowAvatars() {
        this.setState({
            showAvatars: !this.state.showAvatars
        })
    }

    handleSelectAvatar(event:any) {
        this.setState({
            avatar: event.target.id
        })
        this.handleShowAvatars();
    }

    handleChange(event: any) {
        let name: string = event.target && event.target.name;
        let value: string = event.target.value;
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event : any) {
        event.preventDefault();
        service.trySignup(this.state.email, this.state.password, this.state.nickName, this.state.avatar);
    }

    render() {
        console.log("Signup state is")
        console.log(this.props.userState)
        let avatarImages:any = [];
        Object.keys(avatars).forEach((key) => {
            let avatarProps = {
                key: key,
                value: key,
                src: avatars[key],
                onClick: this.handleSelectAvatar
            }
            avatarImages.push(avatarProps);
        })
        return (
            <form onSubmit={this.handleSubmit} onClick={this.closeAvatars}>
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
                    <img className="avatar-selector" src={avatars[this.state.avatar]} alt="avatar-selector" onClick={this.handleShowAvatars}></img>
                    <div className="avatars-container">
                        {this.state.showAvatars && avatarImages.map((image: any) => {
                            return <AvatarImage {...image} />
                        })}
                    </div>
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

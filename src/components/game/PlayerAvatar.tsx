import React from 'react';
import boy1 from '../../images/boy1.svg';
import boy2 from '../../images/boy2.svg';
import boy3 from '../../images/boy3.svg';
import boy4 from '../../images/boy4.svg';
import girl1 from '../../images/girl1.svg';
import girl2 from '../../images/girl2.svg';
import girl3 from '../../images/girl3.svg';
import girl4 from '../../images/girl4.svg';
import empty from '../../images/empty.svg';

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

interface AvatarProps {
    class: string,
    nickName: string,
    avatar?: string,
    health: number
}

function PlayerAvatar(props: AvatarProps) {
    const healthStyle = {
        width: props.health + '%'
    }

    return (
        <div className="player-avatar-container ">
            <img className="player-avatar" alt="avatar" src={props.avatar ? avatars[props.avatar] : avatars[empty]}></img>
            <div className={"player-stats " + props.class}>
                <div className="player-name">{props.nickName}</div>
                <div className="player-health-container"><div className={"player-health " + props.class} style={healthStyle}></div></div>
            </div>
        </div>
    )
}

export default PlayerAvatar
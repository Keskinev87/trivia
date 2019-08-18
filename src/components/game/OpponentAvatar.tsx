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

interface OpponentProps {
    class: string,
    nickName: string,
    avatar?: string
}

function OpponentAvatar(props: OpponentProps) {
        return (
            <div className={props.class}>
                <img className="opponent-avatar" alt="avatar" src={props.avatar ? avatars[props.avatar] : avatars[empty]}></img>
                <div className="opponent-name">{props.nickName}</div>
            </div>
        )
}

export default OpponentAvatar
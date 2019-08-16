import React from 'react';

interface OpponentProps {
    class: string,
    nickName: string
}

function OpponentAvatar(props: OpponentProps) {
        return (
            <div className="opponent-container">
                <div className={props.class}></div>
                <div className="opponent-name">{props.nickName}</div>
            </div>
        )
}

export default OpponentAvatar
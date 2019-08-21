import React from 'react';

interface AvatarImageProps {
    value: string,
    src: string,
    onClick: any
}

function AvatarImage(props: AvatarImageProps) {
    return (
        <img className="avatar-image" id={props.value} src={props.src} onClick={props.onClick} alt={`avatar-${props.value}`}></img>
    )
}

export default AvatarImage
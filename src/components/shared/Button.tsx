import React from 'react';

function Button(props: any) {
        return (
            <button id={props.id} onClick={props.onClick}>{props.btnName}</button>
        )
}

export default Button
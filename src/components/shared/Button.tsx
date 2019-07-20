import React from 'react';

function Button(props: any) {
        return (
            <button onClick={props.onClick}>{props.btnName}</button>
        )
}

export default Button
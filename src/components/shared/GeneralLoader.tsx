import React from 'react';

function GeneralLoader(props: any) {
        return (
            <div className="loader">
                <div className="loader-picture"></div>
                <p className="loader-text">{props.text}</p>
            </div>
        )
}

export default GeneralLoader;
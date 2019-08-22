import React from 'react';
import { PlayerInfo } from '../../reducers/gameReducer';
import PlayerAvatar from './PlayerAvatar';
import cupGold from '../../images/cupGold.svg';
import cupSilver from '../../images/cupSilver.svg';
import cupBronze from '../../images/cupBronze.svg';
import cloudRainIcon from '../../images/cloudRainIcon.svg';

let prizeIcons:any = {
    winner: cupGold,
    second: cupSilver,
    third: cupBronze,
    loser: cloudRainIcon
}


interface ResolveGameProps {
    playerInfo: PlayerInfo,
    opponents: any,
    resolveGameData: any
}

function ResolveGameComponent(props: ResolveGameProps) {
    let opponentKeys = Object.keys(props.opponents);
    
    let opponentOneProps = {
    ...props.opponents[opponentKeys[0]],
    class: "opponent1"
    }
    let opponentTwoProps = {
    ...props.opponents[opponentKeys[1]],
    class: "opponent2"
    }


    return (
        <div className="resolve-game-container">
            <div className="resolve-game-player-container">
                <img className={"player-prize-icon " + props.resolveGameData[props.playerInfo.id]}
                     src={prizeIcons[props.resolveGameData[props.playerInfo.id]]}
                     alt={props.resolveGameData[props.playerInfo.id]}></img>
                <PlayerAvatar {...Object.assign({class:'player'}, props.playerInfo)} />
            </div>
            <div className="resolve-game-player-container">
                <img className={"player-prize-icon " + props.resolveGameData[opponentKeys[0]]}
                     src={prizeIcons[props.resolveGameData[opponentKeys[0]]]}
                     alt={props.resolveGameData[opponentKeys[0]]}></img>
                <PlayerAvatar {...opponentOneProps} />
            </div>
            <div className="resolve-game-player-container">
                <img className={"player-prize-icon " + props.resolveGameData[opponentKeys[1]]} 
                     src={prizeIcons[props.resolveGameData[opponentKeys[1]]]}
                     alt={props.resolveGameData[opponentKeys[1]]}></img>
                <PlayerAvatar {...opponentTwoProps} />
            </div>
        </div>
    )
}

export default ResolveGameComponent
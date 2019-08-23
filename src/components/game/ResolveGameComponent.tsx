import React from 'react';
import { PlayerInfo } from '../../reducers/gameReducer';
import PlayerAvatar from './PlayerAvatar';
import cupGold from '../../images/cupGold.svg';
import cupSilver from '../../images/cupSilver.svg';
import cupBronze from '../../images/cupBronze.svg';
import cloudRainIcon from '../../images/cloudRainIcon.svg';
import Button from '../shared/Button';
import { service } from '../../services/socket-service';

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
            <div className="player-prize-icons-container">
                <img className={"player-prize-icon " + props.resolveGameData[props.playerInfo.id]}
                        src={prizeIcons[props.resolveGameData[props.playerInfo.id]]}
                        alt={props.resolveGameData[props.playerInfo.id]}></img>
                <img className={"player-prize-icon " + props.resolveGameData[opponentKeys[0]]}
                    src={prizeIcons[props.resolveGameData[opponentKeys[0]]]}
                    alt={props.resolveGameData[opponentKeys[0]]}></img>
                <img className={"player-prize-icon " + props.resolveGameData[opponentKeys[1]]} 
                    src={prizeIcons[props.resolveGameData[opponentKeys[1]]]}
                    alt={props.resolveGameData[opponentKeys[1]]}></img>
            </div>
            <div className="resolve-game-player-container">
                <PlayerAvatar {...Object.assign({class:'player'}, props.playerInfo)} />
            </div>
            <div className="resolve-game-player-container">
                <PlayerAvatar {...opponentOneProps} />
            </div>
            <div className="resolve-game-player-container">
                <PlayerAvatar {...opponentTwoProps} />
            </div>
            <div className="resolve-announcement">
                <span>
                    {props.resolveGameData[props.playerInfo.id] === 'winner' && "You win!"}
                    {props.resolveGameData[props.playerInfo.id] === 'second' && "You finished second!"}
                    {props.resolveGameData[props.playerInfo.id] === 'third' && "You finished third"}
                </span>
            </div>
            <Button {...{btnName: "Return to lobby", onClick: service.endGame}}/>
        </div>
    )
}

export default ResolveGameComponent
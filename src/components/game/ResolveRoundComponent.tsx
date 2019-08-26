import React from 'react';
import { PlayerInfo } from '../../reducers/gameReducer';
import PlayerAvatar from './PlayerAvatar';

export interface ResolveRoundProps {
    questionType: string | undefined,
    playerInfo: PlayerInfo | undefined;
    opponents: any;
    resolveData: any
 }
 
 function ResolveRoundComponent(props: ResolveRoundProps) {
    let opponentKeys = Object.keys(props.opponents);
    let playerKey:string;
    let correctMsg: string;
    props.playerInfo ? playerKey = props.playerInfo.id : playerKey = '123'
    
    let opponentOneProps = {
    ...props.opponents[opponentKeys[0]],
    class: "opponent1"
    }
    let opponentTwoProps = {
    ...props.opponents[opponentKeys[1]],
    class: "opponent2"
    }
     
    if(props.resolveData[opponentKeys[0]].damage > 0)
        opponentOneProps.damaged = true

    if(props.resolveData[opponentKeys[1]].damage > 0)
        opponentTwoProps.damaged = true

    correctMsg = props.questionType === "multiple" ? "Correct answer" : "Closest answer"
    return (
    <div className="resolve-round-container">
        <div className={props.resolveData[playerKey].damage > 0 ? "resolve-player-container wrong" : "resolve-player-container correct"}>
            <PlayerAvatar {...Object.assign({class:'player'}, props.playerInfo, props.resolveData[playerKey].damage > 0 ? {damaged: true} : {damaged: false})} />
            <div className="player-resolve-status">{props.resolveData[playerKey].damage > 0 ? `Takes ${props.resolveData[playerKey].damage} damage` : correctMsg}</div>
        </div>
        <div className={props.resolveData[opponentKeys[0]].damage > 0 ? "resolve-player-container wrong" : "resolve-player-container correct"}>
            <PlayerAvatar {...opponentOneProps} />
            <div className="player-resolve-status">{props.resolveData[opponentKeys[0]].damage > 0 ? `Takes ${props.resolveData[opponentKeys[0]].damage} damage` : correctMsg}</div>
        </div>
        <div className={props.resolveData[opponentKeys[1]].damage > 0 ? "resolve-player-container wrong" : "resolve-player-container correct"}>
            <PlayerAvatar {...opponentTwoProps} />
            <div className="player-resolve-status">{props.resolveData[opponentKeys[1]].damage > 0 ? `Takes ${props.resolveData[opponentKeys[1]].damage} damage` : correctMsg}</div>
        </div>
        
    </div>
    )
 }

 export default ResolveRoundComponent
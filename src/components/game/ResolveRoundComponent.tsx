import React from 'react';
import { PlayerInfo } from '../../reducers/gameReducer';
import PlayerAvatar from './PlayerAvatar';

export interface ResolveRoundProps {
    playerInfo: PlayerInfo | undefined;
    opponents: any;
    resolveData: any
 }
 
 function ResolveRoundComponent(props: ResolveRoundProps) {
     let opponentKeys = Object.keys(props.opponents);
     let playerKey:string;
     props.playerInfo ? playerKey = props.playerInfo.id : playerKey = '123'
      
     let opponentOneProps = {
       class: "opponent1",
       nickName: props.opponents[opponentKeys[0]].nickName,
       avatar: props.opponents[opponentKeys[0]].avatar,
       health: props.opponents[opponentKeys[0]].health
     }
     let opponentTwoProps = {
       class: "opponent2",
       nickName: props.opponents[opponentKeys[1]].nickName,
       avatar: props.opponents[opponentKeys[1]].avatar,
       health: props.opponents[opponentKeys[1]].health
     }
         return (
            <div className="resolve-round-container">
                <div className="resolve-player-container">
                    <PlayerAvatar {...Object.assign({class:'player'}, props.playerInfo)} />
                    <span>{props.resolveData[playerKey].damage > 0 ? `Takes${props.resolveData[playerKey].damage}` : "Answered correctly"}</span>
                </div>
                <div className="resolve-player-container">
                    <PlayerAvatar {...opponentOneProps} />
                    <span>{props.resolveData[opponentKeys[0]].damage > 0 ? `Takes${props.resolveData[opponentKeys[0]].damage}` : "Answered correctly"}</span>
                </div>
                <div className="resolve-player-container">
                    <PlayerAvatar {...opponentTwoProps} />
                    <span>{props.resolveData[opponentKeys[1]].damage > 0 ? `Takes${props.resolveData[opponentKeys[1]].damage}` : "Answered correctly"}</span>
                </div>
                
            </div>
         )
 }

 export default ResolveRoundComponent
import React from 'react';
// import art from '../../images/art.svg';
// import games from '../../images/games.svg';
// import geography from '../../images/geography.svg';
// import history from '../../images/history.svg';
// import movies from '../../images/movies.svg';
// import random from '../../images/random.svg';
// import science from '../../images/science.svg';
// import sports from '../../images/sports.svg';
import { PlayerInfo } from '../../reducers/gameReducer';
import PlayerAvatar from './PlayerAvatar';

// let categories: any = {
//     art: art,
//     games: games,
//     geography: geography,
//     history: history,
//     movies: movies,
//     random: random,
//     science: science,
//     sports: sports
// }

export interface GameInfoProps {
   questionsCount: number,
   currenQuestionNumber: number,
   currentQuestionCategory: string | undefined,
   playerInfo: PlayerInfo
}

function GameInfoComponent(props: GameInfoProps) {
        console.log("Curren question category is:")
        console.log(props.currentQuestionCategory)
        return (
            <div className="game-info-container">
                <div className="game-progress">
                    <span>Progress:</span>
                    <span>{props.currenQuestionNumber}</span>
                    /
                    <span>{props.questionsCount}</span>
                </div>
                <div className="current-question-category"> 
                    <span>Category:</span>
                    <span>{props.currentQuestionCategory ? props.currentQuestionCategory : "Random"}</span>    
                </div>
                <div className="player-info-container">
                    <PlayerAvatar {...Object.assign({class:'player'}, props.playerInfo)}/>
                </div>
            </div>
        )
}

export default GameInfoComponent
import { Question } from './Question';
import { User } from './User'

export interface Game {
    roomId: Number,
    currentQuestion: Question,
    players: Array<User>
}
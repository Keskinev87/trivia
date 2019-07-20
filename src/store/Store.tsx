import { combineReducers, createStore, Store } from 'redux';

import {userReducer, UserState} from '../reducers/userReducer';
import { GameState, gameReducer } from '../reducers/gameReducer';


export interface AppState {
    userState: UserState,
    gameState: GameState
}

const rootReducer = combineReducers<AppState>({
    userState: userReducer,
    gameState: gameReducer
})

export default function configureStore(): Store<AppState> {
    const store = createStore(rootReducer);
    return store;
}
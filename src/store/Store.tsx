import { combineReducers, createStore, Store } from 'redux';
import {generalAppReducer, GeneralAppState} from '../reducers/generalAppReducer';
import {userReducer, UserState} from '../reducers/userReducer';
import { GameState, gameReducer } from '../reducers/gameReducer';


export interface AppState {
    userState: UserState,
    gameState: GameState,
    generalAppState: GeneralAppState
}

const rootReducer = combineReducers<AppState>({
    userState: userReducer,
    gameState: gameReducer,
    generalAppState: generalAppReducer
})

export default function configureStore(): Store<AppState> {
    const store = createStore(rootReducer);
    return store;
}
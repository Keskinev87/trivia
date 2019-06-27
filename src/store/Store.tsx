import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import {userReducer, UserState} from '../reducers/userReducer';


export interface AppState {
    userState: UserState,
}

const rootReducer = combineReducers<AppState>({
    userState: userReducer
})

export default function configureStore(): Store<AppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}
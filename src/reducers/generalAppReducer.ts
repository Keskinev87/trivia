import { Reducer } from 'redux';
import { GeneralAppActionTypes, GeneralAppActions } from '../actions/GeneralAppActions'

export interface GeneralAppState {
    isError: boolean,
    error: string
}

const initialAppState: GeneralAppState = {
    isError: false,
    error: ''
}

export const generalAppReducer: Reducer<GeneralAppState, GeneralAppActions> = (
    state = initialAppState,
    action
) => { 
    switch (action.type) {
        case GeneralAppActionTypes.ERROR:
            return {
                ...state,
                isError: true,
                error: action.message
            }
        default: {
            console.log("App action defaulted");
            return state;
        }
            
    }
}
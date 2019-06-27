import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { UserState } from '../reducers/userReducer';
import { UserTryLogin, UserActionTypes } from '../actions/UserActions';


export const tryLoginUser: ActionCreator<
  ThunkAction<Promise<any>, UserState, null, UserTryLogin>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
        console.log("Emitting")
      dispatch({
          type: UserActionTypes.TRY_LOGIN
      })
    } catch (err) {
      console.error(err);
    }
  };
};
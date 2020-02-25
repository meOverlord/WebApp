import { IAuthState, INITIAL_AUTH_STATE } from './auth.state';
import { IErrorState, INITIAL_ERROR_STATE } from './error.state';

export interface IAppState {
	auth: IAuthState;
	error: IErrorState;
}

export const INITIAL__STATE: IAppState = {
	auth: INITIAL_AUTH_STATE,
	error: INITIAL_ERROR_STATE,
};

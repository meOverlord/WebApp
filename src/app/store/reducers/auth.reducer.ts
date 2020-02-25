import { Action, createReducer, on } from '@ngrx/store';
import { signin, signinFailure, signinSuccess, signout, signup, signupFailure, signupSuccess } from '../actions/sign.action';
import { IAuthState, INITIAL_AUTH_STATE } from '../states/auth.state';



const _authReducer = createReducer<IAuthState>(INITIAL_AUTH_STATE,
	on(signin, state => ({...state, signedUser: undefined})),
	on(signinSuccess, (state, user) => ({...state, signedUser: user})),
	on(signinFailure, state => ({...state, signedUser: undefined})),
	on(signup, state => ({...state, signedUser: undefined})),
	on(signupSuccess, (state, user) => ({...state, signedUser: user})),
	on(signupFailure, state => ({...state, signedUser: undefined})),
	on(signout, state => ({...state, signedUser: undefined}))
);

export function authReducer(
	state: IAuthState | undefined, action: Action) {
return _authReducer(state, action);
}

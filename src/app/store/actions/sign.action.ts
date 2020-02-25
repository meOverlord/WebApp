import { createAction, props } from '@ngrx/store';
import { IUser, IError } from '@models';

export enum SignActions {
	SIGNIN = '[Auth] Signin',
	SIGNIN_SUCCESS = '[Auth] Signin Success',
	SIGNIN_FAILURE = '[Auth] Signin Failure',
	SIGNUP = '[Auth] Signup',
	SIGNUP_SUCCESS = '[Auth] Signup Success',
	SIGNUP_FAILURE = '[Auth] Signup Failure',
	SIGNOUT = '[Auth] Signout',
	SIGNOUT_SUCCESS = '[Auth] Signout Success'
}

export interface SignPayload {
	id: string;
	secret: string;
}
export interface SignErrorPayload {
	code: string;
}

export const signin			= createAction(SignActions.SIGNIN, props<SignPayload>());
export const signinSuccess	= createAction(SignActions.SIGNIN_SUCCESS, props<IUser>());
export const signinFailure = createAction(SignActions.SIGNIN_FAILURE, props<SignErrorPayload>());
export const signup 		= createAction(SignActions.SIGNUP, props<SignPayload>());
export const signupSuccess	= createAction(SignActions.SIGNUP_SUCCESS, props<IUser>());
export const signupFailure = createAction(SignActions.SIGNUP_FAILURE, props<SignErrorPayload>());
export const signout		= createAction(SignActions.SIGNOUT);
export const signoutSuccess	= createAction(SignActions.SIGNOUT_SUCCESS);

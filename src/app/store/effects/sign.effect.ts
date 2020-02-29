import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { errorThrow } from '@store/actions/error.action';
import { of } from 'rxjs';
import { catchError, mergeMap, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { SignActions, SignErrorPayload, signinFailure, signinSuccess, SignPayload, signupSuccess } from '../actions/sign.action';


@Injectable({
	providedIn: 'root'
})
export class SignEffect {
	constructor(
		private actions$: Actions<Action>,
		private authService: AuthService) {}

	public signin$ = createEffect(() => this.actions$.pipe(
		ofType(SignActions.SIGNIN),
		mergeMap((action: SignPayload) =>
			this.authService.signin(action.id, action.secret).pipe(
				map(() => signinSuccess()),
				catchError((errorCode) => of(signinFailure({code: errorCode})))
			)
		)
	));

	public signup$ = createEffect(() => this.actions$.pipe(
		ofType(SignActions.SIGNUP),
		mergeMap((action: SignPayload) =>
			this.authService.signup(action.id, action.secret, action.name).pipe(
				map(user => signupSuccess(user)),
				catchError((errorCode) => of(signinFailure({ code: errorCode })))
			)
		)
	));

/*	public signout$ = createEffect(() => this.actions$.pipe(
		ofType(SignActions.SIGNOUT),
		exhaustMap(() =>
			this.authService.signout().pipe(
				map(() => signoutSuccess())
			)
		)
	));*/

	public signFailure$ = createEffect(() => this.actions$.pipe(
		ofType(SignActions.SIGNIN_FAILURE, SignActions.SIGNUP_FAILURE),
		map((payload: SignErrorPayload) => errorThrow({code: payload.code}))
	));
}

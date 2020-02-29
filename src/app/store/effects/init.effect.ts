import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { signinSuccess, signoutSuccess } from '@store/actions';
import { map } from 'rxjs/operators';
import { getJwtToken } from 'src/app/auth/jwt';
import { JwtService } from 'src/app/auth/services/jwt/jwt.service';


@Injectable({
	providedIn: 'root'
})
export class InitEffect {
	constructor(
		private actions$: Actions<Action>,
		private jwt: JwtService
	) {}

	public signin$ = createEffect(() => this.actions$.pipe(
		ofType(ROOT_EFFECTS_INIT),
		map((action) => {
			const token = getJwtToken();
			if (token) {
				this.jwt.authenticate(token);
				return signinSuccess();
			}
			return signoutSuccess();
		})
	));
}

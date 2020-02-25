import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { EMPTY, from, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IUser } from 'src/app/models/user';
import { Authcodes } from './auth.codes';
import { FireAuthErrorCodes as Codes } from './fireauth.codes';


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private fireAuth: AngularFireAuth) {}

	public static FireUser2User(fireUser: User): IUser {
		if (!fireUser) {
			return undefined;
		}
		return {
			id: fireUser.uid,
			displayName: fireUser.displayName
		};
	}

	public signin(id: string, secret: string): Observable<IUser> {
		return from(this.fireAuth.signInWithEmailAndPassword(id, secret)).pipe(
			map((credential: auth.UserCredential) => AuthService.FireUser2User(credential.user)),
			catchError(this.handleFireauthError)
		);
	}

	public signup(id: string, secret: string): Observable<IUser> {
		return from(this.fireAuth.createUserWithEmailAndPassword(id, secret)).pipe(
			map((credential: auth.UserCredential) => AuthService.FireUser2User(credential.user)),
			catchError(this.handleFireauthError)
		);
	}

	public signout(): Observable<never> {
		return from(this.fireAuth.signOut).pipe(
			switchMap(v => EMPTY)
		);
	}

	private handleFireauthError(error: auth.Error): Observable<never> {
		switch (error.code) {
			case Codes.WRONG_PASSWORD:
			case Codes.USER_NOT_FOUND:
				return throwError(Authcodes.INVALID_CREDENTIALS);
			case Codes.USER_DISABLED:
				return throwError(Authcodes.USER_DISABLED);
			case Codes.INVALID_EMAIL:
				return throwError(Authcodes.INVALID_EMAIL);
		}
		return throwError(Authcodes.UNKNOWN_ERROR);
	}
}

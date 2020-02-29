import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backendEndpoint } from '@shared/config';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IUser } from 'src/app/models/user';
import { JwtService } from './../jwt/jwt.service';

interface SigninResult {
	access_token: string;
}


const signupMutation = gql`
  mutation CreateUser($name: String!, $email: String, $password: String) {
    createUser(input: {
		 name: $name
		 email: $email
		 password: $password
	}) {
		_id
		name
		inscriptionDate
    }
  }
`;


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(
		private http: HttpClient,
		private apollo: Apollo,
		private jwt: JwtService) { }

	public signin(id: string, secret: string): Observable<boolean> {
		return this.http.post<SigninResult>(backendEndpoint('auth/signin'), {
			ident: id,
			password: secret
		}).pipe(
			tap(result => this.jwt.authenticate(result?.access_token)),
			map(() => true)
		);
	}

	public signup(id: string, secret: string, name: string): Observable<IUser> {
		return this.apollo.mutate({
			mutation: signupMutation,
			variables: {
				name,
				password: secret,
				email: id
			}
		}).pipe(
			tap(({ data }) => {
				console.log(data);
			}),
			map(d => null),
			catchError(error => {
				console.log('there was an error sending the query', error);
				return throwError(error);
			})
		);
	}

	/*public signout(): Observable<never> {
		return from(this.fireAuth.signOut).pipe(
			switchMap(v => EMPTY)
		);
	}*/

/*	private handleFireauthError(error: auth.Error): Observable<never> {
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
	}*/
}
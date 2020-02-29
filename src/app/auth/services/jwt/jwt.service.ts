import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { JwtPayload } from './jwt.payload';
import { setJwtToken } from '../../jwt';
import { Observable } from 'apollo-link';

@Injectable({
	providedIn: 'root'
})
export class JwtService {

	private _auth: BehaviorSubject<JwtPayload> = new BehaviorSubject<JwtPayload>(null);

	constructor(private jwtHelper: JwtHelperService) { }

	public authenticate(token: string) {
		setJwtToken(token);
		this._auth.next(this.jwtHelper.decodeToken(token) as JwtPayload);
	}

	public get authStatus(): BehaviorSubject<JwtPayload>{
		return this._auth;
	}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtPayload } from './jwt.payload';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
	providedIn: 'root'
})
export class JwtService {

	private _auth: BehaviorSubject<JwtPayload> = new BehaviorSubject<JwtPayload>(null);

	constructor(private jwtHelper: JwtHelperService) { }

	public authenticate(token: string){
		this._auth.next(this.jwtHelper.decodeToken(token) as JwtPayload)
	}

	public get authStatus(): BehaviorSubject<JwtPayload>{
		return this._auth;
	}
}

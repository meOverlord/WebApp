import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { signinSuccess, signoutSuccess } from '@store/actions';
import { IAppState } from '@store/states';
import { AuthService } from './auth/services/auth/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'overlord';

	constructor(
		private store: Store<IAppState>,
		private fireAuth: AngularFireAuth
	) {}

	ngOnInit() {
		this.fireAuth.authState
		.subscribe(state => {
			if (!state) {
				return this.store.dispatch(
					signoutSuccess()
				);
			}
			this.store.dispatch(
				signinSuccess(AuthService.FireUser2User(state))
			);
		});
	}
}

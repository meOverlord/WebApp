import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { signout } from '@store/actions';
import { authSelector } from '@store/selectors';
import { IAppState } from '@store/states';
import { IUser } from 'src/app/models/user';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	auth: IUser;
	burgerActive = false;

	constructor(
		private store: Store<IAppState>) { }

	ngOnInit(): void {
		this.store.pipe(
			select(authSelector)
		).subscribe(user => {
			this.auth = user;
		});
	}

	public signout() {
		this.store.dispatch(signout());
	}

}

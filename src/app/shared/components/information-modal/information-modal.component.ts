import { Authcodes } from './../../../auth/services/auth/auth.codes';
import { Component, OnInit } from '@angular/core';
import { IAppState } from '@store/states';
import { Store, select } from '@ngrx/store';
import { errorSelector } from '@store/selectors';
import { IError } from '@models';

enum InformationType {
	ERROR,
	INFO,
	NONE
}

@Component({
	selector: 'app-information-modal',
	templateUrl: './information-modal.component.html',
	styleUrls: ['./information-modal.component.scss']
})
export class InformationModalComponent implements OnInit {
	shown = false;
	type: InformationType = InformationType.NONE;
	error: IError;


	InformationType = InformationType;

	constructor(private store: Store<IAppState>) {}

	ngOnInit(): void {
		this.store.pipe(select(errorSelector)).subscribe(state => {
			if (!state.error?.code) {
				return;
			}
			this.shown = true;
			this.type = InformationType.ERROR;
			this.error = state.error;
		});
	}
}

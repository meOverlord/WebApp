import { Authcodes } from './../../../auth/services/auth/auth.codes';
import { Component, OnInit, Input } from '@angular/core';
import { IError } from '@models';

@Component({
	selector: 'app-error-message',
	templateUrl: './error-message.component.html',
	styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

	@Input()
	public error: IError;

	Authcodes = Authcodes;

	constructor() { }

	ngOnInit(): void {
	}

}

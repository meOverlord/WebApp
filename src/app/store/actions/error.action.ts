import { createAction, props } from '@ngrx/store';
import { IError } from '@models';

export enum ErrorActions {
	THROW = '[Error] throw',
	DISPLAYED = '[ERROR] Displayed',
	DISMISSED = '[ERROR] Dismissed',
}

export const errorThrow = createAction(ErrorActions.THROW, props<IError>());
export const errorDisplayed = createAction(ErrorActions.DISPLAYED);
export const errorDismissed = createAction(ErrorActions.DISMISSED);

import { createReducer, on, Action } from '@ngrx/store';
import { IErrorState, INITIAL_ERROR_STATE } from '../states/error.state';
import { errorThrow, errorDisplayed, errorDismissed } from '../actions/error.action';


const _errorReducer = createReducer<IErrorState>(INITIAL_ERROR_STATE,
	on(errorThrow, (state, error) => ({ ...state, error, displayed: false })),
	on(errorDisplayed, state => ({ ...state, displayed: true })),
	on(errorDismissed, state => ({ ...state, error: undefined, displayed: false })),
);

export function errorReducer(
	state: IErrorState | undefined, action: Action) {
	return _errorReducer(state, action);
}

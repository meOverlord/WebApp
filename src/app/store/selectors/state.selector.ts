import { createSelector } from '@ngrx/store';
import { IAppState, IErrorState } from '../states';

export const errorSelector = createSelector(
	(state: IAppState) => state.error,
	(state: IErrorState) => state
);

import { createSelector } from '@ngrx/store';
import { IAuthState, IAppState } from '../states';



export const authSelector = createSelector(
    (state: IAppState) => state.auth,
    (state: IAuthState) => state.signedUser
);

import { authReducer } from './auth.reducer';
import { errorReducer } from './error.reducer';

export const reducers = {
	auth: authReducer,
	error: errorReducer
};

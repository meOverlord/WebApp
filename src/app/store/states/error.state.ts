import { IError } from 'src/app/models/error';

export interface IErrorState {
	error: IError;
	displayed?: boolean;
}

export const INITIAL_ERROR_STATE: IErrorState = {
	error : {
		code: undefined,
	}
};

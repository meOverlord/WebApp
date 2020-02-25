import { IUser } from 'src/app/models/user';

export interface IAuthState {
    signedUser: IUser;
}

export const INITIAL_AUTH_STATE: IAuthState = {
    signedUser: undefined,
};

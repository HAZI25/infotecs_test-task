import { IUser } from './IUser';

export interface IUserSort {
	key: keyof IUser | null;
	direction: 'ascending' | 'descending' | null;
}

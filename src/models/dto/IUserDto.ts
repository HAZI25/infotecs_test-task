import { IUser } from '../IUser';

export interface IUserDto {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	height: number;
	weight: number;
	phone: string;
	email: string;
	address: IAddressDto;
}

interface IAddressDto {
	address: string;
	city: string;
}

export function mapUserDtoToUser(user: IUserDto): IUser {
	const { firstName, lastName, maidenName, address, gender, ...rest } = user;

	return {
		...rest,
		gender: gender === 'male' ? 'муж.' : 'жен.',
		address: `${address.city ?? 'Unknown city'} ${address.address}`,
		fullname: `${user.firstName} ${maidenName} ${user.lastName}`,
	};
}

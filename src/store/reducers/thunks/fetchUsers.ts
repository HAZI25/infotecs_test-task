import { createAsyncThunk } from '@reduxjs/toolkit';
import { mapUserDtoToUser } from '@/models/dto/IUserDto';
import { IUser } from '@/models/IUser';

export const fetchUsers = createAsyncThunk<
	IUser[],
	void,
	{ rejectValue: string }
>('users/fetchUsers', async (_, thunkAPI) => {
	try {
		const response = await fetch('https://dummyjson.com/users/?limit=0');
		const data = await response.json();
		return data.users.map(mapUserDtoToUser);
	} catch (error) {
		console.log(error);
		return thunkAPI.rejectWithValue('Не удалось загрузить пользователей...');
	}
});

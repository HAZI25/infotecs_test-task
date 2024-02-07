import { createAsyncThunk } from '@reduxjs/toolkit';
import { mapUserDtoToUser } from '@/models/dto/IUserDto';
import { IUser } from '@/models/IUser';

export const searchUsers = createAsyncThunk<
	IUser[],
	string,
	{ rejectValue: string }
>('users/searchUsers', async (query, thunkAPI) => {
	try {
		const response = await fetch(
			`https://dummyjson.com/users/search?q=${query}`
		);
		const data = await response.json();
		return data.users.map(mapUserDtoToUser);
	} catch (error) {
		return thunkAPI.rejectWithValue(
			'Не удалось выполнить поиск пользователей...'
		);
	}
});

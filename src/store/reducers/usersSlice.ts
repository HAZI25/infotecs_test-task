import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '@/models/IUser';
import { fetchUsers } from './thunks/fetchUsers';
import { searchUsers } from './thunks/searchUsers';

interface UsersState {
	users: IUser[];
	isLoading: boolean;
	error: string;
}

const initialState: UsersState = {
	users: [],
	isLoading: false,
	error: '',
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Получение пользователей
		builder.addCase(fetchUsers.pending, (state) => {
			state.isLoading = true;
			state.error = '';
		});
		builder.addCase(
			fetchUsers.fulfilled,
			(state, action: PayloadAction<IUser[]>) => {
				state.isLoading = false;
				state.users = action.payload;
			}
		);
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload ?? 'Не удалось загрузить пользователей...';
		});

		// Поиск пользователей
		builder.addCase(searchUsers.pending, (state) => {
			state.isLoading = true;
			state.error = '';
		});
		builder.addCase(
			searchUsers.fulfilled,
			(state, action: PayloadAction<IUser[]>) => {
				state.isLoading = false;
				state.users = action.payload;
			}
		);
		builder.addCase(searchUsers.rejected, (state, action) => {
			state.isLoading = false;
			state.error =
				action.payload ?? 'Не удалось выполнить поиск пользователей...';
		});
	},
});

export default usersSlice.reducer;

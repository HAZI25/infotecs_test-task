import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/models/IUser';

interface UsersModalState {
	isOpen: boolean;
	user: IUser | null;
}

const initialState: UsersModalState = {
	isOpen: false,
	user: null,
};

const usersModalSlice = createSlice({
	name: 'usersModal',
	initialState,
	reducers: {
		openModal(state, action: PayloadAction<IUser>) {
			state.isOpen = true;
			state.user = action.payload;
		},
		closeModal(state) {
			state.isOpen = false;
			state.user = null;
		},
	},
});

export const { openModal, closeModal } = usersModalSlice.actions;

export default usersModalSlice.reducer;

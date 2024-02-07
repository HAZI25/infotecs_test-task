import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './reducers/usersSlice';
import usersModalSlice from './reducers/usersModalSlice';

export const store = configureStore({
	reducer: {
		users: usersSlice,
		usersModal: usersModalSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

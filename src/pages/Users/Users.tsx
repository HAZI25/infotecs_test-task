import { useEffect, useState } from 'react';
import './Users.scss';
import UsersTable from './components/UsersTable/UsersTable';
import useDebounce from '@/hooks/useDebounce';
import { useAppDispatch } from '@/hooks/redux';
import { fetchUsers } from '@/store/reducers/thunks/fetchUsers';
import { searchUsers } from '@/store/reducers/thunks/searchUsers';
import UsersSearch from './components/UsersSearch/UsersSearch';

// Страница с поиском и таблицей

const Users = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const debouncedSearchQuery = useDebounce(searchQuery, 300);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (debouncedSearchQuery) {
			dispatch(searchUsers(debouncedSearchQuery));
		} else dispatch(fetchUsers());
	}, [debouncedSearchQuery]);

	return (
		<main className="page">
			<section className="users">
				<div className="users__container container">
					<h1 className="users__title">Список пользователей</h1>
					<UsersSearch search={searchQuery} setSearch={setSearchQuery} />
					<UsersTable />
				</div>
			</section>
		</main>
	);
};

export default Users;

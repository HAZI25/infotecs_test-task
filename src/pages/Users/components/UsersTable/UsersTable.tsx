import './UsersTable.scss';
import { IUser } from '@/models/IUser';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import { IUserSort } from '@/models/IUserSort';
import UserInfoModal from '../UserInfoModal/UserInfoModal';
import { useMemo, useState } from 'react';
import { selectUsers } from '@/store/reducers/selectors/selectUsers';
import { useAppSelector } from '@/hooks/redux';

// Таблица пользователей

const UsersTable = () => {
	const { users, isLoading, error } = useAppSelector(selectUsers);

	const [sort, setSort] = useState<IUserSort>({
		key: null,
		direction: null,
	});

	const handleSortChange = (key: keyof IUser) => {
		let direction: 'ascending' | 'descending' | null = 'ascending';
		if (sort.key === key && sort.direction === 'ascending') {
			direction = 'descending';
		}
		if (sort.key === key && sort.direction === 'descending') {
			return setSort({ key: null, direction: null });
		}

		setSort({ key, direction });
	};

	const sortedUsers = useMemo(() => {
		if (sort.key === null) {
			return users;
		} else {
			return users.slice().sort((user1, user2) => {
				if (sort.direction === 'ascending') {
					return user1[sort.key!!] > user2[sort.key!!] ? 1 : -1;
				}
				if (sort.direction === 'descending') {
					return user1[sort.key!!] < user2[sort.key!!] ? 1 : -1;
				}
				return 0;
			});
		}
	}, [users, sort]);

	if (isLoading) {
		return <div className="users-table__loader" />;
	}

	if (error) {
		return <p className="users-table__error">{error}</p>;
	}

	if (users.length === 0) {
		return <p className="users-table__empty">Пользователи не найдены</p>;
	}

	return (
		<>
			<table className="users-table">
				<TableHead sort={sort} handleSortChange={handleSortChange} />
				<TableBody users={sortedUsers} />
			</table>
			<UserInfoModal />
		</>
	);
};

export default UsersTable;

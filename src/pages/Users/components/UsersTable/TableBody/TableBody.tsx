import { useAppDispatch } from '@/hooks/redux';
import { IUser } from '@/models/IUser';
import { openModal } from '@/store/reducers/usersModalSlice';
import './TableBody.scss';

interface TableBodyProps {
	users: IUser[];
}

// Тело таблицы

const TableBody = ({ users }: TableBodyProps) => {
	const dispatch = useAppDispatch();
	return (
		<tbody className="users-table__body">
			{users.map((user) => (
				<tr key={user.id} onClick={() => dispatch(openModal(user))}>
					<td className="users-table__data">{user.fullname}</td>
					<td className="users-table__data">{user.age}</td>
					<td className="users-table__data">{user.gender}</td>
					<td className="users-table__data">{user.phone}</td>
					<td className="users-table__data">{user.address}</td>
				</tr>
			))}
		</tbody>
	);
};

export default TableBody;

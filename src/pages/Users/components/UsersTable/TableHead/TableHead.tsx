import IconUp from '@/assets/icons/chevron-up.svg?react';
import IconDown from '@/assets/icons/chevron-down.svg?react';
import './TableHead.scss';
import { IUserSort } from '@/models/IUserSort';
import { IUser } from '@/models/IUser';

interface TableHeadProps {
	sort: IUserSort;
	handleSortChange: (key: keyof IUser) => void;
}

// Хед таблицы

const TableHead = ({ sort, handleSortChange }: TableHeadProps) => {
	return (
		<thead className="users-table__head">
			<tr>
				<th
					className="users-table__header"
					onClick={() => handleSortChange('fullname')}
				>
					<div className="users-table__header-wrapper">
						ФИО
						<div className="users-table__sort">
							<IconUp
								className={`users-table__sort-icon ${
									sort.key === 'fullname' && sort.direction === 'ascending'
										? 'active'
										: ''
								}`}
							/>
							<IconDown
								className={`users-table__sort-icon ${
									sort.key === 'fullname' && sort.direction === 'descending'
										? 'active'
										: ''
								}`}
							/>
						</div>
					</div>
				</th>
				<th
					className="users-table__header"
					onClick={() => handleSortChange('age')}
				>
					<div className="users-table__header-wrapper">
						Возраст
						<div className="users-table__sort">
							<IconUp
								className={`users-table__sort-icon ${
									sort.key === 'age' && sort.direction === 'ascending'
										? 'active'
										: ''
								}`}
							/>
							<IconDown
								className={`users-table__sort-icon ${
									sort.key === 'age' && sort.direction === 'descending'
										? 'active'
										: ''
								}`}
							/>
						</div>
					</div>
				</th>

				<th
					className="users-table__header"
					onClick={() => handleSortChange('gender')}
				>
					<div className="users-table__header-wrapper">
						Пол
						<div className="users-table__sort">
							<IconUp
								className={`users-table__sort-icon ${
									sort.key === 'gender' && sort.direction === 'ascending'
										? 'active'
										: ''
								}`}
							/>
							<IconDown
								className={`users-table__sort-icon ${
									sort.key === 'gender' && sort.direction === 'descending'
										? 'active'
										: ''
								}`}
							/>
						</div>
					</div>
				</th>
				<th
					className="users-table__header"
					onClick={() => handleSortChange('phone')}
				>
					<div className="users-table__header-wrapper">
						Номер телефона
						<div className="users-table__sort">
							<IconUp
								className={`users-table__sort-icon ${
									sort.key === 'phone' && sort.direction === 'ascending'
										? 'active'
										: ''
								}`}
							/>
							<IconDown
								className={`users-table__sort-icon ${
									sort.key === 'phone' && sort.direction === 'descending'
										? 'active'
										: ''
								}`}
							/>
						</div>
					</div>
				</th>
				<th
					className="users-table__header"
					onClick={() => handleSortChange('address')}
				>
					<div className="users-table__header-wrapper">
						Адрес
						<div className="users-table__sort">
							<IconUp
								className={`users-table__sort-icon ${
									sort.key === 'address' && sort.direction === 'ascending'
										? 'active'
										: ''
								}`}
							/>
							<IconDown
								className={`users-table__sort-icon ${
									sort.key === 'address' && sort.direction === 'descending'
										? 'active'
										: ''
								}`}
							/>
						</div>
					</div>
				</th>
			</tr>
		</thead>
	);
};

export default TableHead;

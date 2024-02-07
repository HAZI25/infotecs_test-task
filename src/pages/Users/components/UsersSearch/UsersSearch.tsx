import ClearIcon from '@/assets/icons/close.svg?react';
import './UsersSearch.scss';

// Поиск по таблице

interface UsersSearchProps {
	search: string;
	setSearch: (search: string) => void;
}

const UsersSearch = ({ search, setSearch }: UsersSearchProps) => {
	return (
		<div className="users__search">
			<input
				className="users__search-input"
				type="text"
				placeholder="Поиск..."
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>
			<ClearIcon onClick={() => setSearch('')} className="users__search-icon" />
		</div>
	);
};

export default UsersSearch;

import Modal from '@/components/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectUsersModal } from '@/store/reducers/selectors/selectUsersModal';
import { closeModal } from '@/store/reducers/usersModalSlice';
import { getAgeSuffix } from '@/utils/getAgeSuffix';
import './UserInfoModal.scss';

// Модалка с подробным описанием пользователя при нажатии

const UserInfoModal = () => {
	const { user, isOpen } = useAppSelector(selectUsersModal);
	const dispatch = useAppDispatch();

	return (
		<>
			{isOpen && user && (
				<Modal
					closeModal={() => {
						dispatch(closeModal());
					}}
				>
					<div className="user-info">
						<div className="user-info__title title">
							Информация о пользователе
						</div>
						<ul className="user-info__list">
							<li className="user-info__item">
								<div className="user-info__label">ФИО</div>
								<div className="user-info__text">{user.fullname}</div>
							</li>
							<li className="user-info__item">
								<div className="user-info__label">Возраст</div>
								<div className="user-info__text">
									{user.age} {getAgeSuffix(user.age)}
								</div>
							</li>
							<li className="user-info__item">
								<div className="user-info__label">Адрес</div>
								<div className="user-info__text">{user.address}</div>
							</li>
							<li className="user-info__item">
								<div className="user-info__label">Рост</div>
								<div className="user-info__text">{user.height} см.</div>
							</li>
							<li className="user-info__item">
								<div className="user-info__label">Вес</div>
								<div className="user-info__text">{user.weight} кг.</div>
							</li>
							<li className="user-info__item">
								<div className="user-info__label">Номер телефона</div>
								<div className="user-info__text">{user.phone}</div>
							</li>
							<li className="user-info__item">
								<div className="user-info__label">Email</div>
								<div className="user-info__text">{user.email}</div>
							</li>
						</ul>

						<button
							className="user-info__button button"
							onClick={() => dispatch(closeModal())}
						>
							Закрыть
						</button>
					</div>
				</Modal>
			)}
		</>
	);
};

export default UserInfoModal;

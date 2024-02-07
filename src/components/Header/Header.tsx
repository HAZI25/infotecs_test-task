import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="header__container container">
				<p className="header__title">Trainee JS</p>
				<nav className="header__nav">
					<ul className="header__nav-list">
						<li className="header__nav-item">
							<NavLink to={'/'} className="header__nav-link">
								Главная
							</NavLink>
						</li>
						<li className="header__nav-item">
							<NavLink to={'/users'} className="header__nav-link">
								Пользователи
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

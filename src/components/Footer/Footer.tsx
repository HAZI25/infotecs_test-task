import './Footer.scss';
import Telegram from '@/assets/icons/telegram.svg?react';
import Phone from '@/assets/icons/phone.svg?react';
import Email from '@/assets/icons/email.svg?react';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container container">
				<ul className="footer__list">
					<li className="footer__item">
						<Telegram className="footer__item-icon" />
						@marsel25
					</li>
					<li className="footer__item">
						<Phone className="footer__item-icon" />
						+7(917) 440-12 50
					</li>
					<li className="footer__item">
						<Email className="footer__item-icon" />
						marsel.nazirov@mail.ru
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;

import './Candidate.scss';
import candidate from '@/assets/img/candidate_avatar.jpg';

// Кандидат - я.

const Candidate = () => {
	return (
		<div className="candidate">
			<h2 className="candidate__title title">Кандидат</h2>
			<div className="candidate__info">
				<div className="candidate__image">
					<img src={candidate} alt="Candidate" />
				</div>
				<div className="candiate__content">
					<div className="candidate__row">
						<p className="candidate__label">ФИО:</p>
						<p className="candidate__name">Назиров Марсэль Вильданович</p>
					</div>
					<div className="candidate__row">
						<p className="candidate__label">Дата рождения:</p>
						<p className="candidate__name">25.08.2000</p>
					</div>
					<div className="candidate__row">
						<p className="candidate__label">Город проживания:</p>
						<p className="candidate__name">Уфа</p>
					</div>
					<div className="candidate__row">
						<p className="candidate__label">Образование:</p>
						<p className="candidate__name">
							Бакалавр (2018-2022). Казанский Федеральный Университет.
							<br />
							Институт: Вычислительная математика и информационные технологии.
							<br />
							Факультет: Информационные системы и технологии.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Candidate;

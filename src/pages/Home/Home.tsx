import { useNavigate } from 'react-router-dom';
import Candidate from './components/Candidate/Candidate';
import Stack from './components/Stack/Stack';
import './Home.scss';

// Приветственная страница

const Home = () => {
	const navigate = useNavigate();

	return (
		<main className="home__page page">
			<section className="about">
				<div className="about__container container">
					<div className="about__theme theme">
						<h1 className="theme__title">
							Тестовое задание для стажера на позицию{' '}
							<span className="theme__highlight">
								<span>Разработчик JS</span>
							</span>
						</h1>
					</div>
					<div className="about__task">
						<Candidate />
						<Stack />
					</div>

					<button
						className="about__open button"
						onClick={() => navigate('/users')}
					>
						Oткрыть
					</button>
				</div>
			</section>
		</main>
	);
};

export default Home;

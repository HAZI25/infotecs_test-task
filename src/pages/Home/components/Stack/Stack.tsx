import './Stack.scss';

const stack = ['TypeScript', 'HTML', 'SCSS', 'React', 'Redux'];

// Используемый в ДАННОМ проекте стек

const Stack = () => {
	return (
		<div className="stack">
			<h2 className="stack__title title">Используемый стек</h2>
			<ul className="stack__list">
				{stack.map((tech, i) => {
					return (
						<li className="stack__item" key={i}>
							{tech}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Stack;

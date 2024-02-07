import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';
import AppRouter from './router/AppRouter';

const App = () => {
	return (
		<div className="app">
			<Header />
			<AppRouter />
			<Footer />
		</div>
	);
};

export default App;

import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Users from '@/pages/Users/Users';

/*
	/ - о задании
	/users - задание
*/

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/users" element={<Users />} />
		</Routes>
	);
};

export default AppRouter;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';

import { routes } from './routes';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<main>
				<Router>
					<Routes>
						{routes.map((route, index) => (
							<Route
								path={route.path}
								element={route.element}
								key={index}
							/>
						))}
					</Routes>
				</Router>
			</main>
		</div>
	);
};

export default App;

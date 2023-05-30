import { Route, Routes } from 'react-router';
import FlavanoidsContainer from './views/flavanoids/flavanoidsContainer';
import GammaContainer from './views/gamma/gammaContainer';

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<>
						<FlavanoidsContainer />
						<GammaContainer />
					</>
				}
			/>
		</Routes>
	);
}

export default App;

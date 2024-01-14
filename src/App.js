import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
				<Routes>
					<Route index element={<Homepage />}></Route>
				</Routes>
		</>
	);
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import News from './Pages/News';
import Schedule from './Pages/Schedule';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route index element={<Homepage />}></Route>
				<Route path="/news" element={<News />}></Route>
				<Route path="/schedule" element={<Schedule />}></Route>
			</Routes>
		</>
	);
}

export default App;

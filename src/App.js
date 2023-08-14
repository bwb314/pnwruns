import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Articles from './pages/articles';
import RunClubs from './pages/runclubs';
import UseDocumentTitle from './components/useDocumentTitle';

function App() {
	UseDocumentTitle()
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' exact element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/articles' element={<Articles />} />
				<Route path='/runclubs' element={<RunClubs />} />
			</Routes>
		</Router>
	);
}

export default App;

import React from 'react';
import GlobalStyles from './components/GlobalStyles';

//Components and Pages
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Nav />
			<Routes>
				<Route path='/game/:id' element={<Home />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;

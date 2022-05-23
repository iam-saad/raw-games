import React from 'react';
import GlobalStyles from './components/GlobalStyles';

//Components and Pages
import Home from './pages/Home';

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Home />
		</div>
	);
}

export default App;

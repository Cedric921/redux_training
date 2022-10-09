import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddBooks from './containers/AddBooks';

import { Route, Routes } from 'react-router-dom';
import SearchBook from './containers/SearchBook';

function App() {
	return (
		<div className='App' style={{ minHeight: '100vh', position: 'relative' }}>
			<Navbar />
			<Routes>
				<Route path='/' element={<AddBooks />} />
				<Route path='/search' element={<SearchBook />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddBooks from './containers/AddBooks';

function App() {
	return (
		<div className='App' style={{ minHeight: '100vh', position: 'relative' }}>
			<Navbar />
			<AddBooks />
			<Footer />
		</div>
	);
}

export default App;

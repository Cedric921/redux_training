import PhoneContainer from './components/PhoneContainer';
import TvContainer from './components/TvContainer';

function App() {
	return (
		<div className='App'>
			<h1>Shop</h1>
			<div className='flex'>
				<PhoneContainer />
				<TvContainer />
			</div>
		</div>
	);
}

export default App;

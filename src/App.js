import './App.css';
import NavTab from './Components/NavTab';
import MyMusic from './pages/MyMusic';


// https://developers.deezer.com/api

function App() {
  return (
		<div className="grid grid-cols-8">
			<div className="col-span-2">Empty</div>
			<div className="col-span-6">
				<NavTab />
				<MyMusic />
			</div>
		</div>
	);
}

export default App;

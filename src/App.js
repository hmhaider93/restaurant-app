import "./App.css";
import Meals from "./components/Meals/Meals";
import Card from "./components/UI/Card";
import Header from "./components/UI/Header";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
				<main className="App-main">
					<Meals />
				</main>
		</div>
	);
}

export default App;

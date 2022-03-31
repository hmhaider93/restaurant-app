import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import Header from "./components/UI/Header";
import CartProvider from "./store/CartProvider";


function App() {

	const [showModal,setShowModal] = useState(false);

	const headerButtonClickHandler = (event) =>{
		setShowModal(true);
	}

	const cartButtonClickHandler = (event) =>{
		setShowModal(false);
	}


	return (
		<CartProvider>
		{showModal && <Cart onClick={cartButtonClickHandler}/>}
		<div className="App">
			<header className="App-header">
				<Header onClick={headerButtonClickHandler} />
			</header>
				<main className="App-main">
					<Meals />
				</main>
		</div>
		</CartProvider>
	);
}

export default App;

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
	const cartItems = (
		<ul className={classes["cart-items"]}>
			{[{ id: "1", name: "sushi", amount: 3, price: 4.0 }].map((item) => {
				{
					return <li key={item.id}>{item.name}</li>;
				}
			})}
		</ul>
	);

    const closeClickHandler = (event) =>{
        
    }

	return (
		<Modal onClick = {props.onClick}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>43.0</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onClick}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};
export default Cart;

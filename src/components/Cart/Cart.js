import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";


const Cart = (props) => {

	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const onAddHandler = (id)=>{

	}

	const onRemoveHandler = (item) =>{

	}

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map((item) => {
				{
					return <CartItem name={item.name} amount={item.amount} price={item.price} onRemove={onRemoveHandler.bind(null,item.id)} onAdd={onAddHandler.bind(null,item)} />
					{/* return <li key={item.id}>{item.name}</li>; */}
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
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onClick}>Close</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};
export default Cart;

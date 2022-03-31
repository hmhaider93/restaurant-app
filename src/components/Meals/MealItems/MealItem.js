import MealItemForm from "../MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {

    const price = `$${props.mealData.price.toFixed(2)}`

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount)=>{

        cartCtx.addItem({
            id: props.mealData.id,
            name: props.mealData.name,
            amount : amount,
            price : props.mealData.price
        })

    }

	return (
		<li className={classes.meal}>
			<div >
				<h3>{props.mealData.name}</h3>
				<p className={classes.description}>{props.mealData.description}</p>
				<p className={classes.price}>{price}</p>
			</div>
            <div>
                <MealItemForm onAddToCart = {addToCartHandler} />
            </div>
		</li>
	);
};

export default MealItem;

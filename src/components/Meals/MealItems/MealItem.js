import MealItemForm from "../MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {

    const price = `$${props.mealData.price.toFixed(2)}`

	return (
		<li className={classes.meal}>
			<div >
				<h3>{props.mealData.name}</h3>
				<p className={classes.description}>{props.mealData.description}</p>
				<p className={classes.price}>{price}</p>
			</div>
            <div>
                <MealItemForm />
            </div>
		</li>
	);
};

export default MealItem;

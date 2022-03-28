import MealItem from "./MealItems/MealItem";
import mealsData from "../data/dummy-meals";
import Card from "../UI/Card";
import classes from './AvailibleMeals.module.css'
const AvailibleMeals = (props) => {
	return (
        <section className={classes.meals} >
		<Card>
			<ul>
				{mealsData.map((mealData) => {
					return <MealItem mealData={mealData} key={mealData.id} />;
				})}
			</ul>
		</Card>

        </section>
	);
};

export default AvailibleMeals;

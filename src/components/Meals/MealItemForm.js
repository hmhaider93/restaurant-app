import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {

    const submitInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

	const submitHandler = (event) => {
        event.preventDefault();


        const enteredAmount = submitInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim() === 0 || enteredAmountNumber <1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);

    };

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
                ref={submitInputRef}
				lable="Amount"
				input={{
					id: "amount_" + Math.random(),
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
		</form>
	);
};

export default MealItemForm;

import classes from "./Header.module.css";
import HeaderCartButton from "../Cart/HeaderCartButton";

// import banner from "../../../public/meals.jpeg"

const Header = (props) => {
	return (
        <>
        <header className={classes.header}>
            <h2>React Meals</h2>
            <HeaderCartButton/>
        </header>
            <div className={classes["main-image"]}>
                <img src="/meals.jpeg"/>
            </div>
        </>
    );
};


export default Header;
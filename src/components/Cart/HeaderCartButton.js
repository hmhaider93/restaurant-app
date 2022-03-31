import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props =>{

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce( (curNum, item)=>{
        return curNum + item.amount;
    }, 0);

    return (
        <div>
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
        </div>
    )
}

export default HeaderCartButton;
import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props =>{

    const [buttonIsHighlighted, setButtonIsHilighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = cartCtx.items.reduce( (curNum, item)=>{
        return curNum + item.amount;
    }, 0);

    const buttonStyling =  `${classes.button} ${buttonIsHighlighted && classes.bump}`;

    useEffect(()=>{

        if(items.length === 0){
            return ;
        }

        setButtonIsHilighted(true);

        const timer = setTimeout(()=>{
            setButtonIsHilighted(false);
        }, 300)

        return ()=>{
            clearTimeout(timer);
        };

    },[items])

    return (
        <div>
        <button className={buttonStyling} onClick={props.onClick}>
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
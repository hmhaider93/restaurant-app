import CartContext from './cart-context';
const CartProvider = props =>{

    const addItemHelper = ()=>{

    }

    const removeItemHelper = ()=>{

    }

    const cartContext = {
        items:[],
        totalAmount : 0,
        addItem: addItemHelper , 
        removeItem:removeItemHelper 
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider;
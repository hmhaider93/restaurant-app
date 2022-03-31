import React, { useContext } from "react";

const CartContext = React.createContext({
    items : [],
    totalAmount : [],
    addItems : ()=>{} ,
    removeItems: () => {}
});

export default CartContext;
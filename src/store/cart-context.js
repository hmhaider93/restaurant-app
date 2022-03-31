import React, { useContext } from "react";

const CartContext = React.createContext({
    items : [],
    totalAmount : [],
    addItems : (item)=>{} ,
    removeItems: (id) => {}
});

export default CartContext;
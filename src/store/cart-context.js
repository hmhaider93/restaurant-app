import React, { useContext } from "react";

const CartContext = React.createContext({
    items : [],
    totalAmount : [],
    addItem : (item)=>{} ,
    removeItem: (id) => {}
});

export default CartContext;
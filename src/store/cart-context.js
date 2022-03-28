import React, { useContext } from "react";

const cartContext = React.createContext({
    items : [],
    totalAmount : [],
    addItems : ()=>{} ,
    removeItems: () => {}
});

export default cartContext;
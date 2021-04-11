import React, { createContext, useState } from "react";
// Imagenes de playa
import Cancun from "../assets/cancun.jpg";
import Escondido from "../assets/escondido.jpg";
import Balandra from "../assets/balandra.jpg";
import Mahahual from "../assets/mahahual.jpg";
// Imagenes de pueblo magico
import Tulum from "../assets/tulum.jpg";
import Aculco from "../assets/aculco.jpg";
import Valladolid from "../assets/valladolid.jpg";
import Bacalar from "../assets/bacalar.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
        {id: 1, name: 'Cancún', price: 300, image: Cancun, status: 'playa'},
        {id: 2, name: 'Aculco', price: 250, image: Aculco, status: 'pueblo'},
        {id: 3, name: 'Puerto Escondido', price: 400, image: Escondido, status: 'playa'},
        {id: 4, name: 'Playa Mahahual', price: 350, image: Mahahual, status: 'playa'},
        {id: 5, name: 'Valladolid', price: 40, image: Valladolid, status: 'pueblo'},
        {id: 6, name: 'Tulum', price: 100, image: Tulum, status: 'pueblo'},
        {id: 7, name: 'Puerto Balandra', price: 80, image: Balandra, status: 'playa'},
        {id: 8, name: 'Bacalar', price: 120, image: Bacalar, status: 'pueblo'}
    ]);
    return(
        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )

}

export default ProductsContextProvider;
import React, { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";
import { CartContext } from "../Global/CartContext";
import Banner from "./Banner";
const Products = () => {
    const {products} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);

    return (
        <div className="container">
            <Banner />
            <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                            <div className="product-image">
                                <img src={product.image} alt="Not found" />
                            </div>
                            <div className="product-details">
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="product-price">
                                    ${product.price}.00
                                </div>
                            </div>
                        <div className="add-to-cart" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, product})}>Agregar al carrito</div>
                            {product.status === 'playa' ? <div className="hot">Playa</div> : ''}
                            {product.status === 'pueblo' ? <div className="new">Pueblo Mágico</div> : ''}
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Products;

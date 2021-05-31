import React from 'react';
import ProductList from './ProductList'

const FirstMobileProducts = () => {
    const length = 4;
    const productList = ProductList.products.slice(0, length).map((product) => 
        <div className="product-card" key={product.id}>
            <img className="product-img" alt={product.productName} src={product.productImage}/>
            <p className="mt-2">{product.productName}</p>
        </div>
    )

    return (
        <div id="product-container">
            <div id="first-mobile-container">
                { productList }
            </div>
        </div> 
    )

}

export default FirstMobileProducts
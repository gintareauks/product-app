import React from 'react';
import ProductList from './ProductList';

const DesktopProducts = () => {

    const productList = ProductList.products.map((product) => 
        <div className="product-card" key={product.id}>
            <img className="product-img" alt={product.productName} src={product.productImage}/>
            <p className="mt-2">{product.productName}</p>
        </div>
    )

    return (
        <div id="product-container">
            <div id="desktop-only-container">
                { productList }
            </div>
        </div> 
    )
}

export default DesktopProducts
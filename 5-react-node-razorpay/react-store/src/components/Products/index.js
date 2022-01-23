import React from 'react'; 
import './index.css';

const Products = ({products, buyNow}) => {
    return( 
    <div className="product-container">
        {products.map(product => (
            <div key={product.id} className="product-container__item">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h5>{product.currenct}{product.price}</h5>
                <button onClick={() => buyNow(product.id)}>Buy Now</button>
            </div>
        ))}
    </div>
    )
}

export default Products;
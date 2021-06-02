import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products); 
    const {id, title} = products[0];
    // console.log("I am from products component", products);
    console.log(id, title);
    
    return (
        <div>
            <div className="four column wide">
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">

                        </div>
                        <div className="content">
                            <div className="header">
                                {id + '. ' + title}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Product Component</h1>
        </div>
    );
}

export default ProductComponent;

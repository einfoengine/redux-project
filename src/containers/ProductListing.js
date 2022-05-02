import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {setProducts} from '../redux/actions/productsActions';

import ProductComponent from './ProductComponent';


const ProductListing = () => {
    const products = useSelector(state => state);
    const dispatch = useDispatch();
    // console.log(products);
    
    const fetchProducts = async () =>{
        const response = await axios.get("https://fakestoreapi.com/products").catch(err => console.log("Axios error: fetch time error",err));
        console.log(response.data);
        dispatch(setProducts(response.data));
    }
    useEffect(()=>{fetchProducts()},[]);
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
}

export default ProductListing;

// Commit:
/* 
1. Fetch products from product store
- useSelector that takes state param and return state
- Load component <ProductComponent/>
- In component get the state and load the product name for test. Always this is a good practice to check if your steps are working or not then move ferther.
- Import axious && useEffect hoocks 
- fetchProducts() to fetch the products from https://fakestoreapi.com/

*/

import {combineReducers} from 'redux';
import {productReducer} from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer
});

// By now we are done with combining all the reducers. 
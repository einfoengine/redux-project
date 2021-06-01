import { ActionTypes } from "../constans/action-types";

const initialState = {
    products: [
        {
            id: 1, 
            title: 'Realme',
            category: 'phone'
        }
    ]
}

export const productReducer = (state, {type, payload}) => {
    switch (ActionTypes) {
        case ActionTypes.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}
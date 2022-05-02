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

/*
** Product reducer
-- 
*/

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}
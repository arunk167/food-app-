import types from "../types";

const initial_state={
     cartItems:[]
}

export default function (state=initial_state,action){
    switch(action.type)
    {
        
        case types.ADD_TO_CART:
            const {data}=action.payload
            let  newArray=[...state.cartItems,data]

            return {
                cartItems:newArray
            }
        default:
            return {
                ...state
            }
        }
}
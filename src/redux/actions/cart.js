import store from "../store";
import types from "../types"; 
const {dispatch} =store; 
export const addToCart=(data)=>{
    
    dispatch({
       type:types.ADD_TO_CART,
       payload: {data}
    })
}
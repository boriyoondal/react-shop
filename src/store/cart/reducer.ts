import produce from "immer";
import {
    addCart,
    deleteCart,
    updateCartQuantity,
    clearCart,
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_CART_QUANTITY,
    CLEAR_CART
} from "../cart/action"

type Action =
    |ReturnType<typeof addCart>
    |ReturnType<typeof deleteCart>
    |ReturnType<typeof updateCartQuantity>
    |ReturnType<typeof clearCart>

type State = {
    item :{
        id : number;
        name : string;
        price : string;
        quan : number,
    },
}[]



const reducer = (state : State , action : Action) => {
    switch (action.type) {
        case ADD_ITEM :
            return [...state, action.payload]
        case DELETE_ITEM :
            return [action.payload]
        default :
            return state;
    
    }
}

export default reducer;
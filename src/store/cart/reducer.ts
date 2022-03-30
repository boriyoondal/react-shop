import produce from "immer";
import {
    addCart,
    deleteCart,
    ADD_ITEM,
    DELETE_ITEM,

} from "../cart/action"

type Action =
    |ReturnType<typeof addCart>
    |ReturnType<typeof deleteCart>

type State = {
    item : {
        id : number;
        item : string;
        name: string;
        price: String;
        qty : number;
    },
}[]

const initialState: State = [];

const reducer = (state : State = initialState , action : Action) => {
    switch (action.type) {
        case ADD_ITEM :
            return [...state, action.payload];
        case DELETE_ITEM :
            return [action.payload];
        default :
            return state;
    
    }
}

export default reducer;
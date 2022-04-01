//@ts
import { Product } from "src/@types/types";

//@action 
import {
    addCart,
    deleteCart,
    clearCart,
    ADD_ITEM,
    DELETE_ITEM,
    CLEAR_ITEM,

} from "../cart/action"

type Action =
    |ReturnType<typeof addCart>
    |ReturnType<typeof deleteCart>
    |ReturnType<typeof clearCart>

interface State {

    products: {
        id: string;
        title: string;
        description: string;
        price: number;
        image: string;
    }[] | [];
    cart : any;
    currentItem: any;
}

//@init
const initialState: State = {
    products : [
        {
            id : "",
            title: "",
            description : "",
            price : 0,
            image : ""
        }
    ],
    cart : [],
    currentItem : null,
};

//@reducer 
const reducer = (state = initialState, action : Action) => {
    switch (action.type) {
        case ADD_ITEM :
            return {
                ...state,
                products: [...state.products, action.product],
            };
        case DELETE_ITEM :
            return {
                ...state,
                products: [...state.products.filter(product => product.id !== action.productId)]
            };
        case CLEAR_ITEM : 
            return {
                ...state,
                products : []
            }
        default :
            return state;
        };      
}

export default reducer;
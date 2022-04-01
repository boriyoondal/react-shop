//@ts
import { Product } from "src/@types/types";

//@action 
import {
    addCart,
    deleteCart,
    ADD_ITEM,
    DELETE_ITEM,
} from "../cart/action"

type Action =
    |ReturnType<typeof addCart>
    |ReturnType<typeof deleteCart>

interface State {

    products: {
        id: string;
        title: string;
        description: string;
        price: string;
        image: string;
    }[] | [];
    cart : any;
    currentItem: any;
}

//@reducer 
const initialState: State = {
    products : [
        {
            id : "",
            title: "",
            description : "",
            price : "",
            image : ""
        }
    ],
    cart : [],
    currentItem : null,
};

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
        default :
            return state;
        };      
}

export default reducer;
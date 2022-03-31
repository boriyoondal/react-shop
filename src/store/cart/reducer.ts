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
            id : "1",
            title : "clothes",
            description : "clothes",
            price : "10,000",
            image :  "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: "2",
            title: "clothes2",
            description:
              "clohtes2",
            price: "20,000",
            image:
              "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: "3",
            title: "clothes3",
            description:
              "clothes3",
            price: "30,000", 
            image:
              "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
        },
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
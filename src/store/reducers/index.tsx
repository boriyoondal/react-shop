import produce from "immer";
import {
    addCart,
    deleteCart,
    ADD_ITEM,
    DELETE_ITEM
} from "../cart/action"

type Action =
    |ReturnType<typeof addCart>
    |ReturnType<typeof deleteCart>

type State = {
    itemList :{
        id : number;
        name : string;
        price : string;
    }[];
}

const initialState : State = {
    itemList : [
    {   
        id : 0,
        name : "",
        price : ""
    }
            ]
}
    

{/*const reducer = (state: State = initialState, action : Action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_ITEM :
                draft.item = draft.item.find((v) => v.title === action.title) as any;
        }
    })
}*/}
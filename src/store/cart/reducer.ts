//@ts
import { Product } from "src/@types/types";
//@action
import { addCart, deleteCart, clearCart, initCart, ADD_ITEM, DELETE_ITEM, CLEAR_ITEM, INIT_ITEM } from "../cart/action";

type Action =
  | ReturnType<typeof addCart>
  | ReturnType<typeof deleteCart>
  | ReturnType<typeof clearCart>
  | ReturnType<typeof initCart>;

interface State {
  products:
    | {
        id: string;
        title: string;
        description: string;
        price: number;
        image: string;
      }[]
    | [];
  totalAmount: number;
  toggle: boolean;
}

//@init
const initialState: State = {
  products: [],
  totalAmount: 0,
  toggle: false,
};

//@reducer
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case INIT_ITEM:
      console.log("init");
      /*
            localStorage.setItem("items", JSON.stringify([{
                id: "1",
                title: "최초",
                description: "예시",
                price: "10,000",
                image: "",
            }]))
            */

      const storage = localStorage.getItem("items");
      if (!!storage !== false) {
        console.log(storage, JSON.parse(storage as string));
        const data:
          | {
              id: string;
              title: string;
              description: string;
              price: number;
              image: string;
            }[]
          | [] = JSON.parse(storage as string);
        return {
          ...state,
          products: data,
        };
      }

      return {
        ...state,
      };

    case ADD_ITEM:
      console.log("ADD_ITEM");
      //@ts-ignore
      let price = action.product.price.replace(",", "");
      price = parseInt(price);

      const newData = action.product;

      localStorage.setItem("items", JSON.stringify([...state.products, newData]));
      const data = localStorage.getItem("items");
      const setData = JSON.parse(data as string);

      return {
        ...state,
        products: [...state.products, action.product],
        //@ts-ignore
        totalAmount: state.totalAmount + price,
        toggle: true,
      };

    case DELETE_ITEM:
      // localStorage.clear();
      // filter

      return {
        ...state,
        products: [...state.products.filter((product) => product !== action.product)],
        // totalAmount : state.totalAmount - price
      };

    case CLEAR_ITEM:
      localStorage.clear();
      return {
        ...state,
        products: [],
        totalAmount: 0,
      };

    default:
      return state;
  }
};

export default reducer;

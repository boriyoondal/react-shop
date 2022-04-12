//@action
import { type } from "os";
import {
  addCart,
  deleteCart,
  clearCart,
  initCart,
  initPrice,
  plusAction,
  ADD_ITEM,
  DELETE_ITEM,
  CLEAR_ITEM,
  INIT_ITEM,
  INIT_PRICE,
  PLUS,
} from "../cart/action";

type Action =
  | ReturnType<typeof addCart>
  | ReturnType<typeof deleteCart>
  | ReturnType<typeof clearCart>
  | ReturnType<typeof initCart>
  | ReturnType<typeof initPrice>
  | ReturnType<typeof plusAction>;

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
  pcs: number;
}

//@init
const initialState: State = {
  products: [],
  totalAmount: 0,
  pcs: 0,
};

//@reducer
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case INIT_ITEM:
      console.log("init");
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
          pcs: data.length,
        };
      }

      return {
        ...state,
      };

    case INIT_PRICE:
      console.log("init price");
      const pricestorage = localStorage.getItem("price");
      if (!!pricestorage !== false) {
        const pricedata: number = JSON.parse(pricestorage as string);
        return {
          ...state,
          totalAmount: pricedata + state.totalAmount,
        };
      }
      return {
        ...state,
      };

    case ADD_ITEM:
      console.log("ADD_ITEM");
      //alert(action.product.title + "가 장바구니에 추가되었습니다.");
      //@ts-ignore
      let price = action.product.price.replace(",", "");
      price = parseInt(price);

      const newData = action.product;

      localStorage.setItem("items", JSON.stringify([...state.products, newData]));
      localStorage.setItem("price", JSON.stringify(price + state.totalAmount));

      const data = localStorage.getItem("items");
      const pricedata = localStorage.getItem("price");
      // localStorage.setItem("qty", JSON.stringify(pcsData.length));
      return {
        ...state,
        products: [...state.products, action.product],
        //@ts-ignore
        totalAmount: state.totalAmount + price,
        pcs: state.pcs,
      };

    case DELETE_ITEM:
      //@ts-ignore
      let reprice = action.product.price.replace(",", "");

      localStorage.setItem("price", JSON.stringify(state.totalAmount - reprice));
      localStorage.setItem(
        "items",
        JSON.stringify([...state.products.filter((product) => product !== action.product)]),
      );
      return {
        ...state,
        products: [...state.products.filter((product) => product !== action.product)],
        totalAmount: state.totalAmount - reprice,
        pcs: state.pcs,
      };

    case CLEAR_ITEM:
      alert("장바구니를 비우시겠습니까?");
      localStorage.clear();
      return {
        ...state,
        products: [],
        totalAmount: 0,
        pcs: 0,
      };

    // case PLUS:
    //   let getValue = action.product.value;
    //   console.log(getValue);
    //   return {
    //     ...state,
    //     value: state.value++,
    //   };

    default:
      return state;
  }
};

export default reducer;

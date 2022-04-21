//@action
import {
  addCart,
  deleteCart,
  clearCart,
  initCart,
  initPrice,
  getPost,
  getPostFail,
  getPostSuccess,
  CLEAR_ITEM,
  INIT_ITEM,
  INIT_PRICE,
  ADD_ITEM,
  DELETE_ITEM,
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from "../cart/action";

type Action =
  | ReturnType<typeof addCart>
  | ReturnType<typeof deleteCart>
  | ReturnType<typeof clearCart>
  | ReturnType<typeof initCart>
  | ReturnType<typeof initPrice>
  | ReturnType<typeof getPost>
  | ReturnType<typeof getPostFail>
  | ReturnType<typeof getPostSuccess>;
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
  loading: boolean;
  error: unknown;
}

//@init
const initialState: State = {
  products: [],
  totalAmount: 0,
  pcs: 0,
  loading: false,
  error: null,
};

//@reducer
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case INIT_ITEM:
      console.log("init");
      const storage = localStorage.getItem("items");
      if (!!storage !== false) {
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
      // localStorage.setItem("login", JSON.stringify(action.data));
      const data = localStorage.getItem("items");
      const pricedata = localStorage.getItem("price");

      return {
        ...state,
        products: [...state.products, action.product],
        //@ts-ignore
        totalAmount: state.totalAmount + price,
        pcs: state.pcs + 1,
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
        pcs: state.pcs - 1,
      };

    case CLEAR_ITEM:
      alert("장바구니를 비우시겠습니까?");
      localStorage.removeItem("item");
      localStorage.removeItem("price");
      return {
        ...state,
        products: [],
        totalAmount: 0,
        pcs: 0,
      };

    case GET_POST:
      return {
        ...state,
        products: [],
        loading: true,
        error: null,
      };

    case GET_POST_SUCCESS:
      return {
        ...state,
        products: [],
        loading: false,
        error: null,
      };

    case GET_POST_FAIL:
      return {
        ...state,
        products: [],
        loading: false,
        error: Error,
      };

    default:
      return state;
  }
};

export default reducer;

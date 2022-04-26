//@redux toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "src/@types/types";

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
  isOpen: boolean;
}

//@init
const initialState: State = {
  products: [],
  totalAmount: 0,
  pcs: 0,
  loading: false,
  error: null,
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,

  reducers: {
    initCart: (state = initialState, action: PayloadAction) => {
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
        state = { ...state, products: data, pcs: data.length };
        return state;
      }
    },

    initPrice: (state = initialState, action: PayloadAction) => {
      const pricestorage = localStorage.getItem("price");
      if (!!pricestorage !== false) {
        const pricedata: number = JSON.parse(pricestorage as string);
        state = { ...state, totalAmount: pricedata + state.totalAmount };
        return state;
      }
    },

    addItem: (state = initialState, action: PayloadAction<Product>) => {
      //@ts-ignore
      let price = action.payload.price.replace(",", "");
      price = parseInt(price);

      const newData = action.payload;

      localStorage.setItem("items", JSON.stringify([...state.products, newData]));
      localStorage.setItem("price", JSON.stringify(price + state.totalAmount));

      localStorage.getItem("items");
      localStorage.getItem("price");

      state = {
        ...state,
        products: [...state.products, action.payload],
        totalAmount: state.totalAmount + price,
        pcs: state.pcs + 1,
      };
      return state;
    },

    deleteItem: (state = initialState, action: PayloadAction<Product>) => {
      //@ts-ignore
      let reprice = action.payload.price.replace(",", "");

      localStorage.setItem("price", JSON.stringify(state.totalAmount - reprice));
      localStorage.setItem(
        "items",
        JSON.stringify([...state.products.filter((product) => product.id !== action.payload.id)]),
      );
      console.log(action.payload);

      state = {
        ...state,
        products: [...state.products.filter((product) => product.id !== action.payload.id)],
        totalAmount: state.totalAmount - reprice,
        pcs: state.pcs - 1,
      };
      return state;
    },

    clearCart: (state = initialState, action: PayloadAction) => {
      localStorage.removeItem("items");
      localStorage.removeItem("price");

      state = { ...state, products: [], totalAmount: 0, pcs: 0 };
      return state;
    },
  },
});

export const { initCart, initPrice, addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

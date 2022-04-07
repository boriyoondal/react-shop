import { Product } from "src/@types/types";

//@Types
export const ADD_ITEM = "ADD_ITEM" as const; // 항목 추가
export const DELETE_ITEM = "DELETE_ITEM" as const; // 항목 삭제
export const CLEAR_ITEM = "CLEAR_ITEM" as const; // 전체 항목 삭제
export const INIT_ITEM = "INIT_ITEM" as const; // 최초에 localstorage 에 내가 저장한 아이템이 있는지?

export const TOGGLE_SWITCH = "TOGGLE_SWITCH" as const;

//@Action
export const addCart = (product: Product) => ({ type: ADD_ITEM, product });
export const deleteCart = (product: Product) => ({ type: DELETE_ITEM, product });
export const clearCart = () => ({ type: CLEAR_ITEM });
export const initCart = () => ({ type: INIT_ITEM });

export const toggleSwitch = () => ({ type: TOGGLE_SWITCH });

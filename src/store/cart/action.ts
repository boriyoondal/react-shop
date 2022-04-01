import { Product } from "src/@types/types";

//@Types
export const ADD_ITEM = "ADD_ITEM" as const; // 항목 추가
export const DELETE_ITEM = "DELETE_ITEM" as const; // 항목 삭제
export const CLEAR_ITEM = "CLEAR_ITEM" as const // 전체 항목 삭제

//@Action
export const addCart = (product:Product) => ({type : ADD_ITEM, product})
export const deleteCart = (productId : string) => ({type : DELETE_ITEM, productId})
export const clearCart = () => ({type : CLEAR_ITEM});
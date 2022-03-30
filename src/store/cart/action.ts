export const ADD_ITEM = "ADD_ITEM" as const; // 항목추가
export const DELETE_ITEM = "DELETE_ITEM" as const; // 항목삭제
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY" as const; // 수량추가
export const CLEAR_CART = "CLEAR_CART" as const; // 장바구니 초기화

type Item = {
    item: string,
    qty : number
}
export const addCart = (item:Item) => ({type : ADD_ITEM, payload:{id:item}})
export const deleteCart = (item:Item) => ({type : DELETE_ITEM, payload:{id:item}})
export const updateCartQuantity = (item: Item, qty : Item) => ({ type: UPDATE_CART_QUANTITY, payload:{id:item, qty}})
export const clearCart = () => ({type : CLEAR_CART})
import { Product } from "src/@types/types";

// store/demo/action.ts
export const PLUS = "PLUS" as const;
export const MINUS = "MINUS" as const;
export const CHAGE_NAME = "CHAGE_NAME" as const;

export const plusAction = (product: Product) => ({ type: PLUS, product });
export const minusAction = () => ({ type: MINUS });
export const changeNameAction = (data: string) => ({ type: CHAGE_NAME, data });

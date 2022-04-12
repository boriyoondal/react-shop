// store/demo/reducer.ts
import { PLUS, MINUS, CHAGE_NAME, plusAction, minusAction, changeNameAction } from "./action";

type Action = ReturnType<typeof plusAction> | ReturnType<typeof minusAction> | ReturnType<typeof changeNameAction>;

type State = {
  value: number;
};

const initialState: State = {
  value: 0,
};

// reducer
const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        value: state.value + 1,
      };

    case MINUS:
      return {
        ...state,
        value: state.value - 1,
      };
    case CHAGE_NAME:
      return {
        ...state,
        name: action.data,
      };

    default:
      return state;
  }
};

export default reducer;

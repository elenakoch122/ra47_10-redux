import { SET_ID, SET_PRICE, SET_TASK } from "./actionsNames";

const initialState = {
  task: '',
  price: '',
  id: null,
};

export const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        task: action.payload,
      };

    case SET_PRICE:
      return {
        ...state,
        price: action.payload,
      };

    case SET_ID:
      return {
        ...state,
        id: action.payload,
      };

    default: return state;
  }
};
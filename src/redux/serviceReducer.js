import { CLEAR_FORM, SET_ID, SET_IS_EDIT, SET_PRICE, SET_TASK } from "./actionsNames";

const initialState = {
  task: '',
  price: '',
  id: null,
  isEdit: false,
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

    case SET_IS_EDIT:
      return {
        ...state,
        isEdit: action.payload,
      };

    case CLEAR_FORM:
      return initialState;

    default: return state;
  }
};
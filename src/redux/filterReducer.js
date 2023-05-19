import { SET_SEARCH_VALUE } from "./actionsNames";

const initialState = {
  filter: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        filter: action.payload,
      };

    default: return state;
  }
};
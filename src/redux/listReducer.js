import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./actionsNames";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  list: [
    { id: uuidv4(), task: 'Купить продукты', price: 1500},
  ],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        id: uuidv4(),
        task: action.payload.task,
        price: action.payload.price,
      };

      return {
        ...state,
        list: [ ...state.list, newItem ],
      };

    case EDIT_ITEM:
      const editedItem = Object.assign({}, state.list.find(i => i.id === action.payload.id));
      editedItem.task = action.payload.task;
      editedItem.price = action.payload.price;

      const idx = state.list.findIndex(i => i.id === action.payload.id);
      const newList = Object.assign([], state.list);
      newList.splice(idx, 1, editedItem);

      return {
        ...state,
        list: newList,
      };

    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter(i => i.id !== action.payload),
      };

    default: return state;
  }
};
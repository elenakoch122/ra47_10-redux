import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, FILTER_LIST } from "./actionsNames";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  list: [
    { id: uuidv4(), task: 'Купить продукты', price: 1500},
    { id: uuidv4(), task: 'Купить порошок', price: 1500},
    { id: uuidv4(), task: 'Купить лимонад', price: 1500},
    { id: uuidv4(), task: 'Забить гвоздь', price: 1500},
  ],
  listFiltered: null,
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        id: uuidv4(),
        task: action.payload.task.trim(),
        price: action.payload.price,
      };

      return {
        ...state,
        list: [ ...state.list, newItem ],
      };

    case EDIT_ITEM:
      const editedItem = Object.assign({}, state.list.find(i => i.id === action.payload.id));
      editedItem.task = action.payload.task.trim();
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

    case FILTER_LIST:
      if (!action.payload) return {...state, listFiltered: null};
      const regexp = new RegExp(action.payload.toLowerCase().trim());

      return {
        ...state,
        listFiltered: state.list.filter(i => regexp.test(i.task.toLowerCase())),
      };

    default: return state;
  }
};
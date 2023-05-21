import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, FILTER_LIST, SET_SEARCH_VALUE } from "./actionsNames";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  list: [
    { id: uuidv4(), task: 'Купить продукты', price: 1500},
    { id: uuidv4(), task: 'Купить стиральный порошок', price: 1500},
    { id: uuidv4(), task: 'Купить лимонад', price: 1500},
    { id: uuidv4(), task: 'Забить гвоздь', price: 1500},
  ],
  listFiltered: null,
  filter: '',
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
        listFiltered: state.listFiltered && [...state.listFiltered, newItem ],
      };

    case EDIT_ITEM:
      const editedItem = state.list.find(i => i.id === action.payload.id);
      editedItem.task = action.payload.task.trim();
      editedItem.price = action.payload.price;

      if (state.listFiltered) {
        const editedItemFiltered = state.listFiltered.find(i => i.id === action.payload.id);
        editedItemFiltered.task = action.payload.task.trim();
        editedItemFiltered.price = action.payload.price;
      }
      return { ...state };

    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter(i => i.id !== action.payload),
        listFiltered: state.listFiltered && state.listFiltered.filter(i => i.id !== action.payload),
      };

    case SET_SEARCH_VALUE:
      return {
        ...state,
        filter: action.payload,
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
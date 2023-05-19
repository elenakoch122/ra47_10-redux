import { ADD_ITEM, CLEAR_FORM, DELETE_ITEM, EDIT_ITEM, FILTER_LIST, SET_ID, SET_IS_EDIT, SET_PRICE, SET_SEARCH_VALUE, SET_TASK } from "./actionsNames";

export const setTask = (task) => ({
  type: SET_TASK,
  payload: task,
});

export const setPrice = (price) => ({
  type: SET_PRICE,
  payload: price,
});

export const setId = (id) => ({
  type: SET_ID,
  payload: id,
});

export const setIsEdit = (value) => ({
  type: SET_IS_EDIT,
  payload: value,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});

export const addItem = (task, price) => ({
  type: ADD_ITEM,
  payload: { task, price },
});

export const editItem = (task, price, id) => ({
  type: EDIT_ITEM,
  payload: { task, price, id },
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  payload: value,
});

export const filterList = (value) => ({
  type: FILTER_LIST,
  payload: value,
});
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SET_ID, SET_PRICE, SET_TASK } from "./actionsNames";

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
import { CHANGE_INPUT_VALUE, ADD_ITEM_LIST, DELETE_ITEM_LIST } from './actionTypes'

export const getChangeInputAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = (value) => ({
  type: ADD_ITEM_LIST,
  value
})
export const getDeleteAction = () => ({
  type: DELETE_ITEM_LIST
})
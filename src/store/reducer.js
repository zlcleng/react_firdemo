import {CHANGE_INPUT_VALUE, ADD_ITEM_LIST, DELETE_ITEM_LIST} from './actionTypes'
const defaultValue = {
  value:'',
  list: []
}
export default (state = defaultValue, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === CHANGE_INPUT_VALUE) {
    newState.value = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM_LIST) {
    newState.list = action.value;
    newState.value = ''
    return newState;
  }
  if (action.type === DELETE_ITEM_LIST) {
    newState.list = action.value;
    return newState;
  }
  return state;
}
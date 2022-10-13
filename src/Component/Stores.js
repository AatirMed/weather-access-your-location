import { createStore } from "redux";
const initialstate = {
  isMonter: { monter: false, btn: "add" },
  edit_id:'',
  disable:false,
  arr: [
    { id: 1, name: "med", ville: "casa" },
    { id: 2, name: "ali", ville: "casa" },
  ],
};
const reducerF = (state = initialstate, action) => {
  switch (action.type) {
    case "add": {
      return { ...state, arr: [...state.arr, action.val] };
    }
    case "del": {
      return { ...state, arr: [...action.val] };
    }
    case "edit": {
      return { ...state, arr: [...action.val] };
    }
    case "one1": {
      return { ...state, one: { ...action.val } };
    }
    case "monter": {
      return { ...state, isMonter: {...action.val} };
    }
    case 'edit_id':{
        return {...state,edit_id:action.val}
    }
    case 'disable':{
      return {...state,disable:action.val}
  }
    default:
      return state;
  }
};
const store = createStore(reducerF);
export default store;


// return { ...state, isMonter: {...state.isMonter,monter:action.val} };
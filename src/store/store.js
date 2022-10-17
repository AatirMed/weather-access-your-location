import { createSlice, configureStore } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const crudSlice = createSlice({
  name: "store",
  initialState: {
    users: [
      { id: 1, name: "AATIR Med", ville: "casablanca" },
      { id: 2, name: "alex", ville: "casablanca" },
    ],
    isMonter: true,
    edit_id: {},
    disabled: false,

  },
  reducers: {
    monter: (state, action) => {
      return { ...state, isMonter: action.payload };
    },

    Add: (state, action) => {
      if (action.payload.name !== "" && action.payload.ville !== "") {
        state.users.push({ ...action.payload, id: nanoid() });
      }
    },

    Edit: (state, action) => {
      const newUsers = [...state.users];
      newUsers.map((ele) => {
        if (ele.id === state.edit_id) {
          if (action.payload.name !== "") {
            ele.name = action.payload.name;
          }
          if (action.payload.ville !== "") {
            ele.ville = action.payload.ville;
          }
        }
        return "ok";
      });
      state.users = [...newUsers];
    },

    EditID: (state, action) => {
      return { ...state, edit_id: {...action.payload} };
    },

    Remove: (state, action) => {
      return {
        ...state,
        users: [...state.users.filter((ele) => ele.id !== action.payload)],
      };
    },
    disREmove: (state, action) => {
      return { ...state, disabled: action.payload };
    },
  },
});

export const { Add, monter, EditID, Edit, Remove, disREmove } =
  crudSlice.actions;
const store = configureStore({
  reducer: crudSlice.reducer,
});

export default store;

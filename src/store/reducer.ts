import { createSlice } from "@reduxjs/toolkit";
import { item } from "../types/item";

const initialState: item[] = [];

const basketSlice = createSlice({
  name: "Basket",
  initialState: initialState,
  reducers: {
    addItem: (state: item[], { payload }: { payload: item }) => {
      const index = state.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state[index].quantity = state[index].quantity + 1;
      } else {
        state.push(payload);
      }
    },
    deleteItem: (state: item[], { payload }: { payload: number }): item[] => {
      let newArr: item[] = [];
      state.forEach((item) => {
        if (item.id !== payload) newArr.push(item);
      });
      return newArr;
    },
  },
});

export const { addItem, deleteItem } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;

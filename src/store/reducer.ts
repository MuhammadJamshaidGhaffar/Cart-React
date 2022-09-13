import { createSlice } from "@reduxjs/toolkit";
import { item } from "../types/item";

const initialState: item[] = [];

const basketSlice = createSlice({
  name: "Basket",
  initialState: initialState,
  reducers: {
    addItem: (state: item[], { payload }: { payload: item }) => {
      state.map((item: item): item => {
        if (item.id == payload.id && item.quantity != undefined) {
          item.quantity += 1;
          return item;
        } else {
          payload.quantity = 1;
          return payload;
        }
      });
    },
    deleteItem: (state: item[], { payload }: { payload: number }) => {
      state.map((item: item) => {
        if (item.id != payload) return item;
      });
    },
  },
});

export const { addItem, deleteItem } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PaginationState {
  currentPage: number;
}

const initialState = {
  currentPage: 1,
} as PaginationState;

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    handleClickPagination: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    resetFirstPage: (state) => {
      state.currentPage = 1;
    },

    incrementPage: (state, action: PayloadAction<number>) => {
      const maxPage = action.payload;
      if (state.currentPage < maxPage) state.currentPage++;
    },

    decrementPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage--;
      }
    },
  },
});

export const PaginationActions = paginationSlice.actions;

export default paginationSlice.reducer;

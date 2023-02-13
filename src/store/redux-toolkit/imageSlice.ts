import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ImageState {
  currentImage: string;
}

const initialState = {
  currentImage: "",
} as ImageState;

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    handleClickImage: (state, action: PayloadAction<string>) => {
      state.currentImage = action.payload;
    },

    resetCurrentImage: (state) => {
      state.currentImage = "";
    },
  },
});

export const imageActions = imageSlice.actions;

export default imageSlice.reducer;

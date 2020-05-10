import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "../store";
import { RootState, Thunk, Dispatch } from "../store";
import { TOC } from "../../libs/toc";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

interface UIState {
  themeMode: ThemeMode;
  tableOfContents: TOC | null;
}

const initialState: UIState = {
  themeMode: ThemeMode.LIGHT,
  tableOfContents: null,
};

// Slice
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      const { payload } = action;
      state.themeMode = payload;
    },
  },
});

// Reducers
export default uiSlice.reducer;

// Selectors
export const uiSelector = (state: RootState) => state.ui;

// Actions
const { setThemeMode } = uiSlice.actions;

// Thunks
export const toggleThemeMode = (): Thunk => (dispatch: Dispatch) => {
  const { themeMode } = store.getState().ui;
  const mode = themeMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;

  dispatch(setThemeMode(mode));
};

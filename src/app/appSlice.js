import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "",
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		handleChange: (state, action) => {
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { handleChange } = appSlice.actions;

export default appSlice.reducer;

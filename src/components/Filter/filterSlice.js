import { createSlice } from "@reduxjs/toolkit";
import { fetchPeopleAsync } from "components/List/listSlice";

const initialState = {
	value: "",
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		handleChange: (state, action) => {
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { handleChange } = filterSlice.actions;

export const asyncHandleChange = (search) => (dispatch) => {
	dispatch(handleChange(search));

	dispatch(fetchPeopleAsync(search));
};

export const selectFilterValue = (state) => state.filter.value;

export default filterSlice.reducer;

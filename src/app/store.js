import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "components/Filter/filterSlice";
import listReducer from "components/List/listSlice";

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		list: listReducer,
	},
});

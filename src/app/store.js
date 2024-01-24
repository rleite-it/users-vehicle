import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "components/Filter/filterSlice";
import appSlice from "src/app/appSlice";

export const store = configureStore({
	reducer: {
		app: appSlice,
		filter: filterSlice,
	},
});

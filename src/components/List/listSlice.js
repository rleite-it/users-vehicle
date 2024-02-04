import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchPeople, fetchVehicles } from "services/api";

const initialState = {
	data: [],
	currentSearch: "",
	vehicles: [],
	initialLoading: false,
	loadingPeople: false,
	viewVehicles: false,
	loadingVehicles: false,
	error: null,
	nextPage: 1,
};

export const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {
		updateCurrentSearch: (state, action) => {
			state.currentSearch = action.payload;
		},

		resetPageCounter: (state) => {
			state.nextPage = 1;
		},

		fetchPeopleStart: (state, action) => {
			if (state.nextPage === 1 || action.payload) {
				state.initialLoading = true;
				return;
			}

			state.loadingPeople = true;
		},
		fetchPeopleSuccess: (state, action) => {
			const { next, results } = action.payload;

			state.loadingPeople = false;
			state.initialLoading = false;

			state.data = state.data.concat(results);

			if (!next) {
				state.nextPage = null;
				return;
			}

			state.nextPage += 1;
		},
		fetchPeopleFailure: (state, action) => {
			state.initialLoading = false;
			state.loadingPeople = false;
			state.error = action.payload;
			toast.error("Something went wrong");
		},
		clearPeopleData: (state) => {
			state.data = [];
		},

		fetchVehiclesStart: (state) => {
			state.loadingVehicles = true;
		},
		fetchVehiclesSuccess: (state, action) => {
			state.loadingVehicles = false;
			state.viewVehicles = true;

			state.vehicles = action.payload;
		},
		fetchVehiclesFailure: (state, action) => {
			state.error = action.payload;
			toast.error("Something went wrong");
		},

		closeViewVehicles: (state) => {
			state.viewVehicles = false;
		},
	},
});

export const {
	updateCurrentSearch,
	resetPageCounter,
	fetchPeopleStart,
	fetchPeopleSuccess,
	fetchPeopleFailure,
	clearPeopleData,
	fetchVehiclesStart,
	fetchVehiclesSuccess,
	fetchVehiclesFailure,
	closeViewVehicles,
} = listSlice.actions;

export const fetchPeopleAsync =
	(search = "") =>
	async (dispatch, getState) => {
		const { nextPage, currentSearch } = getState().list;
		const diffSearch = currentSearch !== search;

		const page = diffSearch ? 1 : nextPage;

		if (!page) {
			toast.info("No more users");
			return;
		}

		if (diffSearch) {
			await dispatch(resetPageCounter());
			await dispatch(updateCurrentSearch(search));
			await dispatch(clearPeopleData());
		}

		await dispatch(fetchPeopleStart(diffSearch));

		try {
			const data = await fetchPeople(page, search);

			dispatch(fetchPeopleSuccess(data));
		} catch (error) {
			dispatch(fetchPeopleFailure(error.message));
		}
	};

export const fetchVehicleAsync = (vehiclesUrls) => async (dispatch) => {
	dispatch(fetchVehiclesStart());

	try {
		const vehiclesData = await Promise.all(
			vehiclesUrls.map((url) => fetchVehicles(url))
		);

		dispatch(fetchVehiclesSuccess(vehiclesData));
	} catch (error) {
		dispatch(fetchVehiclesFailure(error.message));
	}
};

export const selectPeople = (state) => state.list.data;
export const selectInitialLoading = (state) => state.list.initialLoading;
export const selectLoadingPeople = (state) => state.list.loadingPeople;
export const selectVehicles = (state) => state.list.vehicles;
export const selectLoadingVehicles = (state) => state.list.loadingVehicles;
export const selectViewVehicles = (state) => state.list.viewVehicles;

export default listSlice.reducer;

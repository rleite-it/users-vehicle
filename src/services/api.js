import axios from "axios";

export const fetchPeople = async (page, search) => {
	let params = {
		page,
	};

	if (search) params = { ...params, search };

	try {
		const response = await axios.get(
			`${import.meta.env.VITE_BASE_API_URL}/people/`,
			{ params }
		);

		return response.data;
	} catch (error) {
		throw new Error(`Error fetching people: ${error.message}`);
	}
};

export const fetchVehicles = async (url) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		throw new Error(`Error fetching vehicles: ${error.message}`);
	}
};

// Add other API functions as needed

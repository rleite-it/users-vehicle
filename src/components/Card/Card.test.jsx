import "@testing-library/jest-dom";
import capitalizeFirstLetter from "utils/capitalizeFirstLetter";
import Card from "./Card";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Card Component", () => {
	const mockData = {
		name: "Test Car",
		model: "testModel",
		manufacturer: "Test Manufacturer",
		vehicle_class: "testClass",
	};

	it("renders the card component with correct data", () => {
		const { getByAltText, getByText } = render(<Card data={mockData} />);

		// Check if the component renders with the correct data
		expect(getByAltText(mockData.name)).toBeInTheDocument();
		expect(getByText(mockData.name)).toBeInTheDocument();
		expect(
			getByText(capitalizeFirstLetter(mockData.model))
		).toBeInTheDocument();
		expect(getByText(mockData.manufacturer)).toBeInTheDocument();
		expect(
			getByText(capitalizeFirstLetter(mockData.vehicle_class))
		).toBeInTheDocument();
	});
});

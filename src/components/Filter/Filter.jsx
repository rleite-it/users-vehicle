import { useDispatch } from "react-redux";
import { asyncHandleChange } from "./filterSlice";
import SearchIcon from "assets/SearchIcon";
import debounce from "src/utils/debounce";

const Filter = () => {
	const dispatch = useDispatch();

	const debouncedDispatch = debounce(
		(value) => dispatch(asyncHandleChange(value)),
		1000
	);

	return (
		<div className="w-1/3 max-w-[30rem] pt-2 relative text-gray-600">
			<input
				className="w-full bg-white h-10 px-5 pr-16 rounded-xl text-md border border-gray-300 focus:border-2 focus:outline-none focus:ring-2 focus:ring-transparent focus:border-pink-600"
				type="search"
				name="search"
				autoComplete="off"
				placeholder="Search..."
				onChange={(e) => debouncedDispatch(e.target.value)}
			/>

			<button className="absolute right-0 top-0 mt-5 mr-4">
				<SearchIcon />
			</button>
		</div>
	);
};

export default Filter;

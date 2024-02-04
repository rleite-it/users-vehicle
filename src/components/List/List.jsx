import { useCallback, useEffect, useRef } from "react";
import ListItem from "components/ListItem/ListItem";
import {
	fetchPeopleAsync,
	selectLoadingPeople,
	selectPeople,
} from "./listSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingIcon from "assets/LoadingIcon";
import { selectFilterValue } from "components/Filter/filterSlice";

const List = () => {
	const dispatch = useDispatch();
	const loaderRef = useRef(null);
	const loadingPeople = useSelector(selectLoadingPeople);
	const people = useSelector(selectPeople);
	const filter = useSelector(selectFilterValue);

	const handleLoadMore = () => {
		dispatch(fetchPeopleAsync(filter));
	};

	const handleScroll = useCallback(() => {
		if (loaderRef.current) {
			const container = document.getElementById("listContainer");
			const { offsetHeight, scrollHeight, scrollTop } = container;

			const isAtBottom = scrollTop + offsetHeight == scrollHeight;
			const hasScroll = scrollHeight > offsetHeight;

			if (isAtBottom && !loadingPeople && hasScroll) {
				handleLoadMore();
			}
		}
	}, [handleLoadMore]);

	useEffect(() => {
		const container = document.getElementById("listContainer");

		if (!container) return;

		container.addEventListener("scroll", handleScroll);

		return () => {
			container.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll, people]);

	if (people.length) {
		return (
			<div
				id="listContainer"
				className="w-[64rem] h-[42rem] relative overflow-y-auto overflow-x-hidden flex flex-col"
			>
				<div className="flex flex-col gap-3 p-4">
					{people.map((person, i) => (
						<ListItem key={`${person.birth_year}-${i}`} user={person} />
					))}
				</div>
				{loadingPeople && (
					<div className="w-full sticky bottom-0 bg-gradient-to-t from-[#242424] via-black- to-transparent flex justify-center">
						<LoadingIcon width={"5em"} height={"5em"} />
					</div>
				)}
				<div ref={loaderRef}></div>
			</div>
		);
	}

	return (
		<div className="w-[64rem] h-[42rem] relative overflow-y-auto overflow-x-hidden flex items-center justify-center">
			<h2 className="text-gray-300 text-3xl">No data</h2>
		</div>
	);
};

export default List;

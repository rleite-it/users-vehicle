import SkeletonListItem from "./SkeletonListItem";

const SkeletonList = () => {
	const skeletonItems = Array.from({ length: 7 }, (_, index) => index); // Adjust the number of skeleton items

	return (
		<div className="w-[64rem] h-[42rem] relative overflow-hidden flex flex-col">
			<div className="flex flex-col gap-3 p-4">
				{skeletonItems.map((index) => (
					<SkeletonListItem key={index} />
				))}
			</div>
		</div>
	);
};

export default SkeletonList;

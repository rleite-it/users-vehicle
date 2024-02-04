import "./SkeletonListItem.css";

const SkeletonListItem = () => {
	return (
		<div className="skeleton-item">
			<div className="min-h-28 bg-white rounded-xl overflow-hidden shadow-md shadow-slate-800 p-3 text-black flex items-center">
				<div className="w-1/4 flex flex-col items-center">
					<div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden animate-pulse"></div>
					<div className="h-4 w-32 bg-gray-300 mt-2 animate-pulse"></div>
				</div>
				<div className="grow flex items-center justify-around">
					<div className="w-[35%] ml-4">
						<div className="h-4 w-32 bg-gray-300 animate-pulse"></div>
						<div className="h-4 w-32 bg-gray-300 mt-2 animate-pulse"></div>
					</div>
					<div className="w-[65%] ml-4">
						<div className="h-4 w-48 bg-gray-300 animate-pulse"></div>
						<div className="h-4 w-48 bg-gray-300 mt-2 animate-pulse"></div>
					</div>
				</div>
				<div className="w-1/4 ml-4 flex items-center justify-center">
					<div className="h-8 w-28 bg-gray-300 rounded-full animate-pulse"></div>
				</div>
			</div>
		</div>
	);
};

export default SkeletonListItem;

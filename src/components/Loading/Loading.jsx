import LoadingIcon from "assets/LoadingIcon";

const Loading = () => {
	return (
		<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-10">
			<LoadingIcon width="6rem" height="6rem" />
		</div>
	);
};

export default Loading;

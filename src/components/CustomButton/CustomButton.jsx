import React from "react";

const CustomButton = ({ handleClick, children }) => {
	return (
		<button
			className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 font-bold"
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default CustomButton;

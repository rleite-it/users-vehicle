/* eslint-disable react/prop-types */
import UserIcon from "src/assets/UserIcon";
import { containsOnlyNumbers } from "utils/regex";
import capitalizeFirstLetter from "utils/capitalizeFirstLetter";
import CustomButton from "components/CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { fetchVehicleAsync } from "components/List/listSlice";

const ListItem = ({ user }) => {
	const dispatch = useDispatch();

	const { name, height, mass, gender, edited, vehicles } = user;

	const formatedDate = new Date(edited).toLocaleString("en-US");
	const capitalizedGender = capitalizeFirstLetter(gender);

	const handleLoadVehicles = () => {
		dispatch(fetchVehicleAsync(vehicles));
	};

	return (
		<div className="min-h-28 bg-white rounded-xl overflow-hidden shadow-md shadow-gray-400 p-3 text-black flex items-center">
			{/* Avatar and Name */}
			<div className="w-1/4 flex flex-col items-center">
				<div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex justify-center items-center">
					<UserIcon />
				</div>
				<h2 className="text-xl font-bold mt-2 text-center">{name}</h2>
			</div>
			<div className="grow flex items-center justify-around">
				{/* Height and Mass */}
				<div className="w-[35%] ml-4">
					<p>
						<strong>Height: </strong>
						{containsOnlyNumbers(height) ? `${height} cm` : "N/a"}
					</p>
					<p>
						<strong>Mass: </strong>
						{containsOnlyNumbers(mass) ? `${mass} kg` : "N/a"}
					</p>
				</div>

				{/* Gender and Edited */}
				<div className="w-[65%] ml-4">
					<p>
						<strong>Gender: </strong> {capitalizedGender}
					</p>
					<p>
						<strong>Edited: </strong> {formatedDate}
					</p>
				</div>
			</div>

			{/* Show Vehicles Button */}
			<div className="w-1/4 ml-4 flex items-center justify-center">
				<CustomButton handleClick={handleLoadVehicles}>
					Show Vehicles
				</CustomButton>
			</div>
		</div>
	);
};

export default ListItem;

import capitalizeFirstLetter from "utils/capitalizeFirstLetter";

const Card = (props) => {
	const { name, model, manufacturer, vehicle_class } = props.data;

	const imageSrc = "https://www.topgear.com/sites/default/files/2022/07/13.jpg";

	return (
		<div className="w-2/5 bg-gray-100 rounded-md shadow-md p-6 flex items-center">
			<div className="flex-shrink-0">
				<img
					src={imageSrc}
					alt={name}
					className="w-24 h-32 object-cover rounded-md"
				/>
			</div>
			<div className="ml-4">
				<h3 className="text-lg font-bold mb-2">{name}</h3>
				<p className="text-gray-700 text-sm mb-1">
					<span className="font-bold">Model: </span>
					{capitalizeFirstLetter(model)}
				</p>
				<p className="text-gray-700 text-sm mb-1">
					<span className="font-bold">Manufacturer: </span> {manufacturer}
				</p>
				<p className="text-gray-700 text-sm">
					<span className="font-bold">Vehicle Class: </span>
					{capitalizeFirstLetter(vehicle_class)}
				</p>
			</div>
		</div>
	);
};

export default Card;

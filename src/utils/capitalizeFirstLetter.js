// Formats string to camel case. ex: "male" to "Male"
const capitalizeFirstLetter = (str) =>
	str.charAt(0).toUpperCase() + str.slice(1);

export default capitalizeFirstLetter;

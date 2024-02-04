const debounce = (func, delay) => {
	let timeoutId;

	const debouncedFunction = function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};

	debouncedFunction.cancel = () => {
		clearTimeout(timeoutId);
	};

	return debouncedFunction;
};

export default debounce;

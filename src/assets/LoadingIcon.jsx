const LoadingIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		{...props}
	>
		<defs>
			<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style={{ stopColor: "#FF00CC" }} />
				<stop offset="100%" style={{ stopColor: "#3366FF" }} />
			</linearGradient>
		</defs>
		<path
			fill="none"
			stroke="url(#gradient)" // Use the gradient as the stroke color
			strokeDasharray="15"
			strokeDashoffset="15"
			strokeLinecap="round"
			strokeWidth="2"
			d="M12 3C16.9706 3 21 7.02944 21 12"
		>
			<animate
				fill="freeze"
				attributeName="stroke-dashoffset"
				dur="0.3s"
				values="15;0"
			></animate>
			<animateTransform
				attributeName="transform"
				dur="1.5s"
				repeatCount="indefinite"
				type="rotate"
				values="0 12 12;360 12 12"
			></animateTransform>
		</path>
	</svg>
);

export default LoadingIcon;

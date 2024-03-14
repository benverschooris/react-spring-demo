import { useSpring, animated } from "react-spring";

function Animation() {
	const fade = useSpring({
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
		},
	});
	return (
		<animated.div style={fade}>
			<h1>React spring</h1>
		</animated.div>
	);
}

export default Animation;

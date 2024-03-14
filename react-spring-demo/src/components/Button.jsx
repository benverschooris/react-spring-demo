import { useState } from "react";
import { useSpring, animated } from "react-spring";

function Button() {
	const [isToggled, setIsToggled] = useState(false);
	const fade = useSpring({
		opacity: isToggled ? 1 : 0,
	});

	return (
		<>
			<animated.h1 style={fade}>React spring</animated.h1>
			<button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
		</>
	);
}

export default Button;

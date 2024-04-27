import { useState } from 'react';

// Code EyesOnMe Component Here
function EyesOnMe() {
	const [mouse, setMouse] = useState(false);
	function focusedEvent() {
		setMouse(console.log('Good!'));
	}
	function blurredEvent() {
		setMouse(console.log('Hey! Eyes on me!'));
	}
	return (
		<>
			<button onFocus={focusedEvent} onBlur={blurredEvent}>
				Eyes on me
			</button>
		</>
	);
}

export default EyesOnMe;

// Code Keypad Component Here

import { useState } from 'react';

function Keypad() {
	const [input, setInput] = useState(false);

	function handler(event) {
		setInput(console.log('Entering password...'));
	}
	return (
		<div>
			<input type='password' onChange={handler}></input>
		</div>
	);
}

export default Keypad;

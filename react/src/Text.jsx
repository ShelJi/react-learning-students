// Hello Sherin

import React, { useState } from "react";

const Text = () => {
	// const name = "sherin";
    const [name, setName] = useState("Sherin");

	const changeText = () => {
		// name = "Akhin";
		// console.log(name);
        setName("Akhin");
	};

	return (
		<div>
			<h1>{name}</h1>
			<button onClick={changeText}>Change Text</button>
		</div>
	);
};

export default Text;

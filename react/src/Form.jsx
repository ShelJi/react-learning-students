import React, { useState } from "react";

const Form = () => {
	const [name, setName] = useState("Hello admin");

	const changeText = (e) => {
		setName(name + e.target.value);
	};

	return (
		<div>
			<h1>{name}</h1>
			<input type="text" value="" onChange={changeText} />
		</div>
	);
};

export default Form;

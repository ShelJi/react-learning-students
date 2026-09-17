import React from "react";
import Flex from "./Flex.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form.jsx";
import Text from "./Text.jsx";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/home" element={<Flex />} />
					<Route path="/about" element={<Flex />} />
					<Route path="/form" element={<Form />} />
					<Route path="/text" element={<Text />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
// npm i react-router-dom

export default App;

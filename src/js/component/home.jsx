// Import
import React, { useState } from "react";
import "../../styles/index.css";

export function Home() {
	// Código
	const [selectedColor, setSelectedColor] = useState("yellow");

	return (
		<div className="traffic-lights">
			<div
				onClick={() => setSelectedColor("red")}
				className={`light red${selectedColor === "red" ? " glow" : ""}`}
			></div>

			<div
				onClick={() => setSelectedColor("yellow")}
				className={`light yellow${selectedColor === "yellow" ? " glow" : ""}`}
			></div>

			<div
				onClick={() => setSelectedColor("green")}
				className={`light green${selectedColor === "green" ? " glow" : ""}`}
			></div>
		</div>
	);
}

export default Home;
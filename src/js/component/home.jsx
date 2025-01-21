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
				className={`Light red${selectedColor === "red" ? " glow" : ""}`}
			></div>

			<div
				onClick={() => setSelectedColor("yellow")}
				className={`Light yellow${selectedColor === "yellow" ? " glow" : ""}`}
			></div>

			<div
				onClick={() => setSelectedColor("green")}
				className={`Light green${selectedColor === "green" ? " glow" : ""}`}
			></div>
		</div>
	);
}

export default Home;
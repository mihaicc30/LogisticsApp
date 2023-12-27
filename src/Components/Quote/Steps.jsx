import React from "react";
export function Steps({ currentStep }) {
	return (
		<ul className="steps my-10 w-[100%]">
			<li className={`step ${currentStep >= 1 ? " step-primary" : ""}`}>
				Route
			</li>
			<li className={`step ${currentStep >= 2 ? " step-primary" : ""}`}>
				Cargo
			</li>
			<li className={`step ${currentStep >= 3 ? " step-primary" : ""}`}>
				Review
			</li>
			<li className={`step ${currentStep >= 4 ? " step-primary" : ""}`}>
				Payment
			</li>
			<li className={`step ${currentStep >= 5 ? " step-primary" : ""}`}>
				Summary
			</li>
		</ul>
	);
}

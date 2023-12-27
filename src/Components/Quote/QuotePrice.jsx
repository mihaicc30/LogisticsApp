import React, { useEffect, useState } from "react";

export function QuotePrice({
	currentStep,
	stepOneFormData,
	cargoValues,
	quoteValue,
	setquoteValue,
	routeMiles,
}) {
	useEffect(() => {
		setquoteValue((prevValues) => ({
			...prevValues,
			total: "Computing...",
		}));

		let temp_cargo = 0;
		let temp_miles = parseFloat((parseFloat(routeMiles) * import.meta.env.VITE_PRICE_PER_MILE).toFixed(2));
		const prices = {
			small: 4000,
			medium: 4500,
			large: 5500,
			xl: 6000,
		};
		const cargoSizes = ["small", "medium", "large", "xl"];

		for (const size of cargoSizes) {
			if (cargoValues[size] > 0) {
				temp_cargo += parseInt((cargoValues[size] * prices[size]).toFixed());
			}
		}

		const quoteValue = parseFloat(temp_cargo + (temp_miles * 100));
		const vat = parseFloat(quoteValue * 0.2);
		const totalQuoteValue = parseFloat((quoteValue + vat).toFixed(2));

		setquoteValue({
			miles: " £" + temp_miles,
			cargo: " £" + (temp_cargo / 100).toFixed(2),
			vat: " £" + (vat / 100).toFixed(2),
			total: parseFloat(totalQuoteValue),
		});

	}, [stepOneFormData, cargoValues, routeMiles]);

	return (
		<div
			className={`${
				currentStep == 5 && "opacity-0"
			} stats mx-auto overflow-visible shadow transition-all`}
			id={"quoteContainer"}>
			<div className="stat mx-auto">
				<div className="stat-title text-center">Quote</div>
				<div className="stat-value">
					<span className="transition-all">
						{quoteValue == 0 ? "Waiting for data" : (" £" + (parseInt(quoteValue.total) / 100).toFixed(2))}
					</span>
					<div className="dropdown dropdown-bottom">
						<label
							tabIndex="0"
							className="btn-ghost btn-xs btn-circle btn text-info">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="h-4 w-4 stroke-current">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</label>
						<div
							tabIndex="0"
							className="card dropdown-content compact rounded-box left-[-746%] w-64 bg-base-100 shadow-xl border-2">
							<div className="card-body text-center">
								<h2 className="card-title mx-auto">Breakdown</h2>
								<p>Miles:{quoteValue.miles}</p>
								<p>Cargo:{quoteValue.cargo}</p>
								<p>Vat:{quoteValue.vat}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

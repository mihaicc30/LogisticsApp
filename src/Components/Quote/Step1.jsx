import React, { useState, useEffect } from "react";

export function Step1({ handleNext, stepOneFormData, setStepOneFormData }) {
	const [pc1, setPc1] = useState();
	const [pc2, setPc2] = useState();

	const isValidPostcode = (postcode) => {
		const postcodeRegex =
			/^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/;
		return postcodeRegex.test(postcode);
	};

	useEffect(() => {
		if (isValidPostcode(stepOneFormData.pickupPostcode)) {
			setPc1(true);
		} else if (!isValidPostcode(stepOneFormData.pickupPostcode)) {
			setPc1(false);
		}
		if (isValidPostcode(stepOneFormData.dropoffPostcode)) {
			setPc2(true);
		} else if (!isValidPostcode(stepOneFormData.dropoffPostcode)) {
			setPc2(false);
		}
	}, [stepOneFormData]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setStepOneFormData((prevStepOneFormData) => ({
			...prevStepOneFormData,
			[name]: value,
		}));
	};

	const handleClick = (type, postcode) => {
		const apiKey = import.meta.env.VITE_G;

		fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=${apiKey}`,
		)
			.then((response) => response.json())
			.then((data) => {
				setStepOneFormData((prevStepOneFormData) => ({
					...prevStepOneFormData,
					[`${type}Postcode`]: data.results[0].address_components[0].long_name,
					[`${type}Line2`]: data.results[0].address_components[1].long_name,
					[`${type}City`]: data.results[0].address_components[2].long_name,
					[`${type}Coords`]: data.results[0].geometry.location,
				}));
			})
			.catch((error) => console.error(error));
	};

	return (
		<div>
			<div className="my-2 flex justify-center gap-[10vw]">
				<button className="btn" disabled>
					Back
				</button>
				<img src="./assets/step (5).png" className="h-[auto] w-[100px]" />
				<button
					className="btn"
					onClick={() => handleNext()}
					disabled={
						!stepOneFormData.pickupPostcode ||
						!stepOneFormData.pickupCity ||
						!stepOneFormData.pickupName ||
						!stepOneFormData.pickupPhone ||
						!stepOneFormData.dropoffPostcode ||
						!stepOneFormData.dropoffCity ||
						!stepOneFormData.dropoffName ||
						!stepOneFormData.dropoffPhone ||
						!pc1 ||
						!pc2
					}>
					Next
				</button>
			</div>

			<div className="routeContainer my-4">
				<div className="divider mx-auto max-w-[500px] text-center text-xl font-bold">
					Pickup Address
				</div>
				<div className="pickup mx-auto flex max-w-[500px] flex-col gap-[6px] border-2 p-2">
					<label className="input-group">
						<span className="w-[120px]">Postcode*</span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="pickupPostcode"
							value={stepOneFormData.pickupPostcode}
							onChange={handleInputChange}
							style={!pc1 && pc1 == "" ? { border: "1px solid red" } : {}}
						/>
					</label>
					<div className="flex justify-end">
						<button
							className="btn w-1/2"
							disabled={!pc1}
							onClick={() =>
								handleClick("pickup", stepOneFormData.pickupPostcode)
							}>
							Autocomplete Address
						</button>
					</div>

					<label className="input-group">
						<span className="w-[120px]">Line 1 </span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="pickupLine1"
							value={stepOneFormData.pickupLine1}
							onChange={handleInputChange}
						/>
					</label>

					<label className="input-group">
						<span className="w-[120px]">Line 2 </span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="pickupLine2"
							value={stepOneFormData.pickupLine2}
							onChange={handleInputChange}
						/>
					</label>

					<label className="input-group">
						<span className="w-[120px]">City* </span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="pickupCity"
							value={stepOneFormData.pickupCity}
							onChange={handleInputChange}
						/>
					</label>

					<div className="divider">Contact</div>

					<label className="input-group">
						<span className="w-[120px]">Name*</span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="pickupName"
							value={stepOneFormData.pickupName}
							onChange={handleInputChange}
						/>
					</label>
					<label className="input-group">
						<span className="w-[120px]">Phone* </span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="pickupPhone"
							value={stepOneFormData.pickupPhone}
							onChange={handleInputChange}
						/>
					</label>
					<label className="input-group">
						<span className="w-[120px]">Email </span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="pickupEmail"
							value={stepOneFormData.pickupEmail}
							onChange={handleInputChange}
						/>
					</label>
				</div>

				<div className="divider mx-auto mt-10 max-w-[500px] text-center text-xl font-bold">
					Dropoff Address
				</div>
				<div className="dropoff mx-auto mt-2 flex max-w-[500px] flex-col gap-[6px] border-2 p-2">
					<label className="input-group">
						<span className="w-[120px]">Postcode*</span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="dropoffPostcode"
							value={stepOneFormData.dropoffPostcode}
							onChange={handleInputChange}
							style={!pc2 && pc2 == "" ? { border: "1px solid red" } : {}}
						/>
					</label>

					<div className="flex justify-end">
						<button
							className="btn w-1/2"
							disabled={!pc2}
							onClick={() =>
								handleClick("dropoff", stepOneFormData.dropoffPostcode)
							}>
							Autocomplete Address
						</button>
					</div>

					<label className="input-group">
						<span className="w-[120px]">Line 1 </span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="dropoffLine1"
							value={stepOneFormData.dropoffLine1}
							onChange={handleInputChange}
						/>
					</label>

					<label className="input-group">
						<span className="w-[120px]">Line 2 </span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="dropoffLine2"
							value={stepOneFormData.dropoffLine2}
							onChange={handleInputChange}
						/>
					</label>

					<label className="input-group">
						<span className="w-[120px]">City* </span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="dropoffCity"
							value={stepOneFormData.dropoffCity}
							onChange={handleInputChange}
						/>
					</label>

					<div className="divider">Contact</div>

					<label className="input-group">
						<span className="w-[120px]">Name* </span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="dropoffName"
							value={stepOneFormData.dropoffName}
							onChange={handleInputChange}
						/>
					</label>
					<label className="input-group">
						<span className="w-[120px]">Phone* </span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="dropoffPhone"
							value={stepOneFormData.dropoffPhone}
							onChange={handleInputChange}
						/>
					</label>
					<label className="input-group">
						<span className="w-[120px]">Email </span>
						<input
							type="text"
							className="input-bordered input w-[100%]"
							name="dropoffEmail"
							value={stepOneFormData.dropoffEmail}
							onChange={handleInputChange}
						/>
					</label>
				</div>
			</div>
		</div>
	);
}

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export function Step2({
	handleBack,
	handleNext,
	cargoValues,
	setCargoValues,
	pickupDateValue,
	setPickupDateValue,
	dropoffDateValue,
	setDropoffDateValue,
}) {
	const handleIncrease = (key) => {
		setCargoValues((prevCargoValues) => {
			const newValue = parseInt(prevCargoValues[key]) + 1;
			return {
				...prevCargoValues,
				[key]: isNaN(newValue) || newValue < 0 ? 0 : newValue,
			};
		});
	};

	const handleDecrease = (key) => {
		setCargoValues((prevCargoValues) => {
			const newValue = parseInt(prevCargoValues[key]) - 1;
			return {
				...prevCargoValues,
				[key]: isNaN(newValue) || newValue < 0 ? 0 : newValue,
			};
		});
	};

	//date

	const [mindropoffDateValue, setminDropoffDateValue] = useState(
		new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
	);
	const [maxdropoffDateValue, setmaxDropoffDateValue] = useState(
		new Date(Date.now() + 9 * 24 * 60 * 60 * 1000),
	);

	useEffect(() => {}, [mindropoffDateValue]);

	const handleDropoffDateChange = (date) => {
		setDropoffDateValue(date);
	};

	const handlePickupDateChange = (date) => {
		setPickupDateValue(date);

		const minDropoffDate = new Date(date);
		minDropoffDate.setDate(minDropoffDate.getDate() + 2);
		setminDropoffDateValue(minDropoffDate);

		const maxDropoffDate = new Date(date);
		maxDropoffDate.setDate(maxDropoffDate.getDate() + 9);
		setmaxDropoffDateValue(maxDropoffDate);

		setDropoffDateValue(minDropoffDate);
	};

	return (
		<div className="cargoContainer">
			<div className="my-2 flex justify-center gap-[10vw]">
				<button className="btn" onClick={handleBack}>
					Back
				</button>
				<img src="./assets/step (4).png" className="h-[auto] w-[100px]" />
				<button
					className="btn"
					onClick={handleNext}
					disabled={ 
						cargoValues.small === 0 &&
						cargoValues.medium === 0 &&
						cargoValues.large === 0 &&
						cargoValues.xl === 0
					}
				>
					Next
				</button>
			</div>

			<div className="divider mx-auto max-w-[500px] text-center text-xl font-bold">
				Select your cargo
			</div>

			<div className="cargo mx-auto my-4 grid max-w-[500px] grid-cols-2 items-center gap-[6px] border-2 p-2 max-sm:grid-cols-1 max-sm:justify-items-center">
				<label htmlFor="input1 w-fit">
					Small
					<div className="dropdown ">
						<label
							tabIndex={0}
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
							tabIndex={0}
							className="card dropdown-content compact rounded-box w-64 bg-base-100 shadow-xl">
							<div className="card-body">
								<h2 className="card-title">Small Pallet</h2>
								<p>Up to 150kg</p>
								<p>120cm x 100cm</p>
								<p>Max Height: 60cm</p>
							</div>
						</div>
					</div>
				</label>
				<div className="flex w-fit items-center">
					<button
						className="btn bg-[--white] text-2xl font-black text-[--black]"
						onClick={() => handleDecrease("small")}>
						-
					</button>
					<input
						type="text"
						id="input1"
						value={cargoValues.small}
						className="input h-[45px] w-[95px] text-center text-2xl"
						onChange={(e) => {
							const inputVal = e.target.value;
							if (!isNaN(inputVal)) {
								setCargoValues({ ...cargoValues, small: inputVal });
							}
							e.preventDefault();
						}}
					/>
					<button
						className="btn bg-[--white] text-2xl font-black text-[--black]"
						onClick={() => handleIncrease("small")}>
						+
					</button>
				</div>

				<label htmlFor="input2 w-fit">
					Medium
					<div className="dropdown ">
						<label
							tabIndex={0}
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
									d="M13 16h-1v-4h-1m1-4h.01M 21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</label>
						<div
							tabIndex={0}
							className="card dropdown-content compact rounded-box w-64 bg-base-100  shadow-xl">
							<div className="card-body">
								<h2 className="card-title">Medium Pallet</h2>
								<p>Up to 400kg</p>
								<p>120cm x 100cm</p>
								<p>Max Height: 120cm</p>
							</div>
						</div>
					</div>
				</label>
				<div className="flex w-fit items-center">
					<button
						className="btn bg-[--white] text-2xl font-black text-[--black]"
						onClick={() => handleDecrease("medium")}>
						-
					</button>
					<input
						type="text"
						id="input2"
						value={cargoValues.medium}
						className="input h-[45px] w-[95px] text-center text-2xl"
						onChange={(e) => {
							const inputVal = e.target.value;
							if (!isNaN(inputVal)) {
								setCargoValues({ ...cargoValues, medium: inputVal });
							}
							e.preventDefault();
						}}
					/>
					<button
						className="btn bg-[--white] text-2xl font-black text-[--black]"
						onClick={() => handleIncrease("medium")}>
						+
					</button>
				</div>

				<label htmlFor="input3 w-fit">
					Large
					<div className="dropdown ">
						<label
							tabIndex={0}
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
							tabIndex={0}
							className="card dropdown-content compact rounded-box w-64 bg-base-100  shadow-xl">
							<div className="card-body">
								<h2 className="card-title">Large Pallet</h2>
								<p>Up to 500kg</p>
								<p>120cm x 100cm</p>
								<p>Max Height: 100cm</p>
							</div>
						</div>
					</div>
				</label>
				<div className="flex w-fit items-center">
					<button
						className="btn bg-[--white] text-2xl font-black text-[--black]"
						onClick={() => handleDecrease("large")}>
						-
					</button>
					<input
						type="text"
						id="input3"
						value={cargoValues.large}
						className="input h-[45px] w-[95px] text-center text-2xl"
						onChange={(e) => {
							const inputVal = e.target.value;
							if (!isNaN(inputVal)) {
								setCargoValues({ ...cargoValues, large: inputVal });
							}
							e.preventDefault();
						}}
					/>
					<button
						className="btn bg-[--white] text-2xl font-black text-[--black]"
						onClick={() => handleIncrease("large")}>
						+
					</button>
				</div>

				<label htmlFor="input4 w-fit">
					XL
					<div className="dropdown ">
						<label
							tabIndex={0}
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
							tabIndex={0}
							className="card dropdown-content compact rounded-box w-64 bg-base-100  shadow-xl">
							<div className="card-body">
								<h2 className="card-title">XL Pallet</h2>
								<p>Up to 1000kg</p>
								<p>120cm x 100cm</p>
								<p>Max Height: 180cm</p>
							</div>
						</div>
					</div>
				</label>
				<div className="flex w-fit items-center">
					<button
						className="btn bg-[--white] text-2xl font-black text-[--black]"
						onClick={() => handleDecrease("xl")}>
						-
					</button>
					<input
						type="text"
						id="input4"
						value={cargoValues.xl}
						className="input h-[45px] w-[95px] text-center text-2xl"
						onChange={(e) => {
							const inputVal = e.target.value;
							if (!isNaN(inputVal)) {
								setCargoValues({ ...cargoValues, xl: inputVal });
							}
							e.preventDefault();
						}}
					/>
					<button
						className="btn bg-[--white] text-2xl font-black text-[--black]"
						onClick={() => handleIncrease("xl")}>
						+
					</button>
				</div>
			</div>

			<div className="divider mx-auto max-w-[500px] text-center text-xl font-bold">
				Select your dates
			</div>

			<div className="cargo mx-auto my-4 grid max-w-[1000px] grid-cols-2 items-center justify-items-center gap-[6px] border-2 p-2 max-sm:grid-cols-1 max-sm:justify-items-center">
				<div className="w-100 h-100">
					<p className="border-b-2 border-red-400 text-center text-xl font-bold">
						Pickup
					</p>
					<Calendar
						defaultValue={pickupDateValue}
						onChange={handlePickupDateChange}
						minDate={new Date()}
					/>
				</div>

				<div className="w-100 h-100">
					<p className="border-b-2 border-blue-400 text-center text-xl font-bold">
						Dropoff
					</p>
					<Calendar
						value={dropoffDateValue}
						onChange={handleDropoffDateChange}
						minDate={mindropoffDateValue}
						maxDate={maxdropoffDateValue}
					/>
				</div>
			</div>
		</div>
	);
}

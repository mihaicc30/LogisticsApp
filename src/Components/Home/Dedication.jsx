import React from "react";
export function Dedication({}) {
	return (
		<>
			<h2 className="mb-[2vh] mt-[20vh] text-center text-5xl">
				- Dedication -{" "}
			</h2>
			<div className="keyPoints mb-[20vh] gap-[2vw]">
				<div className="point bg-[--gray] p-[4vw]">
					<ion-icon name="alarm-outline"></ion-icon>
					<p
						style={{
							fontSize: "calc(0.6vw + 1rem)",
						}}>
						Working around the clock for our customers
					</p>
				</div>
				<div className="point  bg-[--gray] p-[4vw]">
					<ion-icon name="happy-outline"></ion-icon>
					<p
						style={{
							fontSize: "calc(0.6vw + 1rem)",
						}}>
						Customer oriented attitude and solutions
					</p>
				</div>
				<div className="point  bg-[--gray] p-[4vw]">
					<ion-icon name="flash-outline"></ion-icon>
					<p
						style={{
							fontSize: "calc(0.6vw + 1rem)",
						}}>
						Lightning speed deliveries and on time
					</p>
				</div>
				<div className="point  bg-[--gray] p-[4vw]">
					<ion-icon name="barbell-outline"></ion-icon>
					<p
						style={{
							fontSize: "calc(0.6vw + 1rem)",
						}}>
						Our trucks are ready for anything
					</p>
				</div>
			</div>
		</>
	);
}

import React from "react";
export function About({}) {
	return (
		<>
			<div className="card mx-4 mt-[20vh] bg-base-100 p-[2vw] md:card-side">
				<div className="card-body p-[2vw]">
					<h2
						id={"aboutz"}
						className="whitespace-nowrap text-center"
						style={{
							fontSize: "calc(2vw + 2rem)",
						}}>
						- About Us -{" "}
					</h2>
					<p
						style={{
							fontSize: "calc(0.6vw + 1rem)",
						}}>
						CCW Logistics commenced operations on 12 April 2023, and despite
						encountering some initial challenges, our experienced and dedicated
						team successfully established our reputation as a reliable and
						trustworthy partner in the logistics industry.
					</p>
				</div>
				<figure>
					<img src="./assets/5.jpg" alt="Album" />
				</figure>
			</div>

			<div className="card mx-4 mb-[20vh] bg-base-100 p-[2vw] md:card-side max-md:flex-col-reverse">
				<figure>
					<img src="./assets/6.jpg" alt="Album" />
				</figure>

				<div className="card-body p-[2vw]">
					<p
						style={{
							fontSize: "calc(0.6vw + 1rem)",
						}}>
						At CCW Logistics, we take pride in our ability to tailor our
						services to meet the unique trucking requirements of each of our
						clients. Whether you require a customized solution or a fully
						integrated service that encompasses every aspect of the logistics
						process from loading to delivery, we are equipped to provide you
						with the support you need.
					</p>
				</div>
			</div>
		</>
	);
}

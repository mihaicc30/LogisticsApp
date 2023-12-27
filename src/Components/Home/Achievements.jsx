import React from "react";
export function Achievements({ achievementsRef }) {
	return (
		<>
			<h2 className="mb-[2vh] mt-[20vh] text-center text-5xl">
				- Achievements -{" "}
			</h2>
			<div
				className="achievements mb-[20vh] flex flex-wrap items-center gap-[2vw] "
				id="achievements"
				loading="lazy"
				ref={achievementsRef}>
				<div
					style={{
						fontSize: "calc(.8vw + 1rem)",
					}}
					className="achiev mx-auto flex min-w-[110px] flex-col items-center bg-[--gray] p-[4vw]">
					<ion-icon name="trophy-outline"></ion-icon>
					<span className="mx-auto flex w-fit">
						<p data-num="10.5" className="countThis fs-1 mb-0">
							0
						</p>
						k
					</span>
					<p className="w-fit text-center">REVIEWS</p>
				</div>
				<div
					style={{
						fontSize: "calc(.8vw + 1rem)",
					}}
					className="achiev mx-auto flex min-w-[110px] flex-col items-center bg-[--gray] p-[4vw]">
					<ion-icon name="star-half-outline"></ion-icon>
					<span className="mx-auto flex w-fit">
						<p data-num="50.3" className="countThis fs-1 mb-0">
							0
						</p>
						k
					</span>
					<p className="w-fit text-center">DELIVERIES</p>
				</div>
				<div
					style={{
						fontSize: "calc(.8vw + 1rem)",
					}}
					className="achiev mx-auto flex min-w-[110px] flex-col items-center bg-[--gray] p-[4vw]">
					<ion-icon name="call-outline"></ion-icon>
					<span className="mx-auto flex w-fit">
						<p data-num="15.8" className="countThis fs-1 mb-0">
							0
						</p>
						k
					</span>
					<p className="w-fit text-center">CALLS</p>
				</div>
				<div
					style={{
						fontSize: "calc(.8vw + 1rem)",
					}}
					className="achiev mx-auto flex min-w-[110px] flex-col items-center bg-[--gray] p-[4vw]">
					<ion-icon name="thumbs-up-outline"></ion-icon>
					<span className="mx-auto flex w-fit">
						<p data-num="30.4" className="countThis fs-1 mb-0">
							0
						</p>
						k
					</span>
					<p className="w-fit text-center">CUSTOMERS</p>
				</div>
			</div>
		</>
	);
}

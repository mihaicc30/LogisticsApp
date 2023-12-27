import React, { useState, useEffect } from "react";

const images = [
	"./assets/2.jpg",
	"./assets/1.jpg",
	"./assets/3.jpg",
	"./assets/4.jpg",
];
export function HeroCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [nextIndex, setNextIndex] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setNextIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1,
			);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setActiveIndex(nextIndex);
			setNextIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1,
			);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [nextIndex]);

	const handlePrevClick = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1,
		);
		setNextIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1,
		);
	};

	const handleNextClick = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1,
		);
		setNextIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1,
		);
	};

	return (
		<>
			<div className="carousel relative mb-8 h-[65vw] w-full overflow-hidden">
				{images.map((image, index) => (
					<div
						key={index}
						id={`slide${index}`}
						className={`carousel-item absolute w-full ${
							activeIndex === index || nextIndex === index ? "z-10" : "z-0"
						} ${
							activeIndex === index
								? "opacity-100 transition-opacity duration-1000"
								: "opacity-0 transition-opacity duration-1000"
						}`}>
						<img src={image} className="w-full" />
					</div>
				))}

				<div className="absolute left-1/2 top-1/2 flex w-[100%] translate-x-[-50%] translate-y-[-50%] flex-col  justify-center gap-10 bg-[#f0f2ffa8]  p-[6vw] text-[5vw] font-black z-10 tracking-widest">
					<p>Expert Logistics.</p>
					<p>Exceptional Service.</p>
				</div>
				<div className="absolute bottom-0 flex h-[60px] w-[100%] justify-center">
					<button
						className="z-20 rounded-l-full text-6xl "
						onClick={handlePrevClick}>
						<ion-icon name="caret-back-outline"></ion-icon>
					</button>
					<span className="z-20 my-auto h-1/3 w-10"></span>
					<button
						className=" z-20 rounded-r-full text-6xl "
						onClick={handleNextClick}>
						<ion-icon name="caret-forward-outline"></ion-icon>
					</button>
				</div>
			</div>
		</>
	);
}

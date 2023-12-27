import { Contact } from './Contact';
import { Achievements } from './Achievements';
import { Features } from './Features';
import { Dedication } from './Dedication';
import { About } from './About';
import { HeroCarousel } from "./HeroCarousel";
import Carousel from "./Carousel.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import React, { useEffect, useRef, useState } from "react";

const Home = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const achievementsRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const countElems = entry.target.querySelectorAll(".countThis");
						let count = 0;
						countElems.forEach((countElem) => {
							const countTo = parseFloat(countElem.getAttribute("data-num"));
							const steps = parseFloat(countTo) / 100;
							const interval = setInterval(function () {
								if (parseFloat(countElem.innerHTML) < parseFloat(countTo)) {
									countElem.innerHTML = (
										parseFloat(countElem.innerHTML) + steps
									).toFixed(1);
								} else {
									clearInterval(interval);
									countElem.innerHTML = countTo;
								}
							}, 20);
						});
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.9 },
		);

		observer.observe(achievementsRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<>
			

			<HeroCarousel />

			<About     />

			<Dedication     />

			<Features     />

			<Achievements   achievementsRef={achievementsRef}  />

			<Contact     />
			
			<Carousel />

			
		</>
	);
};

export default Home;

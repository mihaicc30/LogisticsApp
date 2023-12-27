import React from "react";
import logo from "../../assets/logo.jsx";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<>
			<div
				className="navbar w-full items-end  justify-end bg-[--blue] p-0 text-[--white] max-[500px]:flex-col max-[500px]:flex-wrap max-[500px]:items-center min-[500px]:gap-10"
				id={"homez"}>
				<p>👷‍♂️ 24/7 Support</p>
				<p>📧 contact@ccw.co.uk</p>
				<p className="min-[500px]:mr-8">📱 012345 123 123</p>
			</div>
			<div className="navbar h-[200px] w-full justify-around p-0 text-[--white] max-[500px]:flex-col">
				<div className="navbar-start h-full w-[fit-content] min-w-[130px] max-[350px]:justify-center">
					{logo()}
				</div>

				<div className="navbar-center hidden md:flex">
					<ul className="menu menu-horizontal gap-4 px-1">
						<li>
							<button
								className="btn bg-[--blue] text-[--white] flex content-center"
								onClick={(e) => {
									e.preventDefault();
									navigate("/");
									setTimeout(() => {
										window.scrollTo(0, 0);
									}, 222);
								}}>
								Home
							</button>
						</li>

						<li>
							<button
								className="btn bg-[--blue] text-[--white] flex content-center"
								onClick={(e) => {
									e.preventDefault();
									navigate("/");
									setTimeout(() => {
										document
											.getElementById("aboutz")
											.scrollIntoView({ behavior: "smooth" });
									}, 222);
								}}>
								About
							</button>
						</li>
						<li>
							<button
								className="btn bg-[--blue] text-[--white] flex content-center"
								onClick={(e) => {
									e.preventDefault();
									navigate("/");
									setTimeout(() => {
										document
											.getElementById("contactz")
											.scrollIntoView({ behavior: "smooth" });
									}, 222);
								}}>
								Contact
							</button>
						</li>
					</ul>
				</div>

				<div className="navbar-end w-[fit-content]">
					<NavLink to="/Quote" className="btn bg-[--pink] text-[--white]">
						Get Quote
					</NavLink>
					<div className="dropdown">
						<label tabIndex={0} className="btn-ghost btn md:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-12 w-12"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content menu rounded-box menu-compact right-[-10%] z-[100] mt-3 w-52 gap-4 bg-base-100 p-2 font-black tracking-widest text-[--black] shadow">
							<li>
								<button
									className="btn bg-[--blue] text-[--white]"
									onClick={(e) => {
										e.preventDefault();
										navigate("/");
										setTimeout(() => {
											document
												.getElementById("homez")
												.scrollIntoView({ behavior: "smooth" });
										}, 222);
									}}>
									Home
								</button>
							</li>

							<li>
								<button
									className="btn bg-[--blue] text-[--white]"
									onClick={(e) => {
										e.preventDefault();
										navigate("/");
										setTimeout(() => {
											document
												.getElementById("aboutz")
												.scrollIntoView({ behavior: "smooth" });
										}, 222);
									}}>
									About
								</button>
							</li>

							<li>
								<button
									className="btn bg-[--blue] text-[--white]"
									onClick={(e) => {
										e.preventDefault();
										navigate("/");
										setTimeout(() => {
											document
												.getElementById("contactz")
												.scrollIntoView({ behavior: "smooth" });
										}, 222);
									}}>
									Contact
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;

// home contact quote

// logo email availability phone

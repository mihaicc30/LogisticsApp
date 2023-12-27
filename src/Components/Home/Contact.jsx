import React, { useRef, useEffect, useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCfW2Ww_hfUGgKeJPgoeyNmmbnQq9Y5ns0",
	authDomain: "ccwlogistics-de10d.firebaseapp.com",
	projectId: "ccwlogistics-de10d",
	storageBucket: "ccwlogistics-de10d.appspot.com",
	messagingSenderId: "139564020026",
	appId: "1:139564020026:web:ddae4a41cd2d0e0c44a003",
	measurementId: "G-PZ7XJZHCZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export function Contact() {
	const [err, setErr] = useState({
		name: "",
		email: "",
		message: "",
	});

	const sendEmail = (name, email, message) => {
		addDoc(collection(db, "messages"), {
			uid: crypto.randomUUID(),
			name,
			email,
			message,
			date: new Date(),
		});
	};

	const validate = async (n, e, m) => {
		setErr({
			name: "",
			email: "",
			message: "",
		});
		console.log(n, e, m);
		let isValid = true;

		if (n.length < 3) {
			setErr((prevErrors) => ({
				...prevErrors,
				name: "Name too short.",
			}));
			isValid = false;
		}

		let emailRegex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		if (!e) {
			setErr((prevErrors) => ({
				...prevErrors,
				email: "Email required.",
			}));
			isValid = false;
		} else if (!emailRegex.test(e)) {
			setErr((prevErrors) => ({
				...prevErrors,
				email: "Email invalid.",
			}));
			isValid = false;
		}

		if (m.length < 1) {
			setErr((prevErrors) => ({
				...prevErrors,
				message: "Message required.",
			}));
			isValid = false;
		} else if (m.length < 3) {
			setErr((prevErrors) => ({
				...prevErrors,
				message: "Message too short.",
			}));
			isValid = false;
		}

		return isValid;
	};

	const refName = useRef(null);
	const refEmail = useRef(null);
	const refMessage = useRef(null);
	const refPhone = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validateForm = await validate(
			refName.current.value,
			refEmail.current.value,
			refMessage.current.value,
			refPhone.current.value,
		);
		console.log("validateForm", validateForm);
		if (!validateForm) return;

		sendEmail(
			refName.current.value,
			refEmail.current.value,
			refMessage.current.value,
		);
		alert("Thank you! Message has been successfully sent!");
	};

	return (
		<>
			<h2 className="mb-[2vh] mt-[20vh] text-center text-5xl" id={"contactz"}>
				- Contact -
			</h2>
			<div className="contactUs flex justify-evenly py-[10vh] max-md:flex-col max-md:gap-10 max-md:px-10">
				<div className="basis-1/3 rounded bg-[--white] p-[2vw]">
					<p className="my-5">
						At CCW Logistics, we provide reliable and efficient logistics
						solutions to businesses of all sizes. Our team of experienced
						professionals is committed to delivering top-notch service to our
						clients, whether they require transportation, warehousing, or supply
						chain management.
					</p>
					<p className="my-5">
						To learn more about how CCW Logistics can support your business,
						please don't hesitate to get in touch with us. You can reach us by
						phone at <span>12345 123 123</span> or by email at{" "}
						<span>info@ccwlogistics.co.uk</span>. Our headquarters are located
						at 123 Worcester, UK, and we have additional offices and facilities
						throughout the country to serve you better.
					</p>
				</div>
				<form
					className="form-control basis-1/3 gap-4 rounded"
					onSubmit={handleSubmit}>
					<label className="input-group">
						<span className="w-[120px]">Name</span>
						<input
							required
							ref={refName}
							type="text"
							placeholder="Contact name..."
							className="input-bordered input w-[100%]"
						/>
					</label>
					{err.name && (
						<span className="animate-fadeUP1 text-[--black] p-2 rounded-lg border-2 border-[--white] bg-[--gray]">
							{err.name}
						</span>
					)}
					<label className="input-group">
						<span className="w-[120px]">Email</span>
						<input
							required
							ref={refEmail}
							type="text"
							placeholder="Contact email..."
							className="input-bordered input w-[100%]"
						/>
					</label>
					{err.email && (
						<span className="animate-fadeUP1 text-[--black] p-2 rounded-lg border-2 border-[--white] bg-[--gray]">
							{err.email}
						</span>
					)}
					<label className="input-group">
						<span className="w-[120px]">Phone</span>
						<input
							required
							ref={refPhone}
							type="text"
							placeholder="Contact phone..."
							className=" input-bordered input w-[100%]"
						/>
					</label>
					<label className="input-group">
						<span className="w-[120px]">Message</span>
						<textarea
							required
							ref={refMessage}
							placeholder="Your query..."
							className="input-bordered input h-[120px] w-[100%] py-2"
							cols="20"
							rows="20"></textarea>
					</label>
					{err.message && (
						<span className="animate-fadeUP1 text-[--black] p-2 rounded-lg border-2 border-[--white] bg-[--gray]">
							{err.message}
						</span>
					)}
					<button
						type="submit"
						className="input h-[50px] w-[100%] bg-[--white] text-xl text-[--black]">
						Send
					</button>
				</form>
			</div>

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9782.36895982767!2d-2.197743!3d52.1962842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870f17fa825cbb3%3A0xb57621d7cda583af!2sCCWorcester!5e0!3m2!1sen!2suk!4v1683987891280!5m2!1sen!2suk"
				className="mb-[10vh] w-full "
				height="350"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"></iframe>
		</>
	);
}

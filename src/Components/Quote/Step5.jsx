import React from "react";
export function Step5({
	// handleBack, //testing - remove after
}) {
	return (
		<div className="summaryContainer">
			<div className="my-2 flex justify-center gap-[10vw]">
				{/* <button className="btn" onClick={handleBack}>
					Back
				</button> */}
				<img src="./assets/step (1).png" className="h-[auto] w-[100px]" />
				{/* <button className="btn cursor-default opacity-0" disabled>
					Next
				</button> */}
			</div>

			<div className="summary mx-auto flex max-w-[500px] flex-col gap-[6px] border-2 p-2 my-10 text-center">
				<p className="font-bold text-3xl mt-10">
					Your payment was successful! Thank you for your purchase.
				</p>

				<p className="mt-10">An email containing all the details of your order has been sent to your registered email address. Please check your inbox for further reference.</p>

				<div className="mt-10 p-2 border-2 text-xl shadow-xl">
					<p>Reference:</p>
					<p>{crypto.randomUUID()}</p>
				</div>

				<p className="font-bold mt-10">Need Assistance?</p>
				<p className="mt-10">
					If you have any questions or need assistance with your order, please
					feel free to contact our customer support team at 📱012345 123 123, 📧support@ccw.co.uk or
					visit our Customer Support page.{" "}
				</p>
				<p className="my-10">Thank you for choosing our services. We appreciate your business!</p>
			</div>
		</div>
	);
}

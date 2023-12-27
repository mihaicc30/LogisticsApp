import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements, useElements, useStripe, PaymentElement, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js"; // https://www.npmjs.com/package/@stripe/react-stripe-js

const options = {
  mode: "setup",
  currency: "gbp",
};

export function Step4({ handleBack, handleNext, billingData, quoteValue, stripePromise }) {
  const CARD_OPTIONS = {
    mode: "payment", // 'payment' | 'setup' | 'subscription'
    currency: "gbp",
    amount: parseFloat((parseInt(quoteValue.total) / 100).toFixed(2)) * 100,
    iconStyle: "solid",

    style: {
      base: {
        iconColor: "#c4f0ff",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        "::placeholder": {
          color: "#87bbfd",
        },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const loader = "auto";
  const appearance = {
    theme: "flat",
  };
  return (
    <div className="paymentContainer">
      <div className="my-2 flex justify-center gap-[10vw]">
        <button className="btn" onClick={handleBack}>
          Back
        </button>
        <img src="./assets/step (2).png" className="h-[auto] w-[100px]" />
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      </div>

      <div className="payment mx-auto flex h-[50] max-w-[500px] flex-col justify-center gap-[6px] border-2 bg-gray-300 p-2 ">
        <Elements stripe={stripePromise} options={CARD_OPTIONS}>
          <Checkout handleBack={handleBack} handleNext={handleNext} billingData={billingData} quoteValue={quoteValue} stripePromise={stripePromise} />
        </Elements>
      </div>
    </div>
  );
}

// https://github.com/stripe-samples/accept-a-payment/blob/main/payment-element/client/react-cra/src/App.js

const Checkout = ({ handleBack, handleNext, billingData, quoteValue, stripePromise }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    email: "alemih25@gmail.com",
    phone: "07443359891",
    name: "mih ucl",
  });

  // console.log(billingData, quoteValue);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (!stripe) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.log(submitError);
      setProcessing(false);
      return;
    }

    // // Create the PaymentIntent and obtain clientSecret
    const api = `${import.meta.env.VITE_API}create-payment-intent2`;
    const res = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: parseFloat((parseInt(quoteValue.total) / 100).toFixed(2)),
        v: import.meta.env.VITE_G,
      }),
    });

    let cs = await res.json();

    // Use the clientSecret and Elements instance to confirm the setup
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: cs.clientSecret,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
      // Uncomment below if you only want redirect for redirect-based payments
      redirect: "if_required",
    });

    if (error) {
      setProcessing(false);
      console.log(error);
    } else {
      setProcessing(false);
      console.log("success", cs);
      setTimeout(() => {
        handleNext();
      }, 1000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <CardNumberElement  options={CARD_OPTIONS} />
    <CardExpiryElement  options={CARD_OPTIONS} />
    <CardCvcElement  options={CARD_OPTIONS} /> */}

        <PaymentElement onReady={() => setProcessing(false)} />

        <button className={`SubmitButton ${error ? "SubmitButton--error" : ""} m-1 mx-auto w-[100%] p-2 disabled:text-gray-500`} type="submit" disabled={!stripePromise || processing || !stripe}>
          {processing || !stripePromise || !stripe ? "Processing..." : `Pay ${" £" + (parseInt(quoteValue.total) / 100).toFixed(2)}`}
        </button>
      </form>
    </>
  );
};

import { Steps } from "./Steps";
import { QuotePrice } from "./QuotePrice";
import { Step5 } from "./Step5";
import { Step4 } from "./Step4";
import { Step3 } from "./Step3";
import { Step2 } from "./Step2";
import { Step1 } from "./Step1";
import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";

// import stripe from "stripe";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// const stripePromise = loadStripe(import.meta.env.VITE_S_PK);

const Quote = (props) => {
  const { stripePromise } = props;

  const [quoteValue, setquoteValue] = useState({
    miles: 0,
    cargo: 0,
    vat: 0,
    total: 0,
  });
  // steps
  const [currentStep, setCurrentStep] = useState(1);

  //step1 route info
  const [stepOneFormData, setStepOneFormData] = useState({
    pickupPostcode: "WR4 9EA",
    pickupLine1: "",
    pickupLine2: "Dove Close",
    pickupCity: "Worcester",
    pickupName: "Mihai Culea",
    pickupPhone: "07443350891",
    pickupEmail: "alemihai25@gmail.com",
    dropoffPostcode: "GL2 5JU",
    dropoffLine1: "",
    dropoffLine2: "Hempsted Lane",
    dropoffCity: "Gloucester",
    dropoffName: "Mihai Culea",
    dropoffPhone: "07443350891",
    dropoffEmail: "alemihai25@gmail.com",
    pickupCoords: "",
    dropoffCoords: "",
  });
  //step2 cargo info
  const [cargoValues, setCargoValues] = useState({
    small: 0,
    medium: 0,
    large: 0,
    xl: 0,
  });

  const [pickupDateValue, setPickupDateValue] = useState(new Date());
  const [dropoffDateValue, setDropoffDateValue] = useState(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)); // d,h,m,s,ms

  //step3 billing info

  const [billingData, setBillingData] = useState({});
  const [routeMiles, setRouteMiles] = useState(0);

  function extractPickupData(stepOneFormData) {
    const pickupKeys = Object.keys(stepOneFormData).filter((key) => key.startsWith("pickup"));
    const billingData = {};
    pickupKeys.forEach((key) => {
      billingData[key] = stepOneFormData[key];
    });
    return billingData;
  }

  //step4
  //step5

  useEffect(() => {
    extractPickupData(billingData);
  }, [stepOneFormData, cargoValues, billingData]);

  const handleNext = () => {
    window.scrollTo(0, 200);
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    window.scrollTo(0, 200);
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex flex-col">
      <QuotePrice currentStep={currentStep} quoteValue={quoteValue} setquoteValue={setquoteValue} stepOneFormData={stepOneFormData} cargoValues={cargoValues} routeMiles={routeMiles} />

      <Steps currentStep={currentStep} />

      {currentStep === 1 && <Step1 handleNext={handleNext} stepOneFormData={stepOneFormData} setStepOneFormData={setStepOneFormData} />}

      {currentStep === 2 && <Step2 handleBack={handleBack} handleNext={handleNext} cargoValues={cargoValues} setCargoValues={setCargoValues} pickupDateValue={pickupDateValue} setPickupDateValue={setPickupDateValue} dropoffDateValue={dropoffDateValue} setDropoffDateValue={setDropoffDateValue} />}

      {currentStep === 3 && <Step3 handleBack={handleBack} handleNext={handleNext} cargoValues={cargoValues} stepOneFormData={stepOneFormData} billingData={billingData} setBillingData={setBillingData} extractPickupData={extractPickupData} setRouteMiles={setRouteMiles} />}

      {currentStep === 4 && (
          <Step4 handleBack={handleBack} handleNext={handleNext} billingData={billingData} quoteValue={quoteValue} stripePromise={stripePromise} />
      )}

      {currentStep === 5 && (
        <Step5
          handleBack={handleBack} //testing - remove after
        />
      )}
    </div>
  );
};

export default Quote;

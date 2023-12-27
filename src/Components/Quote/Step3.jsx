import DirectionsMap from "./DirectionsMap";
import React, { useEffect, useState } from "react";
export function Step3({ handleBack, handleNext, cargoValues, stepOneFormData, billingData, setBillingData, extractPickupData, setRouteMiles }) {
  useEffect(() => {
    fetch(import.meta.env.VITE_API); // just to wake up early the server

    if (Object.keys(billingData).length > 0) {
      return;
    }
    const pickupKeys = Object.keys(stepOneFormData).filter((key) => key.startsWith("pickup"));
    const billingDataa = {};
    pickupKeys.forEach((key) => {
      if (key.indexOf("Coords") > 0) return;
      billingDataa[key] = stepOneFormData[key];
    });
    setBillingData(billingDataa);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBillingData((prefBillingData) => ({
      ...prefBillingData,
      [name]: value,
    }));
  };

  return (
    <div className="reviewContainer">
      <div className="my-2 flex justify-center gap-[10vw]">
        <button className="btn" onClick={handleBack}>
          Back
        </button>
        <img src="./assets/step (3).png" className="h-[auto] w-[100px]" />
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      </div>

      <div className="review mx-auto my-2 flex max-w-[1200px] flex-col gap-[6px] border-2 p-2 max-lg:max-w-[800px] max-md:max-w-[500px]">
        <div className="divider mx-auto w-[100%] max-w-[500px] text-xl font-bold">Route</div>
        <div className="pickup min-md:mx-auto flex  max-w-[1200px] gap-[6vw] border-2 p-2 max-lg:max-w-[800px] max-md:max-w-[500px] max-md:flex-col min-[1200px]:gap-[100px]">
          <div className="max-w-[700px] basis-1/2 max-lg:max-w-[400px] max-md:max-w-[250px] ">
            {Object.entries(stepOneFormData).map(([key, value]) => {
              if (key.indexOf("Coords") > 0) return;
              if (key.startsWith("pickup") && value !== "") {
                return (
                  <label className="flex max-md:flex-col md:gap-[6vw] lg:gap-[10vw] min-[1200px]:gap-[100px]" key={key}>
                    <span className="basis-1/2 whitespace-nowrap font-bold">Pickup {key.split("pickup")}</span>
                    <span className="basis-1/2 whitespace-nowrap">{value}</span>
                  </label>
                );
              }
              return null;
            })}
          </div>
          <div className="max-w-[700px] basis-1/2 max-lg:max-w-[400px] max-md:max-w-[250px] ">
            {Object.entries(stepOneFormData).map(([key, value]) => {
              if (key.indexOf("Coords") > 0) return;
              if (key.startsWith("dropoff") && value !== "") {
                return (
                  <label className="flex max-md:flex-col md:gap-[6vw] lg:gap-[10vw] min-[1200px]:gap-[100px]" key={key}>
                    <span className="basis-1/2 whitespace-nowrap font-bold">Dropoff {key.split("dropoff")}</span>
                    <span className="basis-1/2">{value}</span>
                  </label>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="divider mx-auto w-[100%] max-w-[500px] text-xl font-bold">Map</div>

        <div className="mapz w-100 border-2 p-2">
          {/* temp map */}
          <DirectionsMap stepOneFormData={stepOneFormData} setRouteMiles={setRouteMiles} />
        </div>

        <div className="divider mx-auto w-[100%] max-w-[500px] text-xl font-bold">Cargo</div>

        <div className="pickup mx-auto flex max-w-[500px] gap-[10vw] border-2 p-2 max-lg:gap-[10px]">
          <div className="flex w-[500px] flex-col max-sm:w-[100%] ">
            {Object.entries(cargoValues).map(([key, value]) => (
              <label className="grid grid-cols-2 justify-items-center gap-[20px]" key={key}>
                <span className="font-bold capitalize">{key}</span>

                <span className="">{value}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="divider mx-auto w-[100%] max-w-[500px] text-xl font-bold max-sm:w-[100%]">Billing</div>

        <div className="billing flex max-w-[1200px] gap-[10vw] border-2 p-2 px-[8vw] max-lg:max-w-[800px] max-md:max-w-[500px] max-md:flex-col min-[768px]:mx-auto">
          <div>
            {Object.entries(billingData).map(([key, value]) => {
              if (key.indexOf("Coords") >= 0) return;
              if (key.startsWith("pickup") && value !== "") {
                return (
                  <label className="flex max-md:flex-col " key={key}>
                    <span className={"basis-1/2 whitespace-nowrap font-bold"}>{key.split("pickup")}</span>
                    <input type="text" className={`input-bordered input w-[100%]`} name={key} value={value} onChange={handleInputChange} />
                  </label>
                );
              }
              return null;
            })}
          </div>
        </div>
        <button className="btn mx-auto w-fit" onClick={handleNext}>
          Proceed to payment
        </button>
      </div>
    </div>
  );
}

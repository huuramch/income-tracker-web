import { Icon } from "@/icons/geldicon";
import React, { useState } from "react";
import HorizontalLinearStepper from "../component/stepper";
import { Money } from "@/icons/geldmoney";

const Currency = () => {
  const [value, setValue] = useState("");
  const options = [
    { label: "MNT - Mongolian Tugrik"},
    { label: "JPY - JAPANESE YEN"},
    { label: "EGP - Egyptian Pound"},
  ];
  function handleSelect(event: { target: { value: string }; }) {
    setValue(event.target.value);
  }
  return (
    <div>
      <div className="icon">
        <Icon />
        <HorizontalLinearStepper />
      </div>
      <div className="container">
        <div className="money">
          <Money />
        </div>
        <h1>Select base currency</h1>
        <div className="label">
          <select className="form-select" onChange={handleSelect}>
            {options.map((option, index) => (
              <option key={index}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {value}
        <div className="Base">
          <p>
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one
          </p>
          <button className="btn2">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Currency;

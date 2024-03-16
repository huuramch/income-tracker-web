import React, { useState } from "react";
import HorizontalLinearStepper from "../component/stepper";
import { Coin } from "@/icons/geldcoin";
import { Icon } from "@/icons/geldicon";

const Balance = () => {
  const [email, setEmail] = useState('');
//   function handleSelect (event: { target: { value: string }; }) {
//     setValue(event.target.value);
//   }
  return (
    <div>
      <div className="icon">
        <Icon />
        <HorizontalLinearStepper />
      </div>
      <div className="container">
        <div className="money">
          <Coin />
        </div>
        <h1>Set up your cash Balance</h1>
        <div className="label">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="Base">
          <p>
          How much cash do you have in your wallet?
          </p>
          <button className="btn2">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Balance;

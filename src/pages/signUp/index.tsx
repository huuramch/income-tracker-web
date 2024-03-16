import React, { useState } from "react";
import axios from "axios";
import { Icon } from "@/icons/geldicon";
import Link from "next/link";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://income-tracker-service-23ay.onrender.com/signUp",
        {
          userName: name,
          email: email,
          password: password,
        }
      );
      console.log(response);
      alert("Successfully signed up");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up. Please try again.");
    }
  };

  return (
    <div className="main">
    <div className="container1">
      <div className="container2">
        <Icon />
        <h1>Create Geld Account</h1>
        <p>Sign up below to create your Wallet account</p>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirm-password"></label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Re-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="btn" onClick={() => handleSubmit()}>
          Sign up
        </button>
        <div className="register-link">
          <p>
            Already have account? <Link href='/login'>log-in</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUpForm;
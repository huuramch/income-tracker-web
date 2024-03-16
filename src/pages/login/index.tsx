import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Icon } from '@/icons/geldicon';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const res = await axios.post("https://income-tracker-service-23ay.onrender.com/login", { email: email, password: password });
    console.log("responseeeee =====>", res);
    if (res.status === 200) {
      localStorage.setItem("user", "true");
      localStorage.setItem('userId', res.data);
      router.push("/");
    }
  };

  return (
    <div className='main'>
    <div className='container1'>
      <div className='container2'>
        <Icon/>
        <h1>Welcome back</h1>
        <p>Welcome back, Please enter your details</p>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn' onClick={() => handleSubmit()}>Log in</button>
        <div className="register-link">
          <p>Dont have account? <Link href="/signUp">Sign up</Link></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
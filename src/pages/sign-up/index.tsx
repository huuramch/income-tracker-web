// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUpForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/signUp', {
//         name: name,
//         email: email,
//         password: password,
//       });
//       console.log(response);
//       alert('Successfully signed up');
//     } catch (error) {
//       console.error('Error signing up:', error);
//       alert('Error signing up. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={() => handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <label htmlFor="confirm-password">Re-enter Password</label>
//       <input
//         type="password"
//         id="confirm-password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />

//       <button type="submit">Sign up</button>
//     </form>
//   );
// };

// export default SignUpForm;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signup } from '../api/auth';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './Signup.css';

// const B2BSignup = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [address, setAddress] = useState('');
//   const [aadhaar, setAadhaar] = useState(null);
//   const [pan, setPan] = useState(null);
//   const [gumastha, setGumastha] = useState(null);
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleFileChange = (setter) => (e) => {
//     setter(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation for all fields
//     if (
//       !fullName || 
//       !email || 
//       !phoneNumber || 
//       !companyName || 
//       !address || 
//       !aadhaar || 
//       !pan || 
//       !gumastha || 
//       !password || 
//       !confirmPassword
//     ) {
//       alert('Please fill out all fields and upload all required documents.');
//       return;
//     }

//     // Validate confirm password
//     if (password !== confirmPassword) {
//       alert('Passwords do not match. Please check and try again.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('username', fullName);
//     formData.append('email', email);
//     formData.append('phone', phoneNumber);
//     formData.append('companyName', companyName);
//     formData.append('address', address);
//     formData.append('aadhaar', aadhaar);
//     formData.append('pan', pan);
//     formData.append('gumastha', gumastha);
//     formData.append('password', password);

//     try {
//       const response = await signup(formData);
//       if (response.ok) {
//         alert('Signup successful');
//         navigate('/login'); // Navigate to login after successful signup
//       } else {
//         alert(`Signup failed: ${response.message}`);
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       alert('Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>B2B Sign Up</h2>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Company Name"
//           value={companyName}
//           onChange={(e) => setCompanyName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Company Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         ></textarea>
//         <label>Aadhaar Upload:</label>
//         <input type="file" accept="image/*" onChange={handleFileChange(setAadhaar)} required />
//         <label>PAN Upload:</label>
//         <input type="file" accept="image/*" onChange={handleFileChange(setPan)} required />
//         <label>Gumastha Upload:</label>
//         <input type="file" accept="image/*" onChange={handleFileChange(setGumastha)} required />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//       <p>Already have an account? <Link to="/login">Log In</Link></p> {/* Changed to Link */}
//     </div>
//   );
// };

// export default B2BSignup;

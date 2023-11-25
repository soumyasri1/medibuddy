// Signup.js
import React, { useState } from "react";
import { auth, firestore } from "./firebase";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async () => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // Save additional user information to Firestore
      await firestore.collection("users").doc(user.uid).set({
        username,
        email,
      });

      alert("Signup successful. Please login.");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleSignup}>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

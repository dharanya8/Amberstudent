import React, { useState } from "react";
import Dashboard from "./Dashbord";
function Login({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 const handleLogin = () => {
  setError("");
  const allowedPassword = "dharan123";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    setError("Enter a valid email address");
    return;
  }

  if (password !== allowedPassword) {
    setError("Enter the correct password");
    return;
  }
  localStorage.setItem("isLoggedIn", "true");
  setLoggedIn(true);
};



  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100 bg-success"
    >
      <div className="p-4 bg-white rounded shadow" style={{ minWidth: "300px" }}>
        <h3 className="text-center mb-3">Login</h3>
        <input
          type="email"
          placeholder="Enter a valid email *"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Enter the Password *"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
        />
        {error && <p className="text-danger">{error}</p>}
        <button 
          className=" btn bg-success w-100" 
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;

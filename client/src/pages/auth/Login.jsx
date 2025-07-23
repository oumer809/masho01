import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate()// For displaying error messages
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      // Assuming a login endpoint like /login
      const response = await axios.post(
        "https://reimagined-space-meme-7vw5v94gw4wjhrvwv-5555.app.github.dev/users/login",
        { email, password }
      );

      // Assuming successful login returns a token or user data
      if (response.status === 201) {
        // Handle successful login (e.g., store token, redirect
        console.log("Login successful:", response.data); 
        navigate('/')// Redirect to a protected route or update UI
      } else {
        setError("Invalid credentials. Please try again.");
        console.log(response.data)
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(
        error.response?.data?.message ||
          "An error occurred during login. Please try again."
      );
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>
      <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
        type="email"
        placeholder="Email"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
        type="text"
        placeholder="Password"
        required
      />

      <button className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">
        Login
      </button>

      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link to="/auth/register" className="text-blue-500 underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default Login;

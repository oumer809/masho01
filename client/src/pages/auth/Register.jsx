import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const userData = { name, email, password };
      const res = await axios.post(
        "https://reimagined-space-meme-7vw5v94gw4wjhrvwv-5555.app.github.dev/users/register",
        userData
      ); // Changed to POST
      if (res.status === 201) {
        console.log("user register successfully!"); // Clear the form setTitle('');
         navigate('/auth/login')
        setName("");
        setEmail("");
        setPassword("");
      } else {
        console.log("Failed to register. Please try again.");
        console.log("Invalid data or server error");
      }
    } catch (error) {
      console.log("An error occurred while registering.");
      console.error(
        "Error registering user:",
        error.response?.data?.message || error.message
      );
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Register
      </h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
        type="text"
        placeholder="name"
        required
      />
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

      <button
        type="submit"
        className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium"
      >
        Create Account
      </button>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link to={"/auth/login"} className="text-blue-500 underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;

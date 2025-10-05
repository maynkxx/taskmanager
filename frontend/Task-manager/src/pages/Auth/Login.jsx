// frontend/Task-Manager/src/pages/Auth/Login.jsx
import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();
    // API Call logic will go here
    console.log("Attempting to log in with:", { email, password }); 
  };

  return (
    <AuthLayout>
      <div className="lg:w-1/2 w-3/4 md:w-full flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-15px] mb-6">
          Please enter your details to log in
        </p>
        
        {/* START OF FORM JSX */}
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          
          {/* Error Display (if applicable) */}
          {error && (
            <div className="mb-4 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>

        {/* Link to Registration Page */}
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account? 
          <span onClick={() => navigate('/signup')} className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium ml-1">
            Sign Up
          </span>
        </p>
        {/* END OF FORM JSX */}

      </div>
    </AuthLayout>
  );
};

export default Login;
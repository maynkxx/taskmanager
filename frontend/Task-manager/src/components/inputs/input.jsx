// frontend/Task-Manager/src/components/inputs/Input.jsx
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"; // Assuming these are the correct icons and library

const Input = ({ value, onChange, label, placeholder, type }) => {
  // Local state to manage the visibility of the password input
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col mb-4 w-full">
      {/* Label */}
      <label className="text-sm font-medium text-slate-800 mb-1">{label}</label>

      <div className="input-box flex items-center border border-gray-300 rounded-md p-2">
        {/* Input Field */}
        <input
          // Determine the actual type: 'text' if showPassword is true, otherwise the original 'password' or 'email' type
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent outline-none border-none text-sm"
        />

        {/* Password Show/Hide Toggle (Only for password type inputs) */}
        {type === "password" && (
          <div className="ml-2">
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-primary cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
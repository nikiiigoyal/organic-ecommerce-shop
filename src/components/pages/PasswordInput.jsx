/* eslint-disable react/prop-types */
import { useState } from 'react';

function PasswordInput({
  value,
  onChange,
  placeholder = 'Password',
  className = '',
}) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="relative">
        <input
          className={`w-full border border-[#E6E6E6] text-gray-700 p-3 pr-10 rounded-md ${className}`}
          placeholder={placeholder}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
        />
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          <span className="material-symbols-outlined">
            {showPassword ? 'visibility_off' : 'visibility'}
          </span>
        </span>
      </div>
    </>
  );
}
export default PasswordInput;

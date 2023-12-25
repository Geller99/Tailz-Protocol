"use client"
import React from "react";
import { UserData } from "../page";

interface SignInProps {
  userData: UserData;
  onSubmit: any;
  handleChange: any;
  setErrors?: React.Dispatch<React.SetStateAction<any>>;
  errors?: string;
}

const isEmail = (input: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
};

// const isUsername = (input: string) => {
//   const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
//   return usernameRegex.test(input);
// };

const SignInForm: React.FC<SignInProps> = ({
  userData,
  onSubmit,
  handleChange,
}) => {
  
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleInput = (e: any) => {
    isEmail(e.target.value)
      ? handleChange("email", e.target.value)
      : handleChange("username", e.target.value);
  };


  

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        placeholder="Username or Email"
        type="text"
        onChange={(e) => handleInput(e)}
      />
      <input
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <button onClick={togglePasswordVisibility} type="button">
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      <button type="submit">Sign in</button>
    </form>
  );
};

export default SignInForm;

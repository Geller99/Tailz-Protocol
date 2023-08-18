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

const isUsername = (input: string) => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
  return usernameRegex.test(input);
};

const SignInForm: React.FC<SignInProps> = ({
  userData,
  onSubmit,
  handleChange,
}) => {
  
  const handleInput = (e: any) => {
    if (isEmail(e.target.value)) {
      handleChange(userData.email, e.target.value);
    } else if (isUsername(e.target.value)) {
      handleChange(userData.username, e.target.value);
    }
  };

  return (
    <form>
      <input
        placeholder="Username or Email"
        type="text"
        onChange={handleInput}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={handleChange}
        value={userData.password}
      />

      <button onClick={onSubmit}>Sign in</button>
    </form>
  );
};

export default SignInForm;

"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Auth } from "aws-amplify";
import useAuthStore from "../../../store/auth/user";

const Confirmation = () => {
  const [errors, setErrors] = useState('');
  const [authcode, setAuthcode] = useState('');

  const router = useRouter();

  // Retrieve user data from the Zustand store
  const user = useAuthStore((state) => state.user);
  const { login } = useAuthStore(state => ({ login: state.login }));

  // Check if user data exists, if not, redirect or handle accordingly
  useEffect(() => {
    if (!user || !user.email || !user.password) {
      // If there's no user data, redirect them to the signup page
      router.replace('/signup');
      // or set an error message to inform the user
      setErrors('No valid user data found. Please sign up.');
    }
  }, [user, router]);

  const confirmSignup = async (event) => {
    event.preventDefault();
    if (!authcode || !user?.email || !user?.password) {
      // Handle the error state here, e.g., by setting an error message
      setErrors('Please enter all required fields.');
      return;
    }

    try {
      await Auth.confirmSignUp(user.email, authcode);
      await Auth.signIn(user.email, user.password);
      login(user);
      alert("Welcome to Tailz!")
      // Redirect to the next page after confirmation and sign in
      router.push('/feed');
    } catch (err) {
      console.error(err);
      setErrors(err.message);
    }
  };

  const onAuthCodeChange = (e) => {
    setAuthcode(e.target.value);
  };

  // Render the form or error message
  return (
    <form onSubmit={confirmSignup}>
      <h1> Check your email for Tailz Confirmation! </h1>
      <input
        type="text"
        value={authcode}
        onChange={onAuthCodeChange}
        required
      />
      <button type="submit"> Confirm Signup </button>
      {errors && <p>{errors}</p>}
    </form>
  );
};

export default Confirmation;

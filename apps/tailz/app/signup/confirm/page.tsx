"use client";
import React from "react";

/**
 *
 * @confirmation page
 * confirms user access code and sends them to the next page
 */

const Confirmation = () => {
  const confirmSignup = (e: any) => {
    e.preventDefault();
    // try {
    //     await await Auth.confirmSignUp(email, authCode)
    //     await Auth.signIn(email, password)
    //     setUiState('signedIn')
    //     checkUser() // check if authenticated user
    //     createUserProfile()  // create user in db
    //     route user to home page
    // } catch (err) { console.log({ err })}
  };

  return (
    <form onSubmit={(e) => confirmSignup(e)}>
      <h1> Check your email for Tailz Confirmation! </h1>

      <input type="number" required={true} />
      <button type="submit"> Confirm Signup </button>
    </form>
  );
};
export default Confirmation;

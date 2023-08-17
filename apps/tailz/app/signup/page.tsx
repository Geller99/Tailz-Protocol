"use client";

/**
 * @dev created this component to enable user signups in tailz
 * @dev uses AWS Cognito for decentralized Auth
 */

import React from "react";
import SignupForm from "./components/form/form";
import { Auth } from "aws-amplify";
/**
 * Flow -> User can signup via federated login or via username, email and password
 *
 * https://temp-mail.org/
 *
 */

const Signup = () => {
  const [step, setStep] = React.useState<number>(1);
  const [errors, setErrors] = React.useState<string>("");

  const [userData, setUserData] = React.useState({
    username: "",
    dob: "",
    password: "",
    email: "",
    analyticsConsent: false,
  });

  //TODO -> implement in final submit
  
  //   const onSubmit = async (event:any) => {
  //     event.preventDefault();
  //     setErrors('')
  //     try {
  //       const { user } = await Auth.signUp({
  //         username: userData.username,
  //         password: userData.password,
  //         attributes: {
  //           email: userData.email,
  //           preferred_username: userData.username,
  //         },
  //         autoSignIn: { // optional - enables auto sign in after user is confirmed
  //           enabled: true,
  //         }
  //       });
  //       console.log(user);
  //       window.location.href = `/confirm?email=${userData.email}`
  //     } catch (error) {
  //         console.log(error);
  //         setErrors(error.message);
  //     }
  //     return false
  //   }

  const onSubmit = () => {
    return null;
  };

  const renderSignup = () => {
    return (
      <div>
        <SignupForm
          userData={userData}
          setUserData={setUserData}
          step={step}
          setStep={setStep}
          onSubmit={onSubmit}
        />
      </div>
    );
  };

  return renderSignup();
};

export default Signup;

"use client";

/**
 * @dev created this component to enable user signups in tailz
 * @dev uses AWS Cognito for decentralized Auth
 */

import React from "react";
import SignupForm from "./components/form/form";
import { useRouter } from "next/navigation";
import { Auth } from "aws-amplify";
import Link from "next/link";

/**
 * Flow -> User can signup via federated login or via username, email and password
 *
 * https://temp-mail.org/
 *
 */

export interface UserProps {
  username: string;
  dob: string;
  password: string;
  email: string;
  analyticsConsent: boolean;
}

export interface errors {
  body: string;
}

const Signup = () => {
  const [step, setStep] = React.useState<number>(1);
  const [errors, setErrors] = React.useState<string>("");
  const router = useRouter();

  const [userData, setUserData] = React.useState<UserProps>({
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
  //       route.push('../signup/components/confirm/page.tsx') -> route to confirmation page
  //       window.location.href = `/confirm?email=${userData.email}`
  //     } catch (error) {
  //         console.log(error);
  //         setErrors(error.message);
  //     }
  //     return false
  //   }

  const onSubmit = (event: any) => {
    event.preventDefault();
    setErrors("");
    router.push("/signup/confirm");
    console.log("Congrats! Lets get you to the confirmation page");
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

        <Link href={"/login"}> Already Tailzy? Sign in here! </Link>
      </div>
    );
  };

  return renderSignup();
};

export default Signup;

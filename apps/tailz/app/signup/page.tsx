"use client";

/**
 * @dev created this component to enable user signups in tailz
 * @dev uses AWS Cognito for decentralized Auth
 */

import React, { useCallback } from "react";
import SignupForm from "./components/form/form";
import { useRouter, useSearchParams } from "next/navigation";
import { Auth } from "aws-amplify";
import Link from "next/link";
import useAuthStore from "../../store/auth/user";

/**
 * Flow -> User can signup via federated login or via username, email and password
 *
 * https://temp-mail.org/
 *
 */

export interface UserProps {
  username?: string;
  dob?: string;
  password?: string;
  email?: string;
  analyticsConsent?: boolean;
}

export interface errors {
  body: string;
}

const Signup = () => {
  const [step, setStep] = React.useState<number>(1);
  const [errors, setErrors] = React.useState<string>("");
  const router = useRouter();
  const searchParams:any = useSearchParams()!;
  const setUser = useAuthStore((state) => state.setUser);

  const [userData, setUserData] = React.useState<UserProps>({
    username: "",
    dob: "",
    password: "",
    email: "",
    analyticsConsent: false,
  });
  

    const onSubmit = async (event:any) => {
      event.preventDefault();
      setErrors('')
      try {
        setUser(userData);
        const { user } = await Auth.signUp({
          username: userData.email,
          password: userData.password,
          attributes: {
            email: userData.email,
            preferred_username: userData.username,
          },
          autoSignIn: { // optional - enables auto sign in after user is confirmed
            enabled: true,
          }
        });
        console.log("Authed User", user);
        router.push('/signup/confirm' + '?' + createQueryString("email", userData.email))
      } catch (error) {
          console.log(error);
          setErrors(error.message);
      }
      return false
    }


    const createQueryString = useCallback(
      (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
    )
 
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

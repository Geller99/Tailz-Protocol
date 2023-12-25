"use client";
import React from "react";
import SignInForm from "./form/form";
import FederatedSignin from "./federated/federated";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuthStore from "../../store/auth/user";
import { Auth } from "aws-amplify";

/**
 * @login
 *  -> This component recieves user input and signs into cognito
 *  -> this component routes user to feed after login is complete
 *  -> this component is responsible for sending JWT to Crater server and updating user authenticated state
 */

export type UserData = {
  username?: string;
  password: string;
  email?: string;
};

const SignIn = () => {
  const [errors, setErrors] = React.useState<string>("");
  const router = useRouter();

  const [userData, setUserData] = React.useState<UserData>({
    username: "",
    password: "",
    email: "",
  });

  const { login } = useAuthStore(state => ({ login: state.login }));

  const handleChange = (field: string, value: any) => {
    // console.log(`Field: ${field}, Value: ${value}`);
    setUserData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
  };

  
  const onSubmit = async (event) => {
      setErrors("");
      event.preventDefault();

      try {
        await Auth.signIn(userData.email, userData.password)
        .then((user) => {
          console.log("user signed in", user);
          login({username: user.attributes.preferred_username, email: user.attributes.email});
          localStorage.setItem("access_token", user.signInUserSession.accessToken.jwtToken)
        })        
        alert("Welcome to Tailz!")
        router.push('/feed');
        
      } catch (err) {
        console.error(err);
        setErrors(err.message);
      }
      return false;
    };

  return (
    <div>
      <FederatedSignin />
      <SignInForm
        userData={userData}
        onSubmit={onSubmit}
        handleChange={handleChange}
        setErrors={setErrors}
        errors={errors}
      />
      <div>
        Don't have an account?
        <Link href="/signup"> Sign up </Link>
      </div>
      <div>
        Forgot Password?
        <Link href="/recover"> Recover </Link>
      </div>
    </div>
  );
};

export default SignIn;

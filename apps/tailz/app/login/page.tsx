"use client";
import React from "react";
import SignInForm from "./form/form";
import FederatedSignin from "./federated/federated";
import Link from "next/link";
// import { Auth } from "aws-amplify";
import { useRouter } from "next/navigation";
import useAuthStore from "../../store/user/user";

/**
 * @login
 *  -> This component recieves user input and signs into cognito
 *  -> this component routes user to feed after login is complete
 *  -> this component is responsible for sending JWT to Crater server and updating user authenticated state
 */

export type UserData = {
  username: string;
  password: string;
  email: string;
};

const SignIn = () => {
  const [errors, setErrors] = React.useState<string>("");
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const myRouter = useRouter();

  //TODO -> adjust input for phone or username
  const [userData, setUserData] = React.useState<UserData>({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (field: string, value: any) => {
    console.log(`Field: ${field}, Value: ${value}`);
    setUserData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // TODO -> Setup amplify sign-in flow
  //   const onSubmit = async (event) => {
  //     setErrors("");
  //     event.preventDefault();
  //     Auth.signIn(userData.email, userData.password)
  //       .then((user) => {
  //         console.log("user", user);
  //         //   localStorage.setItem("access_token", user.signInUserSession.accessToken.jwtToken)
  //         window.location.href = "/";
  //       })
  //       .catch((error) => {
  //         if (error.code == "UserNotConfirmedException") {
  //           window.location.href = "/confirm";
  //         }
  //         setErrors(error.message);
  //       });
  //     return false;
  //   };

  const onSubmit = (e: any) => {
    e.preventDefault();
    myRouter.push("/feed");
    return null;
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

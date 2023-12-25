"use client";
import Link from "next/link";
import React from "react";
import { Auth } from "aws-amplify";
import RecoverForm from "./form/form";

/**
 *
 * @returns Recovery Form for recovering user password via email link
 */

const RecoverAccount = () => {
  const [errors, setErrors] = React.useState<string>("");
  const [authcode, setAuthcode] = React.useState("");
  const [deliveredStatus, setdeliveredStatus] = React.useState(null);
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
    passwordAgain: "",
    email: "",
  });

  const onAuthCodeChange = (e) => {
    setAuthcode(e.target.value);
  };

  const handleChange = (field: string, value: any) => {
    setUserData((state: any) => ({
      ...state,
      [field]: value,
    }));
  };

  const onsubmit_send_code = async (event) => {
    event.preventDefault();
    setErrors("");
    await Auth.forgotPassword(userData.username)
      .then((data) => {
        console.log("Password Reset Data", data)
        setdeliveredStatus(data)
      })
      // .catch((err) => handleChange("errors", err.message));

    return false;
  };

  const onsubmit_confirm_code = async (event) => {
    event.preventDefault();
    setErrors("");
    if (userData.password === userData.passwordAgain) {
      await Auth.forgotPasswordSubmit(
        userData.username,
        authcode,
        userData.password
      )
        // .then((data) => handleChange("formState", "success"))
        // .catch((err) => handleChange("errors", err.message));
    } else {
      // handleChange("errors", "Passwords do not match");
    }

    return false;
  };

  return (
    <div>
      <p> Account Recovery Page </p>
      <RecoverForm
        sendCode={onsubmit_send_code}
        confirmCode={onsubmit_confirm_code}
        handleChange={handleChange}
        onAuthCodeChange={onAuthCodeChange}
        deliveredStatus={deliveredStatus}
      />
      <Link href={"/login"}> Back to Login </Link>
    </div>
  );
};

export default RecoverAccount;

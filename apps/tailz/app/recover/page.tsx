import Link from "next/link";
import React from "react";
import { Auth } from "aws-amplify";
import RecoverForm from "./form/form";

const RecoverAccount = () => {
  const [errors, setErrors] = React.useState<string>("");

  //TODO -> adjust input for phone or username
  // TODO -> Adjust state breakdown
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
    passwordAgain: "",
    code: "",
    formState: "",
    errors: "",
    email: "",
  });

  const handleChange = (field: string, value: any) => {
    setUserData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const onsubmit_send_code = async (event) => {
    event.preventDefault();
    setErrors("");
    Auth.forgotPassword(userData.username)
      .then((data) => handleChange("formState", "confirm_code"))
      .catch((err) => handleChange("errors", err.message));
    return false;
  };
  const onsubmit_confirm_code = async (event) => {
    event.preventDefault();
    setErrors("");
    if (userData.password == userData.passwordAgain) {
      Auth.forgotPasswordSubmit(
        userData.username,
        userData.code,
        userData.password
      )
        .then((data) => handleChange("formState", "success"))
        .catch((err) => handleChange("errors", err.message));
    } else {
      handleChange("errors", "Passwords do not match");
    }
    return false;
  };

  return (
    <div>
      <p>Account Recovery Page</p>
      <RecoverForm />
      <Link href={"/signin"}> Back to Login </Link>
    </div>
  );
};

export default RecoverAccount;

"use client";
import React, { useEffect } from "react";
import { UserProps } from "../../page";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../../../services/validators";
import useFormStore, { SetFormErrors } from "../../services/formStore";

/**
 * @personalInfo component
 *  -> implement form validation functions for each field
 *  -> implement server side or client side validation for loading fields based on db values
 *  -> Render info based on form steps
 *  -> Implement interfaces
 */

interface PersonalInfoStepProps {
  userData: UserProps;
  handleChange: (field: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  step: number;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  userData,
  handleChange,
  nextStep,
  prevStep,
  step,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const formErrors = useFormStore((state) => state.formErrors);
  const setFormError: SetFormErrors = useFormStore(
    (state) => state.setFormErrors
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (e: any) => {
    const value = e.target.value;
    const validationError = validateUsername(value);
    if (value.length > 1) {
      setFormError("usernameErrors", validationError);
    } else {
      setFormError("usernameErrors", "");
    }
    handleChange("username", value);
    // implement username server/cognito validation, check for taken usernames in DB
  };

  const handlePasswordChange = (e: any) => {
    const value = e.target.value;
    // const validationError = validatePassword(value);
    // if (value.length > 1) {
    //   setFormError("passwordErrors", validationError);
    // } else {
    //   setFormError("passwordErrors", "");
    // }
    handleChange("password", value);

    // TODO: implement server/cognito validation
  };

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    const validationError = validateEmail(value);
    if (value.length > 1) {
      setFormError("emailErrors", validationError);
    } else {
      setFormError("emailErrors", "");
    }
    handleChange("email", value);
    // TODO: implement username server validation, check for taken emails in DB
  };

  const handleDobChange = (e: any) => {
    const value = e.target.value;
    // const validationError = validateDateOfBirth(value);
    // if (value.length > 1) {
    //   setFormError("dobErrors", validationError);
    // } else {
    //   setFormError("dobErrors", "");
    // }
    handleChange("dob", value);
  };

  return (
    <div>
      
      {step && step === 3 ? (
        <h2> Step {step}: You're all set! </h2>
      ) : (
        <h2> Step {step}: Personal Information </h2>
      )}

      <input
        type="text"
        placeholder="username"
        value={userData.username}
        onChange={(e) => handleUsernameChange(e)}
        // required={true}
      />
      {formErrors.usernameErrors && (
        <div style={{ color: "red" }}>{formErrors.usernameErrors}</div>
      )}

      <input
        type="date"
        value={userData.dob}
        onChange={(e) => handleDobChange(e)}
        // required={true}
      />
      {formErrors.dobErrors && (
        <div style={{ color: "red" }}>{formErrors.dobErrors}</div>
      )}

      
      <input
        type={showPassword ? "text" : "password"}
        value={userData.password}
        onChange={(e) => handlePasswordChange(e)}
        // required={true}
      />
      <button onClick={togglePasswordVisibility} type="button">
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
      {formErrors.passwordErrors && (
        <div style={{ color: "red" }}>{formErrors.passwordErrors}</div>
      )}
      <input
        type="email"
        value={userData.email}
        placeholder="enter email"
        onChange={(e) => handleEmailChange(e)}
        // required={true}
      />
      {formErrors.emailErrors && (
        <div style={{ color: "red" }}>{formErrors.emailErrors}</div>
      )}
      
     
      {step !== 1 ? <button onClick={prevStep}>Back</button> : <></>}
      {step !== 3 ? <button onClick={nextStep}>Next</button> : <></>}
      {step === 3 ? <button type="submit"> Submit </button> : <></>}
    </div>
  );
};

export default PersonalInfoStep;

"use client";
import React from "react";
import PersonalInfoStep from "../personal/personal";
import Preferences from "../preferences/preferences";
import { UserProps } from "../../page";
import useFormStore from "../../services/formStore";

interface SignupProps {
  userData: UserProps;
  setUserData: React.Dispatch<React.SetStateAction<UserProps>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: any;
}

export interface FormErrorProps {
  usernameErrors: string;
  passwordErrors: string;
  dobErrors: string;
  emailErrors: string;
  analyticsConsentErrors?: any;
}

const SignupForm: React.FC<SignupProps> = ({
  userData,
  setUserData,
  step,
  setStep,
  onSubmit,
}) => {
  const formErrors = useFormStore((state) => state.formErrors);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (field: string, value: any) => {
    console.log("Handle Change Log ", `Field: ${field}, Value: ${value}`);
    setUserData((prevData: UserProps) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const validateFormSubmit = (e: any) => {
    e.preventDefault();
    // check for form errors and prevent form submit
    if (
      formErrors.usernameErrors ||
      formErrors.dobErrors ||
      formErrors.passwordErrors ||
      formErrors.emailErrors
    ) {
      alert("Fix form errors");
      return;
    } else return onSubmit(e);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoStep
            userData={userData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 2:
        return (
          <Preferences
            userData={userData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <PersonalInfoStep
            userData={userData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      default:
        return null;
    }
  };

  return <form onSubmit={(e) => {validateFormSubmit(e)}}>{renderStep()}</form>;
};

export default SignupForm;

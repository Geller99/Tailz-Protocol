import { UserProps } from "../page";
import { FormErrorProps } from "./../components/form/form";
import { create } from "zustand";

export type SetFormErrors = (name: string, value: string) => void;
export type SetUserData = (name: string, value: string) => void;

interface FormState {
  formErrors: FormErrorProps;
  setFormErrors: SetFormErrors;
  userData: UserProps;
  setUserData: SetUserData;
}

const useFormStore = create<FormState>()((set) => ({
  userData: {
    username: "",
    dob: "",
    password: "",
    email: "",
    analyticsConsent: false,
  },

  setUserData: (field: string, value: string) => {
    console.log(`Field: ${field}, Value: ${value}`);
    set((state) => ({
      formErrors: {
        ...state.formErrors,
        [field]: value,
      },
    }));
  },

  formErrors: {
    usernameErrors: "",
    dobErrors: "",
    passwordErrors: "",
    emailErrors: "",
    analyticsConsentErrors: "",
  },

  setFormErrors: (name: string, value: string) => {
    set((state) => ({
      formErrors: {
        ...state.formErrors,
        [name]: value,
      },
    }));
  },
}));

export default useFormStore;

import { TailzGlobalType } from "../../../../types/global";
import PersonalInfoStep from "../personal/personal";
import Preferences from "../preferences/preferences";

interface SignupProps {
  userData: any;
  setUserData: React.Dispatch<React.SetStateAction<any>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: any
}

const SignupForm: React.FC<SignupProps> = ({
  userData,
  setUserData,
  step,
  setStep,
  onSubmit
}) => {

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (field: string, value: any) => {
    setUserData((prevData: TailzGlobalType) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoStep
            userData={userData}
            onChange={() => {}}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 2:
        return (
          <Preferences
            userData={userData}
            onChange={() => {}}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
        // case 3:
        //     return (
        //       <FinalStep
        //         userData={userData}
        //         onChange={() => {}}
        //         onSubmit={() => {}}
        //       />
        //     );
      // Add more cases for additional steps if needed
      default:
        return null;
    }
  };

  return <form>{renderStep()}</form>;
};

export default SignupForm;

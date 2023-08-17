import React from 'react';

interface PersonalInfoStepProps {
  userData: any;
  onChange: (field: string, value: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ userData, onChange, nextStep, prevStep }) => {
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      {/* Render input fields for username, date of birth, password, and email */}
      <button onClick={nextStep}>Next</button>
      <button onClick={prevStep}>Back</button>
    </div>
  );
};

export default PersonalInfoStep;
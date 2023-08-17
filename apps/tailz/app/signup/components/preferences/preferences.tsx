

import React from 'react';

interface PreferencesStepProps {
  userData: any;
  onChange: (field: string, value: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const Preferences: React.FC<PreferencesStepProps> = ({ userData, onChange, nextStep, prevStep }) => {
  return (
    <div>
      <h2>Step 1: Preferences </h2>
      {/* Render input fields for username, date of birth, password, and email */}
      <button onClick={nextStep}>Next</button>
      <button onClick={prevStep}>Back</button>
    </div>
  );
};

export default Preferences;
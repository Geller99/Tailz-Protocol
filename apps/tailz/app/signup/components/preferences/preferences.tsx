

import React, { useEffect } from 'react';

interface PreferencesStepProps {
  userData: any;
  handleChange: (field: string, value: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const Preferences: React.FC<PreferencesStepProps> = ({ userData, handleChange, nextStep, prevStep }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  
  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked;  // store new value to avoid async bug
    setIsChecked(newCheckedValue); // this is async
    handleChange('analyticsConsent', newCheckedValue); // Pass the new value
  };
  
  return (
    <div>
      <h2>Step 2: Preferences </h2>
       
      <label>
        <input
          type="checkbox"
          value="option"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        By ticking this box, you confirm we own your pretty little tail!
      </label>
      <button onClick={nextStep}>Next</button>
      <button onClick={prevStep}>Back</button>
    </div>
  );
};

export default Preferences;
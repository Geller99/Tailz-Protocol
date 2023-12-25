import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignupForm from './SignupForm';

describe('SignupForm', () => {
  const userData = {
    // Initialize with some dummy data for testing
    username: 'testuser',
    password: 'testpassword',
    dob: '1990-01-01',
    email: 'test@example.com',
  };

  const setUserData = jest.fn();
  const setStep = jest.fn();
  const onSubmit = jest.fn();

  it('renders PersonalInfoStep when step is 1', () => {
    const { getByText } = render(
      <SignupForm
        userData={userData}
        setUserData={setUserData}
        step={1}
        setStep={setStep}
        onSubmit={onSubmit}
      />
    );

    expect(getByText('Personal Information')).toBeInTheDocument();
  });

  it('renders Preferences when step is 2', () => {
    const { getByText } = render(
      <SignupForm
        userData={userData}
        setUserData={setUserData}
        step={2}
        setStep={setStep}
        onSubmit={onSubmit}
      />
    );

    expect(getByText('Preferences')).toBeInTheDocument();
  });

  it('calls handleChange when a field is changed', () => {
    const { getByLabelText } = render(
      <SignupForm
        userData={userData}
        setUserData={setUserData}
        step={1}
        setStep={setStep}
        onSubmit={onSubmit}
      />
    );

    fireEvent.change(getByLabelText('Username'), { target: { value: 'newusername' } });
    expect(setUserData).toHaveBeenCalledWith({ ...userData, username: 'newusername' });
  });

  it('calls nextStep when next button is clicked', () => {
    const { getByText } = render(
      <SignupForm
        userData={userData}
        setUserData={setUserData}
        step={1}
        setStep={setStep}
        onSubmit={onSubmit}
      />
    );

    fireEvent.click(getByText('Next'));
    expect(setStep).toHaveBeenCalledWith(2);
  });

  it('calls prevStep when prev button is clicked', () => {
    const { getByText } = render(
      <SignupForm
        userData={userData}
        setUserData={setUserData}
        step={2}
        setStep={setStep}
        onSubmit={onSubmit}
      />
    );

    fireEvent.click(getByText('Previous'));
    expect(setStep).toHaveBeenCalledWith(1);
  });

  it('calls onSubmit when form is submitted', () => {
    const { getByText } = render(
      <SignupForm
        userData={userData}
        setUserData={setUserData}
        step={1}
        setStep={setStep}
        onSubmit={onSubmit}
      />
    );

    fireEvent.submit(getByText('Submit'));
    expect(onSubmit).toHaveBeenCalled();
  });
});

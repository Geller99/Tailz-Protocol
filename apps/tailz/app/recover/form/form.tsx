"use client"
import React, { useState } from "react";
import Link from "next/link";

interface RecoveryPageProps {
  sendCode: () => boolean;
  confirmCode: () => boolean;
  handleChange: any;
}

const RecoverForm: any = ({sendCode, confirmCode, handleChange, onAuthCodeChange, deliveredStatus}) => {
  
  const [newPassword, setNewPassword] = useState('');
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleUsernameChange = (e: any) => {
    const value = e.target.value;
    handleChange("username", value);
  };

  const onPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };


  const confirmForm = () => {

    return <div>
       <input type="number" onChange={(e) => onAuthCodeChange(e)} placeholder="Enter code" />
      <input type="text" onChange={(e) => onPasswordChange(e)} placeholder="Enter New Password" />

      <button type="submit" onClick={confirmCode}> Confirm Code </button>
    </div>
  }


  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Username or email"
        onChange={(e) => handleUsernameChange(e)}
      />

      <button type="button" onClick={sendCode}> Send Recovery Code </button>

      { deliveredStatus ? confirmForm() : <></>}
    </form>
  );
};

export default RecoverForm;

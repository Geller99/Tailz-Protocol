import Link from "next/link";

interface RecoveryPageProps {
  sendCode: () => boolean;
  confirmCode: () => boolean;
  handleChange: any;
}

const RecoverForm: any = (sendCode, confirmCode, handleChange) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Username or email"
        onChange={(e) => handleChange("username", e.target.value)}
      />

      <button type="button"> Send Recovery Code </button>

      <input type="number" placeholder="Enter code" />

      <button type="submit"> Confirm Code </button>
    </form>
  );
};

export default RecoverForm;

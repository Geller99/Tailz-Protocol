import Link from "next/link";

const RecoverForm = () => {
  return (
    <form>
      <input type="text" placeholder="Enter Username or email"/>

      <button type="submit"> Send Recovery Code </button>
    </form>
  );
};

export default RecoverForm;

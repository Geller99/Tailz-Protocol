import { Auth } from "aws-amplify";



const FederatedSignin = () => {
  return (
    <div>
      <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>
        Sign in with Google
      </button>
      <button onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}>
        Sign in with Facebook
      </button>
    </div>
  );
};

export default FederatedSignin;
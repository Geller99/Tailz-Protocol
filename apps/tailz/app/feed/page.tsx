// import { Auth } from "aws-amplify";
"use client"
import React from "react";
import useAuthStore from "../../store/user/user";
import { useRouter } from "next/navigation";

const HomeFeed = () => {

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const myRouter = useRouter();
  const [user, setUser] = React.useState(null);

  // check if we are authenicated
  // const checkAuth = async () => {
  //   Auth.currentAuthenticatedUser({
  //     // Optional, By default is false.
  //     // If set to true, this call will send a
  //     // request to Cognito to get the latest user data
  //     bypassCache: false,
  //   })
  //     .then((user) => {
  //       console.log("user", user);
  //       return Auth.currentAuthenticatedUser();
  //     })
  //     .then((cognito_user) => {
  //       setUser({
  //         display_name: cognito_user.attributes.name,
  //         handle: cognito_user.attributes.preferred_username,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };

  // check when the page loads if we are authenicated
  React.useEffect(() => {
    //   loadData();
    // checkAuth();
    console.log("Auth Status", isAuthenticated);
  }, []);

  if (isAuthenticated) {
    return <div> Welcome to Tailz! </div>;
  } else {
    return (
      <div>
        Return to Login Page
        <button onClick= {() => myRouter.push('/login')}>Back to Login</button>
      </div>
    );
  }

};

export default HomeFeed;

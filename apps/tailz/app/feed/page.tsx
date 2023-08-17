import { Auth } from "aws-amplify";
import React from "react";

const HomeFeed = () => {
  // set a state
  const [user, setUser] = React.useState(null);

  // check if we are authenicated
  const checkAuth = async () => {
    Auth.currentAuthenticatedUser({
      // Optional, By default is false.
      // If set to true, this call will send a
      // request to Cognito to get the latest user data
      bypassCache: false,
    })
      .then((user) => {
        console.log("user", user);
        return Auth.currentAuthenticatedUser();
      })
      .then((cognito_user) => {
        setUser({
          display_name: cognito_user.attributes.name,
          handle: cognito_user.attributes.preferred_username,
        });
      })
      .catch((err) => console.log(err));
  };

  // check when the page loads if we are authenicated
  React.useEffect(() => {
    //   loadData();
    checkAuth();
  }, []);

  return <div> Welcome to Tailz! </div>;
};

export default HomeFeed;


"use client"
import React from "react";
import { Auth } from "aws-amplify";
import useAuthStore from "../../store/auth/user";
import { useRouter } from "next/navigation";
import HomeFeed from "./home/home";


const Feed = () => {
  const { isAuthenticated } = useAuthStore();
  const { login } = useAuthStore(state => ({ login: state.login }));
   
  const myRouter = useRouter();

  // load user feed 
  const loadData = async () => { 

    return ""
  }

  /**
   * check if user is authenticated
   * update user instance in context api
   * validate page via isAuthenticated prop
   */
  const checkAuth = async () => {
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((user) => {
        console.log("check Auth", user);
        return Auth.currentAuthenticatedUser();
      })
      .then((cognito_user) => {
        console.log("Authed User", cognito_user);
        login({
          username: cognito_user.attributes.username,
          dob: cognito_user.attributes.birthdate,
        });
      })
      .catch((err) => console.log("Cognito Error", err));
  };

  // check when the page loads if we are authenicated
  React.useEffect(() => {
    //   loadData();
    checkAuth();
    console.log("Auth Status", isAuthenticated);
  }, []);

  if (isAuthenticated) {
    return <HomeFeed/>
  } else {
    return (
      <div>
        Return to Login Page
        <button onClick= {() => myRouter.push('/login')}>Back to Login</button>
      </div>
    );
  }

};

export default Feed;

"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Amplify } from "aws-amplify";
import amplifyConfig from "../services/amplify";

const Home = () => {
  const [user, setUser] = React.useState(null);

  console.log('Amplify Configuration:', amplifyConfig);

  Amplify.configure(amplifyConfig);

  return (
    <div>
      <div>
        <button> Sign up with Google </button>
        <button> Sign up with Facebook </button>
        <button> Sign up with Apple </button>
      </div>
      <div>
        <button>
          <Link href="/signup">Create Tailz Account!</Link>{" "}
        </button>
      </div>
      <div>
        <button>
          <Link href="/login">Have an account? Sign in</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;

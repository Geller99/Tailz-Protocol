"use client";
import React from "react";
import Link from 'next/link';
// import { Amplify } from 'aws-amplify';
// import amplifyConfig from "../services/amplify";

const Home = () => {
  const [user, setUser] = React.useState(null);

  // setup amplify
  // Amplify.configure(amplifyConfig);

  return (
    <div>
      <div>
        <button> Signup with Google </button>
        <button> Signup with Facebook </button>
        <button> SIgnup with Apple </button>
      </div>
      <div>
        <button>
          <Link href="/signup">Create Tailz Account!</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;

"use client"
import React from "react";
import useAuthStore from "../../../store/auth/user";
import { Auth } from "aws-amplify";
import { useRouter } from "next/navigation";



const HomeFeed = () => {

    const myRouter = useRouter();
    const { isAuthenticated } = useAuthStore();
    const { logout } = useAuthStore(state => ({ logout: state.logout }));

    const signout = async () => {
        try {
            await Auth.signOut({global: true})
            localStorage.removeItem("access_token");
            // logout();
            alert('Successfully Signout...Oh no!')
            myRouter.push('/login')
        } catch (error) {
           alert('Signout Unsuccessful Buddy')
        }
    }

    const render = () => {
        return <div>
            <h1> Welcome to Tailz</h1>
            <button onClick={() => signout()}> Logout </button>
        </div>
    }


    return render();
}

export default HomeFeed
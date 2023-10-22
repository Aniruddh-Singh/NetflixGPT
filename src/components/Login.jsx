import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    function toggleSignIn() {
        setIsLoggedIn(!isLoggedIn);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background"
                />
            </div>
            <form className="absolute bg-black w-3/12 my-36 p-8 mx-auto left-0 right-0 bg-opacity-80 text-white rounded-lg ">
                <h1 className="text-4xl mb-4 font-bold">
                    {isLoggedIn ? "SignIn" : "SignUp"}
                </h1>
                {!isLoggedIn && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-2 w-full bg-gray-800"
                    />
                )}
                <input
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-2 w-full bg-gray-800"
                />
                <input
                    type="password"
                    placeholder="Password Address"
                    className="p-4 my-2 w-full bg-gray-800"
                />
                {!isLoggedIn && (
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="p-4 my-2 w-full bg-gray-800"
                    />
                )}
                <button className="p-4 my-4 items-center bg-red-700 w-full rounded-lg">
                    {isLoggedIn ? "SignIn" : "SignUp"}
                </button>
                <p className="my-2 cursor-pointer" onClick={toggleSignIn}>
                    {isLoggedIn
                        ? "New to Netflix | Register here"
                        : "Already a user | SignIn here"}
                </p>
            </form>
        </div>
    );
};

export default Login;

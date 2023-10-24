import React, { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/validation";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    function toggleSignIn() {
        setIsLoggedIn(!isLoggedIn);
        email.current.value = null;
        password.current.value = null;
        setErrorMsg(null);
    }

    function handleButtonClick() {
        const msg = validation(
            // name.current.value,
            email.current.value,
            password.current.value,
            isLoggedIn
        );
        setErrorMsg(msg);

        if (msg) return;

        // SignIn / SignUp
        if (!isLoggedIn) {
            // SignUp Login

            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL:
                            "https://avatars.githubusercontent.com/u/96120907?s=400&u=09ff8f121030735332f76ab0428a5764475616c8&v=4",
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } =
                                auth.currentUser;
                            dispatch(
                                addUser({ uid, email, displayName, photoURL })
                            );
                            navigate("/browse");
                        })
                        .catch((error) => {
                            setErrorMsg(error.message);
                        });
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg("This email is already registered.");
                });
        } else {
            // SignIn Login
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg("Incorrect email or password.");
                });
        }
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
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="absolute bg-black w-3/12 my-36 p-8 mx-auto left-0 right-0 bg-opacity-80 text-white rounded-lg "
            >
                <h1 className="text-4xl mb-4 font-bold">
                    {isLoggedIn ? "SignIn" : "SignUp"}
                </h1>
                {!isLoggedIn && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-2 w-full bg-gray-800"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-2 w-full bg-gray-800"
                />
                <input
                    ref={password}
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
                <p className="text-red-500 font-bold py-2">{errorMsg}</p>
                <button
                    className="p-4 my-4 items-center bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}
                >
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
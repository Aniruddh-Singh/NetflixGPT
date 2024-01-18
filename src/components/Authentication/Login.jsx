import { useRef, useState } from "react";
import Header from "../Header";
import { validation } from "../../utils/validation";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { BACKGROUND, PHOTO_URL } from "../../utils/constants";

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const provider = new GoogleAuthProvider();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const phoneNumber = useRef(null);

    function toggleSignIn() {
        setIsLoggedIn(!isLoggedIn);
        email.current.value = null;
        password.current.value = null;
        setErrorMsg(null);
    }

    function handleButtonClick() {
        const msg = validation(
            name?.current?.value,
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
                        photoURL: PHOTO_URL,
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } =
                                auth.currentUser;
                            dispatch(
                                addUser({ uid, email, displayName, photoURL })
                            );
                        })
                        .catch((error) => {
                            setErrorMsg(error.message);
                        });
                })
                .catch((error) => {
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
                    setErrorMsg("Incorrect email or password.");
                });
        }
    }

    function authHandleClick() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    className="h-screen object-cover xl:h-auto"
                    src={BACKGROUND}
                    alt="background"
                />
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="absolute bg-black w-5/6 md:w-1/3 xl:w-3/12 my-36 p-8 mx-auto left-0 right-0 bg-opacity-80 text-white rounded-lg "
            >
                <h1 className="text-4xl mb-4 font-bold">
                    {isLoggedIn ? "SignIn" : "SignUp"}
                </h1>
                {!isLoggedIn && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="User Name (eg: user123)"
                        className="p-4 my-2 w-full bg-gray-800"
                        maxLength={15}
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
                    placeholder="Password"
                    className="p-4 my-2 w-full bg-gray-800"
                />
                {!isLoggedIn && (
                    <input
                        ref={phoneNumber}
                        type="number"
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
                <div className="flex justify-center">
                    <img className="m-2 hover:cursor-pointer" onClick={authHandleClick} src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-40.png" />
                    <img className="m-2 hover:cursor-pointer" onClick={authHandleClick} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-40.png" />
                    <img className="m-2 hover:cursor-pointer" onClick={authHandleClick} src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-40.png" />
                </div>
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

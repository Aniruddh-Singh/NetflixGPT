import React, { useEffect } from "react";
import signout from "../images/signout.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LANGUAGE, LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSearchSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);
    const gptSearch = useSelector((store) => store.gptSearch.showGptSearch);

    function handleSignout() {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                navigate("/error");
            });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        // UnSubscribe when component unmount.
        return () => unSubscribe();
    }, []);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLang(e.target.value));
    };

    return (
        <div className="absolute w-full px-4 md:px-8 py-2 bg-gradient-to-b from-black z-30 flex flex-col md:flex-row justify-between">
            <img className="w-44 m-auto md:m-0" src={LOGO} alt="logo" />

            {user && (
                <div className="flex flex-wrap justify-end">
                    <button
                        className="md:mx-4 my-4 h-auto px-2 md:px-4 py-2 ms-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                        onClick={handleGptSearchClick}
                    >
                        {gptSearch ? "Home" : "GPT Search"}
                    </button>
                    {gptSearch && (
                        <select
                            className="px-2 md:px-4 py-2 my-4 ms-2 bg-gray-700 text-white rounded-lg"
                            onChange={handleLanguageChange}
                        >
                            {LANGUAGE.map((lang) => (
                                <option
                                    value={lang.langIdentifier}
                                    key={lang.langIdentifier}
                                >
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}
                    <p className="hidden md:block my-auto md:me-4 ms-2 text-2xl md:text-3xl font-bold text-white">
                        {user.displayName}
                    </p>
                    <img
                        src={user.photoURL}
                        alt="signout"
                        className="w-10 h-10 md:w-14 md:h-14 ms-2 md:me-4 my-auto rounded-full border-2 border-yellow-500"
                    />
                    <img
                        src={signout}
                        alt="signout"
                        className="w-10 h-10 md:w-12 md:h-12 ms-2 rotate-180 my-auto rounded-full cursor-pointer"
                        onClick={handleSignout}
                    />
                </div>
            )}
        </div>
    );
};

export default Header;

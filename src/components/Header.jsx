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
            .then(() => {})
            .catch((error) => {
                navigate("/error");
                // console.log(error);
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
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
            <img className="w-44" src={LOGO} alt="logo" />

            {user && (
                <div className="flex">
                    {gptSearch && (
                        <select
                            className="px-4 py-2 my-4 bg-gray-700 text-white rounded-lg"
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
                    <button
                        className="mx-4 my-4 h-auto px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                        onClick={handleGptSearchClick}
                    >
                        {gptSearch ? "Home" : "GPT Search"}
                    </button>
                    <p className="my-auto me-4 text-3xl font-bold text-white">
                        {user.displayName}
                    </p>
                    <img
                        src={user.photoURL}
                        alt="signout"
                        className="w-14 h-14 me-4 my-auto rounded-full border-2 border-yellow-500"
                    />
                    <img
                        src={signout}
                        alt="signout"
                        className="w-12 h-12 rotate-180 my-auto rounded-full cursor-pointer"
                        onClick={handleSignout}
                    />
                </div>
            )}
        </div>
    );
};

export default Header;

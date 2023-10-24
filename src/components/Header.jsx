import React from "react";
import signout from "../images/signout.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    function handleSignout() {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
                console.log(error);
            });
    }

    return (
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
            <img
                className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />

            {user && (
                <div className="flex">
                    <p className="my-auto me-4 text-3xl font-bold text-red-700">
                        {user.displayName}
                    </p>
                    <img
                        src={user.photoURL}
                        alt="signout"
                        className="w-14 h-14 me-4 my-auto rounded-full"
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

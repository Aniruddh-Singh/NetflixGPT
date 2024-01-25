import signout from "../../images/signout.png";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO } from "../../utils/constants";

const MovieHeader = () => {
    const navigate = useNavigate();

    const user = useSelector((store) => store.user);
    // const gptSearch = useSelector((store) => store.gptSearch.showGptSearch);

    function handleSignout() {
        signOut(auth)
            .then(() => {
                navigate("/")
            })
            .catch(() => {
                navigate("/error");
            });
    }

    return (
        <div className="absolute w-full px-4 md:px-8 py-0 sm:py-2 bg-black bg-opacity-30 z-30 flex flex-col sm:flex-row justify-between">
            <img className="w-44 m-auto sm:m-0" src={LOGO} alt="logo" />

            {user && (
                <div className="flex flex-wrap justify-end">
                    <p className="hidden sm:block my-auto md:me-4 ms-2 text-2xl md:text-3xl font-bold text-white">
                        {user.displayName}
                    </p>
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

export default MovieHeader;

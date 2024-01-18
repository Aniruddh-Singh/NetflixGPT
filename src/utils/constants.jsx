export const LOGO =
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND =
    "https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const PHOTO_URL =
    "https://avatars.githubusercontent.com/u/96120907?s=400&u=09ff8f121030735332f76ab0428a5764475616c8&v=4";

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
    },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w185";

export const IMG_MOVIE_URL = "https://image.tmdb.org/t/p/w1280";

export const LANGUAGE = [
    { langIdentifier: "en", name: "English" },
    { langIdentifier: "hindi", name: "Hindi" },
    { langIdentifier: "spanish", name: "Spanish" },
    { langIdentifier: "german", name: "German" },
    { langIdentifier: "urdu", name: "Urdu" },
    { langIdentifier: "persian", name: "Persian" },
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;


export const FIREBASE_API_KEY = import.meta.env.VITE_API_KEY
export const FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
export const FIREBASE_PROJECT_ID = import.meta.env.VITE_PROJECT_ID
export const FIREBASE_STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET
export const FIREBASE_MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID
export const FIREBASE_APP_ID = import.meta.env.VITE_APP_ID
export const FIREBASE_MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID
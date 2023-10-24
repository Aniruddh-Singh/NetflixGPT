// export const validation = (name, email, password, isLoggedIn) => {
export const validation = (email, password, isLoggedIn) => {
    // const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if (!isLoggedIn) {
    //     if (!nameRegex) {
    //         return "Please enter your name";
    //     } else if (!emailRegex) {
    //         return "Please enter a valid email address";
    //     } else if (!passwordRegex) {
    //         return "Password is not strong enough.";
    //     }
    // } else {
    if (!emailRegex) {
        return "Please enter a valid email address";
    } else if (!passwordRegex) {
        return "Password is not strong enough.";
    }
    // }

    return null;
};

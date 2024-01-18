// export const validation = (name, email, password, isLoggedIn) => {
export const validation = (name, email, password, isLoggedIn) => {
    const nameRegex = /^[a-zA-Z0-9]+$/.test(name);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!nameRegex) {
        return "Please enter valid user name."
    }
    else if (!emailRegex) {
        return "Please enter a valid email address.";
    } else if (!passwordRegex) {
        return "Password is not strong enough.";
    }

    return null;
};

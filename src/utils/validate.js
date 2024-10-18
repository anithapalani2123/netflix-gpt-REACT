export const checkSignInValidation = (email,password) =>{

    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid!";
    if(!isPasswordValid) return "Password is not valid!"

    return null;
};

export const checkSignUpValidation = (email,password,name) =>{

    const isNameVaild=/[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isNameVaild) return "Name is not valid!"
    if(!isEmailValid) return "Email ID is not valid!";
    if(!isPasswordValid) return "Password is not valid!"

    return null;
}




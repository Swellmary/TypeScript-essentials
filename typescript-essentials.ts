






/*
>>>> REVERT <<<<<

// unauthorized, user doesn't exist, wrong credentials, internal

enum LoginError {
    Unauthorized = "unauthorized",
    NoUser = "user doesn't exist",
    WrongCredentials = "wrong credentials",
    Internal = "internal"
}


const printErrorMsg = (error: LoginError) => {
    if (error == LoginError.Unauthorized) {
        console.log("User not authorized")
    } else if (error == LoginError.NoUser) {
        console.log("No user exist")
    } else if (error == LoginError.WrongCredentials){
        console.log("wrong credentials")
    } else if (error == LoginError.Internal) {
        console.log ("internal error")
    }
}

printErrorMsg(LoginError.Unauthorized);

*/
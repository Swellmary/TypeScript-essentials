"use strict";
// unauthorized, user doesn't exist, wrong credentials, internal
Object.defineProperty(exports, "__esModule", { value: true });
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "user doesn't exist";
    LoginError["WrongCredentials"] = "wrong credentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
const printErrorMsg = (error) => {
    if (error == LoginError.Unauthorized) {
        console.log("User not authorized");
    }
    else if (error == LoginError.NoUser) {
        console.log("No user exist");
    }
    else if (error == LoginError.WrongCredentials) {
        console.log("wrong credentials");
    }
    else if (error == LoginError.Internal) {
        console.log("internal error");
    }
};
printErrorMsg(LoginError.Unauthorized);
//# sourceMappingURL=typescript-essentials.js.map
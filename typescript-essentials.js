"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StorageContainer {
    contents; // means array of this T types
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        return this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const usernames = new StorageContainer(); //when declares T we define the type of specific arguments
usernames.addItem("Well Mary");
usernames.addItem("Ethan");
console.log(usernames.getItem(0));
/*
>>>> REVERT <<<<<

// unauthorized, user doesn't exist, wrong credentials, internal

<<<<<<< HEAD
// type IDFieldType = string | number;

// const printID = (id: IDFieldType) => {
//     console.log("ID: " + id);
// }

// console.log(printID);

// const printIDNow = printID("this is text on id :: " + 323);
// console.log(printIDNow);

interface BusinessPartner {
    name: string;
    creditScore: number;
}

interface UserIdentity {
    id: number;
    email: string;
}

<<<<<<< HEAD
printErrorMsg(LoginError.Unauthorized);

*/
/*
=======
type Employee = BusinessPartner & UserIdentity

const signContract = (employee: Employee): void => {
    console.log("Contract signed by: " + employee.name + "With email: " + employee.email)
}

signContract({name: "Well Mary", creditScore: 800, id:53, email: "suarezwellmary@gmail.co"})
=======

*/
// interface UserInterface {
//     id: number;
//     name: string;
//     age?: number; // optional property is either a number or undefined.
//     greet(message: string): void;
// }
// const User: UserInterface = { // user: UserInterface - this is how we add object blueprint to our object.
//     id: 2,
//     name: "Alice", 
//     greet(message) {
//         console.log(message);
//     }
// }
// User.greet("Hello, Alice!");
//# sourceMappingURL=typescript-essentials.js.map
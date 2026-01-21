
interface UserInterface {
    id: number;
    name: string;
    age?: number; // optional property is either a number or undefined.
}

const User: UserInterface = { // user: UserInterface - this is how we add object blueprint to our object.
    id: 2,
    name: "Alice", 
}

if (!User.age) {
console.log("No age provided");
} else {
    console.log(`User age is ${User.age}`);
}

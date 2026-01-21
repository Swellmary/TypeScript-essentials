
interface UserInterface {
    id: number;
    name: string;
    age?: number; // optional property is either a number or undefined.
    greet(message: string): string;
}

const User: UserInterface = { // user: UserInterface - this is how we add object blueprint to our object.
    id: 2,
    name: "Alice", 
    greet(message) {
        console.log(message);
    })
}

User.greet("Hello, Alice!"); 
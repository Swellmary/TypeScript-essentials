
interface UserInterface { // Capital letter on object name first
    id: number;
    name: string;
    age: number;
}

const User: UserInterface = { // user: UserInterface - this is how we add object blueprint to our object.
    id: 2,
    name: "Alice", 
    age: "23"; // Error: Type 'string' is not assignable to type 'number'.
}

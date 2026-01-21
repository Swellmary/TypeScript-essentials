
interface userInterface { // Capital letter is actually bad practice for interface names.
    id: number;
    name: string;
    age?: number;
}

const User: UserInterface = { // user: UserInterface - this is how we add object blueprint to our object.
    id: 2,
    name: "Alice", 
}


interface UserInterface { // Capital letter on object name first
    id: number;
    name: string;
    age: number;
}

const User: UserInterface = { // git 
    id: 2,
    name: "Alice", 
    age: 23
}

User.age = "23";
let id: number = 5; 
let company: string = "Acme Corp";
let isPublished: boolean = true;

let ids: number[] = [1, 2, 3, 4, 5]; // when it's array just add [] after type
let x: any = "well mary";
let xArr: any[] = [1, true, "hello"];
let person: [number, string, boolean] = [1, "John", true]; // Tuple
let employee: [number, string][]; // Array of tuples
employee = [
    [1, "Alice"],
    [2, "Bob"],
    [3, "Charlie"]
]
let pid: number | string; // Union
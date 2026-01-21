
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

type Employee = BusinessPartner & UserIdentity

const signContract = (employee: Employee): void => {
    console.log("Contract signed by: " + employee.name + "With email: " + employee.email)
}

signContract({name: "Well Mary", creditScore: 800, id:53, email: "suarezwellmary@gmail.co"})

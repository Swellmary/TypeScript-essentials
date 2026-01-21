const printID = (id: number | string) => {
    console.log("ID: " + id);
}

console.log(printID);

const printIDNow = printID("this is text on id :: " + 323);
console.log(printIDNow);
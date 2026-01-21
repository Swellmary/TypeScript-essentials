
type IDFieldType = string | number;

const printID = (id: IDFieldType) => {
    console.log("ID: " + id);
}

console.log(printID);

const printIDNow = printID("this is text on id :: " + 323);
console.log(printIDNow);
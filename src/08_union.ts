// In TypeScript, a union type lets you define a variable that can hold multiple possible types.

// Basic Syntax
let value: string | number;
// This means value can be either a string or a number.


// Example
function printId(id: string | number) {
  console.log("ID:", id);
}
// printId(101);      // ✅ number
// printId("A102");   // ✅ string


// Using with Type Narrowing :
// Since TypeScript doesn’t know which type it is at runtime, you often narrow it:
function printId3(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // string methods
  } else {
    console.log(id.toFixed(2));    // number methods
  }
}


// Union with Literal Types :
let direction: "left" | "right" | "center";
direction = "left";   // ✅
// direction = "top";    // ❌ Error


// Union with Objects :
type Dog = { bark: () => void };
type Cat = { meow: () => void };

let pet: Dog | Cat;


// Key Points :
// - Use | (pipe) to define unions.
// - Only common properties/methods are directly accessible without narrowing.
// - Often used for flexible APIs or handling multiple input types.




// ----------------------------------------------------------------------------- //

function printId2(id: string | number){
    if(typeof id === 'string'){
        id.toLowerCase()
    }else {
        id.toFixed(2)
    }
}

type Admin = {role: 'admin' , permissions: string[]}
type Customer = {role: 'customer', loyalityPoints: number}

function getuser(u: Admin | Customer){
    //  if(u.role === 'admin'){
    //     console.log(u.permissions)
    //  } else {
    //     console.log(u.loyalityPoints)
    //  }

    if('permissions' in u ){
        console.log(u.role , 'admin useer')
    } else {
        console.log(u.role)
    }
}


const arrOfUni: (string | number)[] = ['a',2,3,'b']
const uniOfArr: string[] | number[] = ['a','b']
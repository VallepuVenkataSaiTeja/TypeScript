// as const tells TypeScript:
// “Make this value fully constant and exact.”

// It does three things at once:
// - Makes values readonly
// - Prevents type widening (keeps exact values)
// - Converts arrays into readonly tuples


// Without as const
let color = "red";
// TypeScript sees:
// color: string
// Even though the value is "red", TypeScript generalizes it to string.

// With as const
let color2 = "red" as const;
// Now TypeScript sees:
color2: "red"
// This is called a literal type (exact value, not general type)


// Object Example (Very Important)
// Without as const
const user = {
  name: "John",
  age: 25
};
// Type:
{
//   name: string;
//   age: number;
}


// With as const
const user2 = {
  name: "John",
  age: 25
} as const;
// Type becomes:
{
//   readonly name: "John";
//   readonly age: 25;
}
//  Values are exact
//  Properties are readonly


// Array Example
// Without as const
let arr = [1, 2, 3];
// Type:
// number[]


// With as const
let arr2 = [1, 2, 3] as const;
// Type:
// readonly [1, 2, 3]
// Now it's a tuple, not a normal array.


// What you CANNOT do now
arr.push(4);   // ❌ Error
user.age = 30; // ❌ Error
// Because everything is readonly


// Why as const is useful
// 1. Safer constants
const status = "success" as const;
// Instead of string, it’s exactly "success"

// 2. Perfect for enums-like patterns
const roles = ["admin", "user", "guest"] as const;
// Now TypeScript knows:
type Role = "admin" | "user" | "guest";

// 3. Prevent accidental changes
// It locks your data 🔒


// Key Difference
// Feature	                 as	                 as const
// Purpose	           Type assertion   	Literal + readonly
// Changes value?       	❌ No	             ❌ No
// Makes readonly?	        ❌ No	             ✅ Yes
// Keeps exact values?	    ❌ No	             ✅ Yes


// Simple way to remember :
// as = “Treat it as this type”
// as const = “Freeze this value exactly as it is”


// Final Summary :
//     as const makes values:
//         - exact (no widening)
//         - readonly
//         - safer
//     Very useful for:
//         - configs
//         - constants
//         - fixed data structures
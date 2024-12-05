# Type 'string[]' is not assignable to type 'string'

This example demonstrates a common TypeScript error: attempting to pass an array to a function that expects a string. The code defines a function `greeter` that accepts a string and returns a greeting. However, it attempts to pass an array of strings to the function, resulting in a type error.

The solution involves modifying either the function signature or the way the array is handled to ensure type compatibility.  The provided solution demonstrates handling the array by iterating through and using each element individually.  Alternative solutions would be to change the `greeter` function to accept an array, or modify the use of `user` to only pass one element at a time.

## How to reproduce the error

1. Clone this repo.
2. Open `bug.ts`.
3. Run `tsc bug.ts` and observe the compilation error.

function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

for (const name of user) {
  console.log(greeter(name)); // Corrected: iterates through the array
}
//Alternative Solution 1: Modify the function
// function greeter(person: string[]): string[]{
//   return person.map(name => "Hello, " + name);
// }
// console.log(greeter(user));
//Alternative Solution 2: Modify usage
//console.log(greeter(user[0])); 
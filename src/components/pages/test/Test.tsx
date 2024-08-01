const Test = () => {
  // --------------------------------
  // enum HttpCodes {
  //   OK = 200,
  //   BadRequest = 400,
  //   Unauthorized = 401,
  // }

  // function respond(status: HttpCodes) {
  //   // handle response
  //   return status;
  // }
  // console.log(respond(HttpCodes.OK));

  // --------------------------------
  // function sayHello(name: string): string {
  //   console.log(`Hello, ${name}!`);
  //   return `Hello, ${name}!`;
  // }
  // let result = sayHello("John");
  // console.log("result", result);
  // ---------------------------------

  // enum AnimalIds {
  //   cat = "cat",
  //   dog = "dog",
  //   fish = "fish",
  // }

  // type Animal = {
  //   [AnimalIds.cat]: {
  //     meow: () => string;
  //   };
  //   [AnimalIds.dog]: {
  //     bark: () => string;
  //   };
  //   [AnimalIds.fish]: {
  //     swim: () => undefined;
  //   };
  // };

  // // Створення об'єктів типу Animal
  // let cat: Animal[AnimalIds.cat] = {
  //   meow: () => "Meow! I am a cat",
  // };

  // let dog: Animal[AnimalIds.dog] = {
  //   bark: () => "Woof! I am a dog",
  // };

  // let fish: Animal[AnimalIds.fish] = {
  //   swim: () => undefined,
  // };

  // ---------------------------------
  // type Person = { name: string; age?: number };
  // let user: Person = { name: "Alice" };
  // user.age = 27;
  // console.log("a", user);
  // ---------------------------------
  // type ComplexType = number | string;

  // function combine(a: ComplexType, b: ComplexType) {
  //   console.log("first", typeof a);
  //   if (typeof a === "number" && typeof b === "number") {
  //     console.log("first", a + b);
  //     return a + b;
  //   }
  // }
  // combine(3, 4);
  // ---------------------------------
  // type Admin = {
  //   name: string;
  //   privileges: string[];
  // };

  // type Employee = {
  //   name: string;
  //   startDate: Date;
  // };

  // type AdminOrEmployee = Admin | Employee;

  // function printDetails(obj: AdminOrEmployee) {
  //   console.log(`Name: ${obj.name}`);

  //   if ("privileges" in obj) {
  //     console.log(`Privileges: ${obj.privileges.join(", ")}`);
  //   }

  //   if ("startDate" in obj) {
  //     console.log(`Start Date: ${obj.startDate}`);
  //   }
  // }
  // ---------------------------------
  return <>Test</>;
};

export default Test;

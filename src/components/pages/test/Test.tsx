const Test = () => {
  // --------------------------------
  enum HttpCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
  }

  function respond(status: HttpCodes) {
    // handle response
    return status;
  }
  console.log(respond(HttpCodes.OK));

  // --------------------------------
  function sayHello(name: string): string {
    console.log(`Hello, ${name}!`);
    return `Hello, ${name}!`;
  }
  let result = sayHello("John");
  console.log("result", result);
  // ---------------------------------

  enum AnimalIds {
    cat = "cat",
    dog = "dog",
    fish = "fish",
  }

  type Animal = {
    [AnimalIds.cat]: {
      meow: () => string;
    };
    [AnimalIds.dog]: {
      bark: () => string;
    };
    [AnimalIds.fish]: {
      swim: () => undefined;
    };
  };

  // Створення об'єктів типу Animal
  let cat: Animal[AnimalIds.cat] = {
    meow: () => "Meow! I am a cat",
  };

  let dog: Animal[AnimalIds.dog] = {
    bark: () => "Woof! I am a dog",
  };

  let fish: Animal[AnimalIds.fish] = {
    swim: () => undefined,
  };

  // ---------------------------------
  type Person = { name: string; age?: number };
  let user: Person = { name: "Alice" };
  user.age = 27;
  console.log("a", user);
  // ---------------------------------
  return <>Test</>;
};

export default Test;

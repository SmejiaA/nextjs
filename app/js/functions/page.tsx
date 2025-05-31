"use client";
import Separator from "@/components/Separator";
import { CopyBlock, dracula } from "react-code-blocks";

function Functions() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">
        Functions in JavaScript
      </h1>
      <Separator />
      <p className="mt-10 text-lg">
        A function is a block of code that{" "}
        <span className="font-bold">performs a specific task</span>. You can
        <span className="font-bold"> reuse it</span> anywhere in your program by
        calling it.
        <br />
        Think of a function like a <span className="font-bold">blender</span>:
        you give it ingredients (inputs), turn it on (call it), and it gives you
        a smoothie (output).
      </p>
      <h2 className="font-bold mt-10">Why Use Functions?</h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li className="leading-8">
          To avoid repeating code (DRY: Don&apos;t Repeat Yourself).
        </li>
        <li className="leading-8">To organize code into reusable parts.</li>
        <li className="leading-8">
          To make your code easier to read and maintain.
        </li>
      </ul>
      <h2 className="font-bold mt-10">How to Define and Call a Function</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">Basic Syntax:</p>
      <CopyBlock
        text={`function greet() {
  console.log("Hello, world!");
}

greet(); // Calls the function`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Functions with Parameters:</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">
        Parameters are like <span className="font-bold">placeholders</span> for
        values you pass in.
      </p>
      <CopyBlock
        text={`function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser("Ana"); // → Hello, Ana!
greetUser("Luis"); // → Hello, Luis!`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Functions that Return a Value:</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">
        Instead of just printing something, a function can{" "}
        <span className="font-bold">return</span> a value that you can store or
        use elsewhere.
      </p>
      <CopyBlock
        text={`function add(a, b) {
  return a + b;
}

let result = add(5, 3); // result = 8
console.log(result);`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Breakdown of a Function:</h2>
      <Separator />
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"function"}</span>{" "}
          Keyword to define the function
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"greetUser"}</span>{" "}
          Function name
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"(name)"}</span>{" "}
          Parameter(s)
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"{...}"}</span> Code
          block — what the function does
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"return"}</span>{" "}
          Optional — sends back a value
        </li>
      </ul>
      <h2 className="font-bold mt-10">Practice</h2>
      <Separator />
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li>Create and Call a Function</li>
      </ul>
      <p className="mt-5 mb-5 text-lg">
        Define a function{" "}
        <span className="bg-gray-200 rounded-md p-1">{"sayHello()"}</span> that
        logs{" "}
        <span className="bg-gray-200 rounded-md p-1">{'"Hello from JS!"'}</span>
        .
      </p>
      <CopyBlock
        text={`function sayHello(greeting) {
  console.log(greeting);
}

greeting("Hello from JS!");`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li>Make a Calculator Function</li>
      </ul>
      <p className="mt-5 mb-5 text-lg">
        Define a function{" "}
        <span className="bg-gray-200 rounded-md p-1">{"multiply(x, y)"}</span>{" "}
        that takes in and multiply two values.
      </p>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li>Personalized Greeting</li>
      </ul>
      <p className="mt-5 mb-5 text-lg">
        Create a function{" "}
        <span className="bg-gray-200 rounded-md p-1">
          {"logName(name, age)"}
        </span>{" "}
        that logs{" "}
        <span className="bg-gray-200 rounded-md p-1">
          {"Hi, I'm Ana and I'm 23 years old!"}.
        </span>
      </p>
    </div>
  );
}

export default Functions;

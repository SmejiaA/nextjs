"use client";
import Separator from "@/components/Separator";
import { CopyBlock, dracula } from "react-code-blocks";

function Objects() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">
        Objects and Arrays in JavaScript
      </h1>
      <Separator />
      <p className="mt-10 mb-5 text-lg">
        <span className="font-bold">1. What are Arrays?</span>
      </p>
      <p className="mt-5 mb-5 text-lg">
        An <span className="font-bold">array</span> is a special variable that
        can hold more than one value at a time, stored in a list format.
      </p>
      <CopyBlock
        text={`let colors = ["red", "green", "blue"];`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-10 mb-5 text-lg">
        <span className="font-bold">Accessing array elements:</span>
      </p>
      <CopyBlock
        text={`console.log(colors[0]); // Output: red`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-10 mb-5 text-lg">
        <span className="font-bold">Array methods:</span>
      </p>
      <CopyBlock
        text={`colors.push("yellow"); // adds to end
colors.pop(); // removes last
colors.length; // number of elements`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Example</h2>
      <Separator />
      <CopyBlock
        text={`let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-10 mb-5 text-lg">
        <span className="font-bold">2. What are Objects?</span>
      </p>
      <p className="mt-5 mb-5 text-lg">
        An <span className="font-bold">object</span> is a collection of
        properties (key-value pairs). It’s used to represent real-world
        entities.
      </p>
      <CopyBlock
        text={`let person = {
  name: "Alice",
  age: 30,
  isStudent: true
};`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-10 mb-5 text-lg">
        <span className="font-bold">Accessing object properties:</span>
      </p>
      <CopyBlock
        text={`console.log(person.name); // Alice
console.log(person["age"]); // 30`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-10 mb-5 text-lg">
        <span className="font-bold">Modifying properties:</span>
      </p>
      <CopyBlock
        text={`person.age = 31;
person.city = "New York";`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Example</h2>
      <Separator />
      <CopyBlock
        text={`let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};
car.year = 2023;`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Practice</h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li className="leading-8">
          Create an array of three favorite movies and console log it.
        </li>
        <li className="leading-8">
          Create an object to represent one movie, with properties like title,
          director, and year.
        </li>
        <li className="leading-8">
          Combine them: create an array of movie objects.
        </li>
      </ul>
    </div>
  );
}

export default Objects;

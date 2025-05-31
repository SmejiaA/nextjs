"use client";
import Separator from "@/components/Separator";
import { CopyBlock, dracula } from "react-code-blocks";

function Variables() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">What is a Variable?</h1>
      <Separator />
      <p className="mt-10 text-lg">
        Variables are like{" "}
        <span className="font-bold">containers that hold data</span>. Think of
        it like a labeled box where you can keep a value, such as a number or a
        word that can be used later in your code.
      </p>
      <h2 className="font-bold mt-10">Declaring Variables</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">
        In modern JavaScript, you can declare a variable using the{" "}
        <span className="bg-gray-200 rounded-md p-1">let</span>,{" "}
        <span className="bg-gray-200 rounded-md p-1">const</span>, or{" "}
        <span className="bg-gray-200 rounded-md p-1">var</span> keywords:
      </p>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">let</span> – allows you
          to change the value later.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">const</span> – the value
          cannot change once it&apos;s set.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">var</span> – the old way;
          not recommended anymore due to confusing behavior (scope issues).
        </li>
      </ul>
      <CopyBlock
        text={`let age = 30;      // Can be updated
const country = "Mexico"; // Cannot be changed`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />{" "}
      <h1 className="text-3xl font-bold text-shadow-sm mt-10">Data Types</h1>
      <Separator />
      <p className="mt-10 text-lg">
        JavaScript has different kinds of values, called data types. The most
        important for beginners are:
      </p>
      <table className="table-auto w-full mt-10 mb-10 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300  p-5 bg-gray-50">Type</th>
            <th className="border border-gray-300 bg-gray-50">Example</th>
            <th className="border border-gray-300 bg-gray-50">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 pl-2">String</td>
            <td className="border border-gray-300 p-2 text-center">
              <span className="bg-gray-200 rounded-md p-1">{'"Hello"'}</span>
            </td>
            <td className="pl-2 border border-gray-300">Text, inside quotes</td>
          </tr>
          <tr>
            <td className="border border-gray-300 pl-2">Number</td>
            <td className="border border-gray-300 p-2 text-center">
              <span className="bg-gray-200 rounded-md p-1">42</span>{" "}
              <span className="bg-gray-200 rounded-md p-1">3.14</span>
            </td>
            <td className="pl-2 border border-gray-300">
              Whole numbers or decimals
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 pl-2">Boolean</td>
            <td className="border border-gray-300 p-2 text-center">
              <span className="bg-gray-200 rounded-md p-1">{"true"}</span>{" "}
              <span className="bg-gray-200 rounded-md p-1">{"false"}</span>
            </td>
            <td className="pl-2 border border-gray-300">
              Yes/no, on/off, true/false
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 pl-2">Undefined</td>
            <td className="border border-gray-300 p-2 text-center">
              <span className="bg-gray-200 rounded-md p-1">{"undefined"}</span>
            </td>
            <td className="pl-2 border border-gray-300">
              A variable declared but not assigned
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 pl-2">Null</td>
            <td className="border border-gray-300 p-2 text-center">
              <span className="bg-gray-200 rounded-md p-1">{"null"}</span>
            </td>
            <td className="pl-2 border border-gray-300">
              No value (set intentionally)
            </td>
          </tr>
        </tbody>
      </table>
      <CopyBlock
        text={`let userName = "Ana";     // String
let score = 100;          // Number
let isActive = true;      // Boolean
let pet;                  // Undefined (no value yet)
let nothingHere = null;   // Null (intentional nothing)`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10 mb-5">Outputting Values</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">To see the value of a variable, use:</p>
      <CopyBlock
        text={`console.log(name);`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">Or to combine strings and variables:</p>
      <CopyBlock
        text={`let age = 22;
console.log("I am " + age + " years old");`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">Or use template literals:</p>
      <CopyBlock
        text={"console.log(`I am ${age} years old`);"}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
    </div>
  );
}

export default Variables;

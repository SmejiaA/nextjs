"use client";
import Separator from "@/components/Separator";
import { CopyBlock, dracula } from "react-code-blocks";

function Structures() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">
        Control Structures in JavaScript
      </h1>
      <Separator />
      <p className="mt-10 text-lg">
        Control structures are blocks of code that determine{" "}
        <span className="font-bold">the flow of execution</span> in a program.
        With them, your code can:
      </p>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li>Make decisions (e.g., “if this is true, do that”)</li>
        <li>Repeat tasks (e.g., “do this 5 times”)</li>
      </ul>
      <p className="text-lg">
        These structures help your program respond dynamically to different
        inputs and conditions.
      </p>
      <h2 className="font-bold mt-10">1. Conditional Statements</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">
        <span className="font-bold">if Statement:</span> The code inside the{" "}
        <span className="bg-gray-200 rounded-md p-1">&#123; &#125;</span> block
        runs only if the condition is true.
      </p>
      <CopyBlock
        text={`let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        <span className="font-bold">if...else Statement</span> Use{" "}
        <span className="bg-gray-200 rounded-md p-1">else</span> to run code
        when the condition is false.
      </p>
      <CopyBlock
        text={`let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside!");
} else {
  console.log("It's not that hot.");
}`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        <span className="font-bold">else if Statement</span> Use{" "}
        <span className="bg-gray-200 rounded-md p-1">else</span> for multiple
        conditions.
      </p>
      <CopyBlock
        text={`let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C or below");
}`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">2. Switch Statement</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">
        A more readable way to check many possible values:
      </p>
      <CopyBlock
        text={`let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apples are red or green.");
    break;
  case "banana":
    console.log("Bananas are yellow.");
    break;
  default:
    console.log("Unknown fruit.");
}`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        Use <span className="bg-gray-200 rounded-md p-1">break</span> to stop
        checking further cases.
      </p>
      <h2 className="font-bold mt-10">3. Loops (Iteration)</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">
        <span className="font-bold">for Loop</span>
      </p>
      <CopyBlock
        text={`for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        Runs a block of code a specific number of times.
      </p>
      <p className="mt-5 mb-5 text-lg">
        <span className="font-bold">while Loop</span>
      </p>
      <CopyBlock
        text={`let count = 1;

while (count <= 5) {
  console.log("Count: " + count);
  count++;
}`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        Continues <span className="bg-gray-200 rounded-md p-1">while</span> a
        condition is true.
      </p>
      <p className="mt-5 mb-5 text-lg">
        <span className="font-bold">do...while Loop</span>
      </p>
      <CopyBlock
        text={`let x = 1;

do {
  console.log("Number: " + x);
  x++;
} while (x <= 5);`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        Executes the code block{" "}
        <span className="bg-gray-200 rounded-md p-1">at least once</span>, even
        if the condition is false initially.
      </p>
      <h2 className="font-bold mt-10">4. Control Flow Keywords</h2>
      <Separator />
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">break</span>: Exits a
          loop or switch early.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">continue</span>: Skips
          the current loop iteration and continues with the next one.
        </li>
      </ul>
      <CopyBlock
        text={`for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // skips 3
}`}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Practice</h2>
      <Separator />
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">
          Given a number between 1-7 (representing days of the week).
        </li>
        <li className="leading-8">
          Uses <span className="bg-gray-200 rounded-md p-1">switch</span> to
          print the name of the day.
        </li>
        <li className="leading-8">
          Uses <span className="bg-gray-200 rounded-md p-1">if...else</span> to
          print whether it&apos;s a weekend or weekday.
        </li>
      </ul>
    </div>
  );
}

export default Structures;

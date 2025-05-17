"use client";
import Separator from "@/components/Separator";
import { CopyBlock, dracula } from "react-code-blocks";

function Box() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">
        What is the Box Model?
      </h1>
      <Separator />
      <p className="mt-10 text-lg">
        In CSS, every element is treated as a{" "}
        <span className="font-bold">box</span> made up of four layers.{" "}
        <span className="bg-gray-200 rounded-md p-1">margin</span>{" "}
        <span className="bg-gray-200 rounded-md p-1">border</span>{" "}
        <span className="bg-gray-200 rounded-md p-1">padding</span>{" "}
        <span className="bg-gray-200 rounded-md p-1">content</span>
      </p>
      <h2 className="font-bold mt-5 mb-5">Box Model Parts Explained</h2>
      <Separator />
      <h2 className="font-bold mt-5 mb-5">1. Content</h2>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">The actual content (text, image, etc.)</li>
        <li className="leading-8">
          Size is controlled with <span className="font-bold">width</span> and{" "}
          <span className="font-bold">height</span>
        </li>
      </ul>
      <CopyBlock
        text={`width: 200px;
height: 100px;`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">2. Padding</h2>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">Space between the content and the border</li>
        <li className="leading-8">Makes the content “breathe”</li>
      </ul>
      <CopyBlock
        text={`padding: 20px;`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">3. Border</h2>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">
          The outline around the padding (and content)
        </li>
        <li className="leading-8">You can control style, width, and color</li>
      </ul>
      <CopyBlock
        text={`border: 2px solid black;`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">4. Margin</h2>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">
          The space <span className="font-bold">outside</span> the border
        </li>
        <li className="leading-8">Used to create distance between elements</li>
      </ul>
      <CopyBlock
        text={`margin: 10px;`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h1 className="text-2xl font-bold mt-10">
        Box Model Calculation (Default)
      </h1>
      <Separator />
      <p className="mt-10 mb-5 text-lg">
        By default, total box size:{" "}
        <span className="bg-gray-200 rounded-md p-1">
          200 + 40 + 10 = 250px
        </span>
      </p>
      <CopyBlock
        text={`width: 200px;
padding: 20px;
border: 5px solid;
margin: 10px;`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h1 className="text-2xl font-bold mt-10">box-sizing Property</h1>
      <Separator />
      <p className="mt-5 mb-5 text-lg">
        <span className="font-bold">Default</span>:{" "}
        <span className="bg-gray-200 rounded-md p-1">content-box</span>
      </p>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">width</span> and{" "}
          <span className="bg-gray-200 rounded-md p-1">height</span> only
          include the content area
        </li>
        <li className="leading-8">
          Padding and border are <span className="font-bold">added</span> to the
          total size
        </li>
      </ul>
      <p className="mt-5 mb-5 text-lg">
        <span className="font-bold">Recommended</span>:{" "}
        <span className="bg-gray-200 rounded-md p-1">border-box</span>
      </p>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">width</span> and{" "}
          <span className="bg-gray-200 rounded-md p-1">height</span>{" "}
          <span className="font-bold">include</span> content, padding, and
          border
        </li>
        <li className="leading-8">Makes layouts easier to manage</li>
      </ul>
      <CopyBlock
        text={`box-sizing: border-box;`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <br />
      <CopyBlock
        text={`* {
  box-sizing: border-box;
}`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Practice</h2>
      <Separator />
      <p className="mt-10 mb-5 text-lg">
        Add two boxes with different sizes and colors. Use the{" "}
        <span className="bg-gray-200 rounded-md p-1">box-sizing</span> property.
      </p>
    </div>
  );
}

export default Box;

"use client";
import Separator from "@/components/Separator";
import { CopyBlock, dracula } from "react-code-blocks";

function Background() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">
        Background Properties
      </h1>
      <Separator />
      <p className="mt-10 text-lg">
        CSS offers multiple ways to enhance backgrounds.
      </p>
      <h2 className="font-bold mt-10">
        <span className="bg-gray-200 rounded-md p-1">background-color</span>
      </h2>
      <p className="mt-5 mb-5 text-lg">Sets a solid color as the background.</p>
      <CopyBlock
        text={`div {
  background-color: lightblue;
}`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span className="bg-gray-200 rounded-md p-1">background-image</span>
      </h2>
      <p className="mt-5 mb-5 text-lg">Sets an image as the background.</p>
      <CopyBlock
        text={`div {
  background-image: url('pattern.png');
}`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span className="bg-gray-200 rounded-md p-1">background-repeat</span>
      </h2>
      <p className="mt-5 mb-5 text-lg">Controls if/how the image repeats.</p>
      <CopyBlock
        text={`background-repeat: repeat;       /* default */
background-repeat: no-repeat;
background-repeat: repeat-x;     /* horizontally only */
background-repeat: repeat-y;     /* vertically only */`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span className="bg-gray-200 rounded-md p-1">background-size</span>
      </h2>
      <p className="mt-5 mb-5 text-lg">
        Controls the size of the background image.
      </p>
      <CopyBlock
        text={`background-size: auto;           /* default */
background-size: cover;          /* covers entire element */
background-size: contain;        /* fits image inside element */
background-size: 100px 50px;     /* custom size */`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span className="bg-gray-200 rounded-md p-1">background-position</span>
      </h2>
      <p className="mt-5 mb-5 text-lg">Positions the image in the element.</p>
      <CopyBlock
        text={`background-position: center;
background-position: top right;
background-position: 10px 20px;`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">Shorthand</h2>
      <p className="mt-5 mb-5 text-lg">
        You can combine all properties in one line:
      </p>
      <CopyBlock
        text={`background: url('bg.jpg') no-repeat center center / cover;`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h1 className="text-2xl font-bold mt-10">Borders in CSS</h1>
      <Separator />
      <p className="mt-10 text-lg">
        Borders outline elements and can be fully customized.
      </p>
      <h2 className="font-bold mt-10">
        <span className="bg-gray-200 rounded-md p-1">border</span>
      </h2>
      <p className="mt-5 mb-5 text-lg">
        The shorthand for width, style, and color.
      </p>
      <CopyBlock
        text={`border: 2px solid black;`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">Individual sides</h2>
      <p className="mt-5 mb-5 text-lg">You can target each side separately:</p>
      <CopyBlock
        text={`border-top: 1px solid red;
border-right: 2px dashed blue;
border-bottom: 3px dotted green;
border-left: 4px double purple;`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span className="bg-gray-200 rounded-md p-1">border-radius</span>
      </h2>
      <p className="mt-5 mb-5 text-lg">Rounds the corners of the border.</p>
      <CopyBlock
        text={`border-radius: 10px;       /* all corners */
border-radius: 10px 0 10px 0; /* top-left, top-right, bottom-right, bottom-left */`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">Border Styles</h2>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"solid"}</span>
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"dotted"}</span>
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"dashed"}</span>
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"double"}</span>
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"groove"}</span>
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"ridge"}</span>
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"inset"}</span>
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"outset"}</span>
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"none"}</span>
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"hidden"}</span>
        </li>
      </ul>{" "}
      <h2 className="font-bold mt-10">Practice</h2>
      <Separator />
      <p className="mt-10 mb-5 text-lg">
        Create a card with rounded corners and custom borders.
      </p>
    </div>
  );
}

export default Background;

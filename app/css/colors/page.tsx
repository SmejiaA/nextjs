"use client";
import Separator from "@/components/Separator";
import { CopyBlock, dracula } from "react-code-blocks";

function Colors() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">CSS Colors</h1>
      <Separator />
      <p className="mt-10 text-lg">
        CSS supports several ways to define colors:
      </p>
      <h2 className="font-bold mt-5 mb-5">Named Colors</h2>
      <p className="mt-5 mb-5 text-lg">Use simple color names like:</p>
      <CopyBlock
        text={`color: red;
background-color: lightblue;`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 text-lg">
        Over <span className="font-bold">140</span> color names are available in
        CSS (e.g. <span className="bg-gray-200 rounded-md p-1">black</span>,{" "}
        <span className="bg-gray-200 rounded-md p-1">white</span>,{" "}
        <span className="bg-gray-200 rounded-md p-1">coral</span>,{" "}
        <span className="bg-gray-200 rounded-md p-1">teal</span>)
      </p>
      <h2 className="font-bold mt-5 mb-5">Hexadecimal (Hex) Colors</h2>
      <p className="mt-5 mb-5 text-lg">
        Use <span className="bg-gray-200 rounded-md p-1">#</span> followed by 3
        or 6 characters.
      </p>
      <CopyBlock
        text={`color: #ff0000;    /* Red */
color: #333;       /* Dark gray (shorthand for #333333) */`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">RGB and RGBA</h2>
      <p className="mt-5 mb-5 text-lg">
        Use <span className="bg-gray-200 rounded-md p-1">rgb()</span> or{" "}
        <span className="bg-gray-200 rounded-md p-1">rgba()</span> for
        red/green/blue color values.{" "}
        <span className="bg-gray-200 rounded-md p-1">a</span> is for{" "}
        <span className="font-bold">alpha transparency</span> (0–1).
      </p>
      <CopyBlock
        text={`color: rgb(0, 128, 0);       /* Green */
background-color: rgba(0, 0, 255, 0.5); /* Transparent blue */`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h1 className="text-2xl font-bold mt-10">CSS Units</h1>
      <Separator />
      <p className="mt-10 text-lg">
        CSS units define the size of text, padding, margin, etc. They fall into
        two main categories: <span className="font-bold">absolute</span> and{" "}
        <span className="font-bold">relative</span>.
      </p>
      <h2 className="font-bold mt-5 mb-5">Absolute Units (fixed)</h2>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"px"}</span> – pixels
          (most common)
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"pt"}</span> – points
          (mainly for print)
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"cm"}</span>{" "}
          <span className="bg-gray-200 rounded-md p-1">{"mm"}</span>{" "}
          <span className="bg-gray-200 rounded-md p-1">{"in"}</span> –
          centimeters, millimeters, inches
        </li>
      </ul>
      <CopyBlock
        text={`font-size: 16px;`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">
        Relative Units (scale with context)
      </h2>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"em"}</span> – relative
          to the font-size of the parent
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"pt"}</span> – relative
          to the root (
          <span className="bg-gray-200 rounded-md p-1">{"<html>"}</span>)
          font-size
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"%"}</span> – relative
          to the parent element&apos;s size
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"vw"}</span> –
          percentage of the viewport width
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"vh"}</span> –
          percentage of the viewport height
        </li>
      </ul>
      <CopyBlock
        text={`padding: 2em;
font-size: 1.5rem;
width: 80%;`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Practice</h2>
      <Separator />
      <p className="mt-10 mb-5 text-lg">
        Style a page using hex,{" "}
        <span className="bg-gray-200 rounded-md p-1">rgb()</span>, and{" "}
        <span className="font-bold">named colors</span>.
      </p>
      <p>
        <a
          href="https://mui.com/material-ui/customization/color/#color-palette"
          target="_blank"
          className="text-blue-400"
        >
          Color Palette
        </a>
      </p>
    </div>
  );
}
export default Colors;

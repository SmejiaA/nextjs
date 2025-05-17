"use client";
import Separator from "@/components/Separator";
import { CopyBlock, dracula } from "react-code-blocks";

function Introduction() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">Welcome to CSS</h1>
      <Separator />
      <p className="mt-10 text-lg">
        CSS stands for{" "}
        <span className="underline decoration-sky-500 font-bold">
          Cascading Style Sheets
        </span>
        . It is a{" "}
        <span className="underline decoration-pink-500 font-bold">
          style sheet language
        </span>{" "}
        used to control the appearance of HTML documents (webpages).
      </p>
      <ul className="list-decimal pl-5 mt-5">
        <li>Separates content (HTML) from presentation (CSS)</li>
        <li>Controls layout, colors, fonts, spacing, and responsiveness</li>
        <li>Helps create consistent and visually appealing web designs</li>
      </ul>
      <h2 className="font-bold mt-10">How CSS Works with HTML</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">
        CSS styles are applied to{" "}
        <span className="font-bold">HTML elements</span> by selecting them and
        defining their appearance using{" "}
        <span className="font-bold">properties and values</span>.
      </p>
      <CopyBlock
        text={`<p style="color: blue;">This is a styled paragraph.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Ways to Apply CSS</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">
        <span className="font-bold">Inline CSS</span> – Directly inside HTML
        elements
      </p>
      <CopyBlock
        text={`<h1 style="color: red;">Hello World</h1>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        <span className="font-bold">Internal CSS</span> – Inside a{" "}
        <span className="bg-gray-200 rounded-md p-1">{"<style>"}</span> tag in
        the <span className="bg-gray-200 rounded-md p-1">{"<head>"}</span>{" "}
        section
      </p>
      <CopyBlock
        text={`<style>
  p {
    font-size: 16px;
  }
</style>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        <span className="font-bold">External CSS</span> – In a separate{" "}
        <span className="bg-gray-200 rounded-md p-1">.css</span> file linked to
        the HTML
      </p>
      <CopyBlock
        text={`<link rel="stylesheet" href="styles.css">`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10 mb-5">CSS Syntax</h2>
      <Separator />
      <CopyBlock
        text={`selector {
  property: value;
}`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">selector</span>: the HTML
          element you want to style (e.g.,{" "}
          <span className="bg-gray-200 rounded-md p-1">h1</span>)
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">property</span>: what
          aspect of the element to change (e.g.,{" "}
          <span className="bg-gray-200 rounded-md p-1">color</span>)
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">value</span>: how you
          want to change it (e.g.,{" "}
          <span className="bg-gray-200 rounded-md p-1">green</span>)
        </li>
      </ul>
      <CopyBlock
        text={`h1 {
  color: green;
  font-size: 24px;
}`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10 mb-5">What Does “Cascading” Mean?</h2>
      <Separator />
      <p className="mt-10 text-lg">
        Priority rules determine which styles apply when there are conflicts
      </p>
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          Inline {">"} Internal {">"} External (in terms of specificity)
        </li>
        <li>Later rules override earlier ones if equal in specificity</li>
      </ul>
    </div>
  );
}

export default Introduction;

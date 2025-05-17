"use client";
import { CopyBlock, dracula } from "react-code-blocks";
import Separator from "@/components/Separator";

function Selectors() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">What is a Selector?</h1>
      <Separator />
      <p className="mt-10 text-lg">
        CSS <span className="font-bold">selectors</span> are patterns used to
        select the <span className="font-bold">elements you want to style</span>
        . They can be simple, like selecting all paragraphs, or complex, like
        selecting only the first paragraph inside a specific div.
      </p>
      <h2 className="font-bold mt-10">Basic Selectors</h2>
      <Separator />
      <p className="mt-10 text-lg">These are the most commonly used:</p>
      <h2 className="font-bold mt-5 mb-5">Element Selector:</h2>
      <p className="mt-5 mb-5 text-lg">
        Targets all elements of a specific type.
      </p>
      <CopyBlock
        text={`p {
  color: blue;
}`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">Class Selector:</h2>
      <p className="mt-5 mb-5 text-lg">
        Targets elements with a specific class (use a{" "}
        <span className="bg-gray-200 rounded-md p-1">.</span> prefix).
      </p>
      <CopyBlock
        text={`.myClass {
  font-weight: bold;
}`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <br />
      <CopyBlock
        text={`<p class="myClass">Hello</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">ID Selector:</h2>
      <p className="mt-5 mb-5 text-lg">
        Targets one unique element (use a{" "}
        <span className="bg-gray-200 rounded-md p-1">#</span> prefix).
      </p>
      <CopyBlock
        text={`#header {
  background-color: gray;
}`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <br />
      <CopyBlock
        text={`<div id="header"></div>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">Universal Selector:</h2>
      <p className="mt-5 mb-5 text-lg">
        Targets <span className="font-bold">all</span> elements.
      </p>
      <CopyBlock
        text={`* {
  margin: 0;
  padding: 0;
}`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h1 className="text-2xl font-bold mt-10">Combinators</h1>
      <Separator />
      <p className="mt-10 text-lg">
        Combinators define relationships{" "}
        <span className="font-bold">between elements</span>.
      </p>
      <h2 className="font-bold mt-5 mb-5">
        Descendant Selector{" "}
        <span className="bg-gray-200 rounded-md p-1 font-normal">space</span>
      </h2>
      <p className="mt-5 mb-5 text-lg">
        Selects elements <span className="font-bold">inside</span> another
        element, at any level.
      </p>
      <CopyBlock
        text={`div p {
  color: green;
}`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        All <span className="bg-gray-200 rounded-md p-1">{"<p>"}</span> elements
        <span className="font-bold"> inside</span> a{" "}
        <span className="bg-gray-200 rounded-md p-1">{"<div>"}</span>
      </p>
      <h2 className="font-bold mt-5 mb-5">
        Child Selector{" "}
        <span className="bg-gray-200 rounded-md p-1 font-normal">{">"}</span>
      </h2>
      <p className="mt-5 mb-5 text-lg">
        Selects <span className="font-bold">only direct children</span>.
      </p>
      <CopyBlock
        text={`ul > li {
  list-style: none;
}`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">
        Adjacent Sibling Selector{" "}
        <span className="bg-gray-200 rounded-md p-1 font-normal">{"+"}</span>
      </h2>
      <p className="mt-5 mb-5 text-lg">
        Selects an element that is{" "}
        <span className="font-bold">immediately after</span> another.
      </p>
      <CopyBlock
        text={`h1 + p {
  color: red;
}`}
        language="css"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Practice</h2>
      <Separator />
      <p className="mt-10 mb-5 text-lg">
        Write a selector to target all{" "}
        <span className="bg-gray-200 rounded-md p-1 font-normal">
          {"<span>"}
        </span>{" "}
        tags inside a{" "}
        <span className="bg-gray-200 rounded-md p-1 font-normal">
          {"<footer>"}
        </span>{" "}
        and set the font color to <span className="text-red-500">red</span>.
      </p>
      <CopyBlock
        text={`<footer>
  <span>Footer Text</span>
  <span>More Footer Text</span>
  <h3>And More Footer Text</h3>
</footer>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
    </div>
  );
}

export default Selectors;

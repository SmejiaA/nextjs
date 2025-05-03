"use client";
import Separator from "@/components/Separator";
import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Tags() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">
        HTML Tags and Elements
      </h1>
      <Separator />
      <p className="mt-10 text-lg">
        In HTML, the building blocks of a website are{" "}
        <span className="underline decoration-sky-500 font-bold">tags</span> and{" "}
        <span className="underline decoration-pink-500 font-bold">
          elements
        </span>
        . Understanding the difference between them is very important because
        they are the foundation of creating web pages.
      </p>
      <h2 className="font-bold mt-10">What is a Tag?</h2>
      <Separator />
      <p className="mt-10 text-lg">
        A tag is a piece of code that tells the browser how to display content.
        Tags are written inside angle brackets like this:{" "}
        <span className="bg-gray-200 rounded-md p-1 italic">{"<tagname>"}</span>
        .
      </p>
      <h2 className="font-bold mt-5 mb-5">Example of a Tag:</h2>
      <CopyBlock
        text={`<p>This is a paragraph.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<p>"}</span> is the{" "}
          <span className="font-bold">opening tag</span>, which starts the
          paragraph.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"</p>"}</span> is the{" "}
          <span className="font-bold">closing tag</span>, which ends the
          paragraph.
        </li>
      </ul>
      <h2 className="font-bold mt-5 mb-5">Key Points About Tags:</h2>
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li className="leading-8">
          Most tags come in pairs (opening and closing), but some are{" "}
          <span className="font-bold">self-closing</span> (e.g.,{" "}
          <span className="bg-gray-200 rounded-md p-1">{"<img>"}</span>,{" "}
          <span className="bg-gray-200 rounded-md p-1">{"<br>"}</span>,{" "}
          <span className="bg-gray-200 rounded-md p-1">{"<hr>"}</span>).
        </li>
        <li className="leading-8">
          Tags are <span className="font-bold">not case-sensitive</span>, but
          it’s a good practice to write them in lowercase.
        </li>
      </ul>
      <h2 className="font-bold mt-10">What is an Element?</h2>
      <Separator />
      <p className="mt-10 text-lg">
        An <span>element</span> is everything from the opening tag and the
        closing tag, including the content. Think of it as the full structure
        that defines a specific part of the web page.
      </p>
      <h2 className="font-bold mt-5 mb-5">Example of a Element:</h2>
      <CopyBlock
        text={`<p>This is a paragraph.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="mt-5 mb-5">
        The <span className="font-bold">element</span> includes:
      </h2>
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li className="leading-8">
          The opening tag (
          <span className="bg-gray-200 rounded-md p-1">{"<p>"}</span>)
        </li>
        <li className="leading-8">
          The content (
          <span className="bg-gray-200 rounded-md p-1">
            {"This is a paragraph."}
          </span>
          )
        </li>
        <li className="leading-8">
          The closing tag (
          <span className="bg-gray-200 rounded-md p-1">{"</p>"}</span>)
        </li>
      </ul>
      <h2 className="font-bold mt-10">Attributes in Tags</h2>
      <Separator />
      <p className="mt-10 text-lg">
        Tags can also have <span className="font-bold">attributes</span>.
        Attributes provide additional information about an element. They are
        written inside the opening tag and usually come in{" "}
        <span className="font-bold">name-value pairs</span>.
      </p>
      <h2 className="font-bold mt-5 mb-5">Example of an Attribute:</h2>
      <CopyBlock
        text={`<a href="https://example.com">Visit Example</a>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="mt-5 mb-5">
        The <span className="font-bold">element</span> includes:
      </h2>
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<a>"}</span> is the tag
          for creating links.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"href"}</span> is the
          attribute that specifies the link’s destination.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">
            {'"https://example.com"'}
          </span>{" "}
          is the value of the <span className="font-bold">href</span> attribute.
        </li>
      </ul>
      <h2 className="font-bold mt-5 mb-5">Key Points About Attributes:</h2>
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li className="leading-8">
          Attributes are always written in the{" "}
          <span className="font-bold">opening tag</span>.
        </li>
        <li className="leading-8">
          Attribute values are enclosed in{" "}
          <span className="font-bold">quotation marks</span>.
        </li>
      </ul>
      <h2 className="font-bold mt-10">Types of Tags</h2>
      <Separator />
      <p className="mt-10 text-lg">
        Here are some common types of tags and what they do:
      </p>
      <h2 className="font-bold mt-5 mb-5">1. Structure Tags:</h2>
      <ul className="list-disc pl-5 mt-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<html>"}</span>: The
          root element of an HTML document.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<head>"}</span>:
          Contains metadata (information about the document).
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<body>"}</span>:
          Contains the visible content of the web page.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<div>"}</span>:
          Container for different tags.
        </li>
      </ul>
      <h2 className="font-bold mt-5 mb-5">2. Content Tags:</h2>
      <ul className="list-disc pl-5 mt-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<h1> / <h6>"}</span>:
          Headings (from largest to smallest).
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<p>"}</span>:
          Paragraphs.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<a>"}</span>: Links.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<img>"}</span>: Images.
        </li>
      </ul>
      <h2 className="font-bold mt-5 mb-5">3. Formatting Tags:</h2>
      <ul className="list-disc pl-5 mt-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<b>"}</span>: Bold
          text.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<i>"}</span>: Italic
          text.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<u>"}</span>:
          Underlined text.
        </li>
      </ul>
      <h2 className="font-bold mt-5 mb-5">4. Media Tags:</h2>
      <ul className="list-disc pl-5 mt-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<img>"}</span>:
          Displays images.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<video>"}</span>:
          Embeds videos.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<audio>"}</span>:
          Embeds audio files.
        </li>
      </ul>
      <h2 className="font-bold mt-5 mb-5">5. List Tags:</h2>
      <ul className="list-disc pl-5 mt-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<ul>"}</span>:
          Unordered list (bullets).
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<ol>"}</span>: Ordered
          list (numbers).
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<li>"}</span>: List
          item.
        </li>
      </ul>
      <h2 className="font-bold mt-10">Self-Closing Tags</h2>
      <Separator />
      <p className="mt-10 mb-5 text-lg">
        Some tags don’t have content or a closing tag. These are called
        <span className="font-bold"> self-closing tags</span>. Examples:
      </p>
      <CopyBlock
        text={`<img src="image.jpg" alt="A sample image">
<br> <!-- Adds a line break -->
<hr> <!-- Adds a horizontal line -->`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Nesting Elements</h2>
      <Separator />
      <p className="mt-10 mb-5 text-lg">
        Elements can be nested (placed inside other elements) to create more
        complex layouts. For example:
      </p>
      <CopyBlock
        text={`<div>
  <h1>Welcome!</h1>
  <p>This is a paragraph inside a div element.</p>
</div>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        The <span className="bg-gray-200 rounded-md p-1">{"<div>"}</span> tag
        contains both the{" "}
        <span className="bg-gray-200 rounded-md p-1">{"<h1>"}</span> and{" "}
        <span className="bg-gray-200 rounded-md p-1">{"<p>"}</span> elements.
      </p>
      <h2 className="font-bold mt-10">Practice</h2>
      <Separator />
      <h1 className="text-3xl font-bold">Welcome to HTML!</h1>
      <p>
        This is a paragraph with <span className="font-bold">bold</span> text
        and <span className="italic">italic</span> text.
      </p>
      <a
        className="text-blue-500"
        href="https://www.nextiva.com/"
        target="_blank"
      >
        Visit Example
      </a>
      <Image
        src="https://www.nextiva.com/wp-content/themes/nextiva-2024-v2/assets/images/nextiva-footer-logo.svg"
        width={100}
        height={30}
        alt="Sample Image"
      />
    </div>
  );
}

// <!DOCTYPE html>
// <html>
// <head>
//   <title>HTML Tags and Elements</title>
// </head>
// <body>
//   <h1>Welcome to HTML!</h1>
//   <p>This is a paragraph with <b>bold</b> text and <i>italic</i> text.</p>
//   <a href="https://example.com">Visit Example</a>
//   <img src="image.jpg" alt="Sample Image">
// </body>
// </html>

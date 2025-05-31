"use client";
import Separator from "@/components/Separator";
import { CopyBlock, dracula } from "react-code-blocks";
import Image from "next/image";

function Introduction() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">
        Welcome to JavaScript
      </h1>
      <Separator />
      <p className="mt-10 text-lg">
        JavaScript The Brain of the Web -{" "}
        <span className="font-bold">JavaScript is a programming language</span>
        that lets you make web pages interactive. If{" "}
        <span className="underline decoration-sky-500 font-bold">HTML</span> is
        the structure and{" "}
        <span className="underline decoration-pink-500 font-bold">CSS</span> is
        the style, then{" "}
        <span className="underline decoration-purple-500 font-bold">
          JavaScript
        </span>{" "}
        is the behavior. Common uses of JavaScript include:
      </p>
      <ul className="list-decimal pl-5 mt-5">
        <li className="leading-8">Showing pop-up messages (alerts)</li>
        <li className="leading-8">
          Changing content on the page without refreshing
        </li>
        <li className="leading-8">Creating image sliders or animations</li>
        <li className="leading-8">
          Validating form inputs (e.g., checking if a password is long enough)
        </li>
        <li>Building entire web apps like Google Docs or Gmail</li>
      </ul>
      <h2 className="font-bold mt-10">How JavaScript Works in the Browser</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">
        When a user opens a web page in a browser like Chrome or Firefox:
      </p>
      <ul className="list-decimal pl-5 mt-5">
        <li className="leading-8">
          The <span className="font-bold">browser reads the HTML</span>, which
          structures the page.
        </li>
        <li className="leading-8">
          It then applies <span className="font-bold">CSS to style it</span>.
        </li>
        <li className="leading-8">
          Finally, it <span className="font-bold">runs the JavaScript</span>,
          which controls how the page behaves.
        </li>
      </ul>
      <p className="mt-5 text-lg">
        JavaScript runs <span className="font-bold">inside the browser</span>,
        meaning there&apos;s no need to install anything special to use it—it
        just works in your browser window.
      </p>
      <Image
        src="/js.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <h2 className="font-bold mt-10">Ways to Apply JavaScript</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">
        Similar to CSS, JavaScript has multiple placement options.
      </p>
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li>
          <span className="font-bold">Inline</span> in an HTML tag:
        </li>
      </ul>
      <CopyBlock
        text={`<script>
  alert("Hello from JavaScript!");
</script>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <ul className="list-disc pl-5 mt-5 mb-5">
        <li>
          <span className="font-bold">External</span> file linked to HTML:
        </li>
      </ul>
      <CopyBlock
        text={`<script src="script.js"></script>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Core concepts to keep in mind</h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5">
        <li className="leading-8">
          <span className="font-bold">Interpreted language:</span> JavaScript
          doesn’t need to be compiled. The browser reads and runs it
          immediately.
        </li>
        <li className="leading-8">
          <span className="font-bold">Single-threaded:</span> It runs one line
          of code at a time, from top to bottom..
        </li>
        <li className="leading-8">
          <span className="font-bold">Event-driven:</span> avaScript listens for
          things like clicks, scrolls, or form submissions and responds to them.
        </li>
      </ul>
    </div>
  );
}

export default Introduction;

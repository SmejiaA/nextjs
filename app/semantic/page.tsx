"use client";
import Separator from "@/components/Separator";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Semantic() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">Semantic HTML</h1>
      <Separator />
      <p className="mt-10 text-lg">
        Semantic HTML is a way of writing HTML that focuses on the{" "}
        <span className="underline decoration-sky-500 font-bold">meaning</span>{" "}
        of the content, not just how it looks. When you use semantic HTML, you
        choose tags that describe the role or purpose of the content on your
        webpage. This makes your code easier to read, improves accessibility,
        and helps search engines understand your content better.
      </p>
      <h2 className="font-bold mt-10">What Does &quot;Semantic&quot; Mean?</h2>
      <Separator />
      <p className="mt-10 text-lg">
        The word &quot;semantic&quot; refers to{" "}
        <span className="font-bold">meaning</span>. In web development, semantic
        HTML means using HTML tags that have{" "}
        <span className="font-bold">descriptive names</span> and{" "}
        <span className="font-bold">specific purposes</span>.
      </p>
      <h2 className="mt-5 mb-5">For example:</h2>
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li className="leading-8">
          A <span className="bg-gray-200 rounded-md p-1">{"<header>"}</span> tag
          is used for the top section of a webpage.
        </li>
        <li className="leading-8">
          A <span className="bg-gray-200 rounded-md p-1">{"<footer>"}</span> tag
          is used for the bottom section of a webpage.
        </li>
      </ul>
      <p className="mt-10 text-lg">
        Non-semantic tags (like{" "}
        <span className="bg-gray-200 rounded-md p-1">{"<div>"}</span> and{" "}
        <span className="bg-gray-200 rounded-md p-1">{"<span>"}</span>) don’t
        tell you anything about the content inside them. Semantic tags, on the
        other hand, describe the role of the content.
      </p>
      <h2 className="font-bold mt-10">Why Use Semantic HTML?</h2>
      <Separator />
      <h2 className="font-bold mt-5 mb-5">1. Improves Accessibility:</h2>
      <ul className="list-disc pl-5 mt-5">
        <li className="leading-8">
          Screen readers (used by visually impaired users) can better navigate
          and understand the page structure when semantic tags are used.
        </li>
        <li className="leading-8">
          For example, a{" "}
          <span className="bg-gray-200 rounded-md p-1">{"<nav>"}</span>: tag
          tells the screen reader that this section contains navigation links.
        </li>
      </ul>
      <h2 className="font-bold mt-5 mb-5">
        2. Better SEO (Search Engine Optimization):
      </h2>
      <ul className="list-disc pl-5 mt-5">
        <li className="leading-8">
          Search engines like Google use semantic tags to understand the
          structure and importance of your content. This can improve your search
          rankings.
        </li>
      </ul>
      <h2 className="font-bold mt-5 mb-5">3. Easier to Maintain:</h2>
      <ul className="list-disc pl-5 mt-5">
        <li className="leading-8">
          Semantic HTML makes your code more organized and easier to read for
          other developers (or your future self!).
        </li>
      </ul>
      <h2 className="font-bold mt-5 mb-5">4. Consistent Styling:</h2>
      <ul className="list-disc pl-5 mt-5">
        <li className="leading-8">
          Semantic tags provide a clear structure, making it easier to apply CSS
          styles consistently across your site.
        </li>
      </ul>
      <h2 className="font-bold mt-10">Common Semantic Tags</h2>
      <Separator />
      <p className="mt-10 text-lg">
        Here’s a list of commonly used semantic HTML5 tags and their purposes:
      </p>
      <h2 className="font-bold mt-5 mb-5">1. Structural Tags:</h2>
      <ul className="list-decimal pl-5 mt-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<header>"}</span>:
          Represents a page or section header. Often contains navigation menus,
          logos, or titles.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<footer>"}</span>:
          Represents the footer for a page or section. Typically contains
          copyright information, links, or contact details.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<main>"}</span>:
          Represents the main content of the document. There should only be one{" "}
          <span className="bg-gray-200 rounded-md p-1">{"<main>"}</span> tag per
          page.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<section>"}</span>:
          Represents a thematic grouping of content, often with a heading.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<article>"}</span>:
          Represents a self-contained piece of content, like a blog post or news
          article.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<aside>"}</span>:
          Represents content related to the main content, such as a sidebar or
          advertisement.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<nav>"}</span>:
          Represents a navigation menu for links to other parts of the website
          or page.
        </li>
      </ul>
      <h2 className="font-bold mt-5 mb-5">2. Text-Level Tags:</h2>
      <ul className="list-decimal pl-5 mt-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<mark>"}</span>:
          Highlights or marks text {"(e.g., search results)"}.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<time>"}</span>:
          Represents a specific time or date.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<abbr>"}</span>:
          Represents an abbreviation or acronym, with an optional full form.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<cite>"}</span>:
          Represents the title of a work or reference.
        </li>
      </ul>
      <h2 className="font-bold mt-5 mb-5">3. Multimedia Tags:</h2>
      <ul className="list-decimal pl-5 mt-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<figure>"}</span>:
          Represents self-contained content, like images, charts, or
          illustrations.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<figcaption>"}</span>:
          Provides a caption for the{" "}
          <span className="bg-gray-200 rounded-md p-1">{"<figure>"}</span>{" "}
          element
        </li>
      </ul>
      <h2 className="font-bold mt-10">Practice</h2>
      <Separator />
      <p className="mt-10 mb-5 text-lg">
        Create a basic webpage using semantic HTML tags. Include::
      </p>
      <CopyBlock
        text={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semantic HTML Example</title>
</head>
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>About Us</h2>
      <p>We are dedicated to creating amazing web experiences.</p>
    </section>
    <article>
      <h2>Our Latest Blog Post</h2>
      <p>This is a self-contained piece of content, perfect for a blog post.</p>
    </article>
  </main>

  <footer>
    <p>&copy; 2025 My Website. All rights reserved.</p>
  </footer>
</body>
</html>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <p className="mt-10 mb-5 text-lg">
        By using semantic HTML, you’re not just coding—you’re creating
        meaningful, well-structured web pages that are easier for both humans
        and machines to understand!
      </p>
    </div>
  );
}

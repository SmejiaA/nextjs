"use client";
import Separator from "@/components/Separator";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Introduction() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">
        Welcome to the HTML Tutorial
      </h1>
      <Separator />
      <p className="mt-10 text-lg">
        Imagine you want to build your own website. How do you tell the computer
        what to display? That’s where{" "}
        <a className="underline decoration-sky-500 font-bold">HTML</a> comes in!
        HTML stands for{" "}
        <a className="underline decoration-pink-500 font-bold">
          HyperText Markup Language
        </a>
        , and it’s the main language used to create web pages.
      </p>
      <h2 className="font-bold mt-10">
        Why is HTML important in web development?
      </h2>
      <Separator />
      <p className="mt-5 text-lg">
        HTML is the base layer of every website. It:
      </p>
      <ul className="list-decimal pl-5 mt-5">
        <li>
          <a className="font-bold">Defines Content:</a> HTML tells the browser
          what text, images, and links to display.
        </li>
        <li>
          <a className="font-bold">Creates Structure:</a> It organizes your
          content into headings, paragraphs, lists, and more.
        </li>
        <li>
          <a className="font-bold">Works with Other Tools:</a> HTML works
          alongside CSS (for styling) and JavaScript (for interactivity) to
          create the websites we use every day.
        </li>
      </ul>
      <p className="mt-10 text-lg">
        For example: HTML says, &quot;This is a heading.&quot; CSS says,
        &quot;Make the heading blue and bold.&quot; JavaScript says, &quot;When
        you click the heading, show a pop-up!&quot;
      </p>
      <h2 className="font-bold mt-10">Basic Structure of an HTML Document</h2>
      <Separator />
      <p className="mt-5 mb-5 text-lg">
        Here’s the &quot;skeleton&quot; of a simple HTML document:
      </p>
      <CopyBlock
        text={`<!DOCTYPE html>
<!-- Hello World in HTML -->
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my very first web page! Isn't it cool?</p>
</body>
</html>
      `}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">What’s Happening Here?</h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">
            {"<!DOCTYPE html>"}
          </span>
          : This tells the browser, &quot;Hey, I’m writing an HTML
          document!&quot;
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<html>"}</span>: This
          is the container for all your HTML content. It’s like the
          &quot;root&quot; of your web page.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<head>"}</span>: This
          is where you put information about your page, like its title or links
          to other resources (e.g., CSS files).
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<title>"}</span>: This
          sets the title that appears on the browser tab.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"<body>"}</span>: This
          is where all the visible content goes, like text, images, and links.
        </li>
      </ul>
    </div>
  );
}

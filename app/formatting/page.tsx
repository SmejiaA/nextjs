"use client";
import Separator from "@/components/Separator";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Formatting() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">
        Text Formatting Tags in HTML
      </h1>
      <Separator />
      <p className="mt-10 text-lg">
        <span className="underline decoration-sky-500 font-bold">
          Formatting
        </span>{" "}
        is the process of arranging and organizing content in a way that
        enhances its readability and visual appeal.
      </p>
      <p className="mt-10 text-lg">
        Text formatting tags in HTML are used to style and highlight text in
        different ways. These tags help you define the importance of text,
        emphasize certain sections, or apply basic styling like bold or italic.
        Here’s a list of commonly used text formatting tags in HTML:
      </p>
      <h2 className="font-bold mt-10">
        <span>{"<b>"}</span> - Bold Text
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          <a>
            Makes the text <span className="font-bold">bold</span>
          </a>
        </li>
        <li>Used for stylistic purposes without adding special importance.</li>
      </ul>
      <CopyBlock
        text={`<p>This is a <b>bold</b> word.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<strong>"}</span> - Strong Importance
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          <a>
            Makes the text <span className="font-bold">bold</span> but also adds
            semantic importance.
          </a>
        </li>
        <li>Used to indicate that the content is critical or important.</li>
      </ul>
      <CopyBlock
        text={`<p>This is a <strong>very important</strong> statement.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<i>"}</span> - Italic Text
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          <a>
            Makes the text <span className="italic">italic.</span>
          </a>
        </li>
        <li>
          Used for stylistic purposes, such as marking technical terms or
          foreign words.
        </li>
      </ul>
      <CopyBlock
        text={`<p>This word is in <i>italic</i>.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<em>"}</span> - Emphasized Text
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          <a>
            Makes the text <em>italic</em> and adds emphasis.
          </a>
        </li>
        <li>
          Used to indicate that the text should be stressed or has special
          meaning.
        </li>
      </ul>
      <CopyBlock
        text={`<p>This is an <em>important</em> point.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<mark>"}</span> - Highlighted Text
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          <a>
            <mark>
              Highlights text with a yellow background (like a marker).
            </mark>
          </a>
        </li>
        <li>Useful for drawing attention to specific text.</li>
      </ul>
      <CopyBlock
        text={`<p>This word is <mark>highlighted</mark>.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<small>"}</span> - Small Text
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          <a>
            Makes the text <small>smaller</small> than the surrounding text.
          </a>
        </li>
        <li>Often used for disclaimers or secondary information.</li>
      </ul>
      <CopyBlock
        text={`<p>This is <small>small text</small>.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<del>"}</span> - Deleted Text
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          <a>
            Strikes <del>through</del> the text to indicate deletion.
          </a>
        </li>
      </ul>
      <CopyBlock
        text={`<p>This text is <del>deleted</del>.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<sub> / <sup>"}</span> - Subscript Text / Superscript Text
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          <a>Displays text as subscript (lower and smaller).</a>
        </li>
        <li>
          <a>Displays text as superscript (higher and smaller).</a>
        </li>
      </ul>
      <CopyBlock
        text={`<p>Water formula is H<sub>2</sub>O.</p>
<p>E=mc<sup>2</sup></p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<u>"}</span> - Underlined Text
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          Underlines <u>text</u>.
        </li>
      </ul>
      <CopyBlock
        text={`<p>This text is <u>underlined</u>.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<code>"}</span> - Inline Code
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          Displays text in a monospaced font to represent code.{" "}
          <code>{"console.log('Hello world!');"}</code>
        </li>
      </ul>
      <CopyBlock
        text={`<p>Use the <code>print()</code> function to display text in Python.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<pre>"}</span> - Preformatted Text
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          Preserves white spaces, line breaks, and indentation exactly as
          written
        </li>
      </ul>
      <CopyBlock
        text={`<pre>
Line 1
    Line 2 (Indented)
Line 3
</pre>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<q>"}</span> - Inline Quotation
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>Adds quotation marks around the text.</li>
      </ul>
      <CopyBlock
        text={`<p>She said, <q>Hello, world!</q></p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<blockquote>"}</span> - Block Quotation
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>Used for longer quotes, typically indented.</li>
      </ul>
      <CopyBlock
        text={`<blockquote>
    This is a block of quoted text.
</blockquote>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<abbr>"}</span> - Abbreviation
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          Represents an abbreviation or acronym, with the full form displayed on
          hover.
        </li>
      </ul>
      <CopyBlock
        text={`<p>The <abbr title="World Health Organization">WHO</abbr> is responsible for global health.</p>`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<cite>"}</span> - Citation
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>Used to cite a reference or title of a work.</li>
      </ul>
      <CopyBlock
        text={`<p><cite>The Great Gatsby</cite> is my favorite book.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<kbd>"}</span> - Keyboard Input
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>Represents user input from a keyboard or other input device.</li>
      </ul>
      <CopyBlock
        text={`<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        <span>{"<s>"}</span> - Strikethrough (Stylistic)
      </h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li>
          Strikes through text for stylistic purposes (not semantic deletion).
        </li>
      </ul>
      <CopyBlock
        text={`<p>This is <s>incorrect</s> but still visible.</p>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Summary</h2>
      <Separator />
      <p className="mt-10 text-lg">
        These tags allow you to format text in HTML for both visual appearance
        and semantic meaning, helping to improve accessibility, readability, and
        overall user experience on your web page.
      </p>
      <h2 className="font-bold mt-10">Practice</h2>
      <Separator />
      <p className="mt-10 text-lg">
        &quot;<strong>The only limit to our realization of tomorrow</strong>
        <em>is our doubts of today.&quot;</em>
        <br />
        <small>- Franklin D. Roosevelt</small>
        <br />
        <mark>Note:</mark> This quote <u>emphasizes</u> the importance of{" "}
        <b>overcoming self-doubt</b> and{" "}
        <i>believing in one&apos;s potential</i>.
      </p>
    </div>
  );
}

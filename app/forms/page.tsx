"use client";
import Separator from "@/components/Separator";
import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Tags() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-shadow-sm">
        Forms and Input Types
      </h1>
      <Separator />
      <p className="mt-10 text-lg">
        Forms are a fundamental part of HTML and web development. They allow
        users to input data (e.g., text, passwords, or files) and send it to a
        server for processing. This lesson will cover the basics of forms,
        different input types, and how to structure forms effectively.
      </p>
      <h2 className="font-bold mt-10">What is a Form?</h2>
      <Separator />
      <p className="mt-10 text-lg">
        A <span className="underline decoration-sky-500 font-bold">form</span>{" "}
        in HTML is a container for various input elements, such as text fields,
        checkboxes, radio buttons, and submit buttons. Forms are defined using
        the <span className="bg-gray-200 rounded-md p-1">{"<form>"}</span> tag.
      </p>
      <h2 className="font-bold mt-5 mb-5">Example of a Basic Form:</h2>
      <CopyBlock
        text={`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>`}
        language="html"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
      <h2 className="font-bold mt-5 mb-5">
        Key Attributes of the{" "}
        <span className="bg-gray-200 rounded-md p-1">{"<form>"}</span> Tag:
      </h2>
      <ul className="list-decimal pl-5 mt-5">
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"action"}</span>:
          Specifies the URL where the form data will be sent.
        </li>
        <li className="leading-8">
          <span className="bg-gray-200 rounded-md p-1">{"method"}</span>:
          Defines how the data is sent.
        </li>
      </ul>
      <h2 className="font-bold mt-10">Input Types</h2>
      <Separator />
      <p className="mt-10 text-lg">
        The <span className="bg-gray-200 rounded-md p-1">{"<input>"}</span> tag
        is the core element for collecting user input. It can take many
        different types depending on the data you want to collect.
      </p>
      <h2 className="font-bold mt-10">
        1. Text Input (
        <span className="bg-gray-200 rounded-md p-1">
          type=&quot;text&quot;
        </span>
        )
      </h2>
      <p className="mt-5 mb-5 text-lg">
        Used to collect single-line text input.
      </p>
      <CopyBlock
        text={`<label for="username">Username:</label>
<input type="text" id="username" name="username" placeholder="Enter your username">`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        2. Password Input (
        <span className="bg-gray-200 rounded-md p-1">
          type=&quot;password&quot;
        </span>
        )
      </h2>
      <p className="mt-5 mb-5 text-lg">
        Masks the input for sensitive data (e.g., passwords).
      </p>
      <CopyBlock
        text={`<label for="password">Password:</label>
<input type="password" id="password" name="password">`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        3. Email Input (
        <span className="bg-gray-200 rounded-md p-1">
          type=&quot;email&quot;
        </span>
        )
      </h2>
      <p className="mt-5 mb-5 text-lg">
        Validates that the input is a properly formatted email address.
      </p>
      <CopyBlock
        text={`<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="example@domain.com">`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        4. Number Input (
        <span className="bg-gray-200 rounded-md p-1">
          type=&quot;number&quot;
        </span>
        )
      </h2>
      <p className="mt-5 mb-5 text-lg">
        Allows only numeric input with optional constraints (e.g., min, max).
      </p>
      <CopyBlock
        text={`<label for="age">Age:</label>
<input type="number" id="age" name="age" min="1" max="100">`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        5. Date Input (
        <span className="bg-gray-200 rounded-md p-1">
          type=&quot;date&quot;
        </span>
        )
      </h2>
      <p className="mt-5 mb-5 text-lg">
        Provides a date picker in modern browsers
      </p>
      <CopyBlock
        text={`<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="dob">`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        6. Checkbox (
        <span className="bg-gray-200 rounded-md p-1">
          type=&quot;checkbox&quot;
        </span>
        )
      </h2>
      <p className="mt-5 mb-5 text-lg">
        Allows users to select one or more options.
      </p>
      <CopyBlock
        text={`<label>
  <input type="checkbox" name="subscribe" value="yes"> Subscribe to Newsletter
</label>`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        7. Radio Buttons (
        <span className="bg-gray-200 rounded-md p-1">
          type=&quot;radio&quot;
        </span>
        )
      </h2>
      <p className="mt-5 mb-5 text-lg">
        Allows users to select <span className="font-bold">one option</span>{" "}
        from a group.
      </p>
      <CopyBlock
        text={`<p>Gender:</p>
<label>
  <input type="radio" name="gender" value="male"> Male
</label>
<label>
  <input type="radio" name="gender" value="female"> Female
</label>`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">
        8. File Input (
        <span className="bg-gray-200 rounded-md p-1">
          type=&quot;file&quot;
        </span>
        )
      </h2>
      <p className="mt-5 mb-5 text-lg">Allows users to upload files.</p>
      <CopyBlock
        text={`<label for="resume">Upload Resume:</label>
<input type="file" id="resume" name="resume">`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Other Form Elements</h2>
      <Separator />
      <p className="mt-10 text-lg">
        In addition to <span className="font-bold">{"<input>"}</span>, forms can
        include other elements to enhance functionality:
      </p>
      <h2 className="font-bold mt-10">1. Textarea</h2>
      <p className="mt-5 mb-5 text-lg">For multi-line text input.</p>
      <CopyBlock
        text={`<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50"></textarea>`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">2. Select Dropdown</h2>
      <p className="mt-5 mb-5 text-lg">
        For selecting an option from a dropdown menu.
      </p>
      <CopyBlock
        text={`<label for="country">Country:</label>
<select id="country" name="country">
  <option value="usa">USA</option>
  <option value="canada">Canada</option>
  <option value="mx">MEX</option>
</select>`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">3. Button</h2>
      <p className="mt-5 mb-5 text-lg">For submitting or resetting forms.</p>
      <CopyBlock
        text={`<button type="submit">Submit</button>
<button type="reset">Reset</button>`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Validation and Constraints</h2>
      <Separator />
      <p className="mt-10 text-lg">
        HTML provides attributes to validate input and set constraints without
        using JavaScript.
      </p>
      <p className="mt-5 mb-5 text-lg">
        1. <span className="bg-gray-200 rounded-md p-1">required</span>: Ensures
        the user fills out the field.
      </p>
      <CopyBlock
        text={`<input type="text" name="name" required>`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        2. <span className="bg-gray-200 rounded-md p-1">maxlength</span>: Limits
        the maximum number of characters.
      </p>
      <CopyBlock
        text={`<input type="text" name="name" maxlength="50">`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        3. <span className="bg-gray-200 rounded-md p-1">pattern</span>: Defines
        a regular expression for validation.
      </p>
      <CopyBlock
        text={`<input type="text" name="zipcode" pattern="[0-9]{5}">`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        4. <span className="bg-gray-200 rounded-md p-1">placeholder</span>:
        Displays a hint inside the input field.
      </p>
      <CopyBlock
        text={`<input type="text" name="name" placeholder="Enter your name">`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <p className="mt-5 mb-5 text-lg">
        5. <span className="bg-gray-200 rounded-md p-1">autofocus</span>:
        Automatically focuses on the input field when the page loads.
      </p>
      <CopyBlock
        text={`<input type="text" name="name" autofocus>`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Practice</h2>
      <Separator />
      <CopyBlock
        text={`<form action="/submit" method="POST">
  <h2>Registration Form</h2>
  
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>
  
  <label for="dob">Date of Birth:</label>
  <input type="date" id="dob" name="dob">
  
  <label for="gender">Gender:</label>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>
  
  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="usa">USA</option>
    <option value="canada">Canada</option>
    <option value="uk">UK</option>
  </select>
  
  <label for="subscribe">
    <input type="checkbox" id="subscribe" name="subscribe" value="yes"> Subscribe to our newsletter
  </label>
  
  <button type="submit">Register</button>
</form>`}
        language="html"
        wrapLongLines
        showLineNumbers={true}
        theme={dracula}
      />
      <h2 className="font-bold mt-10">Summary</h2>
      <Separator />
      <ul className="list-decimal pl-5 mt-5 mb-5">
        <li className="leading-8">
          Forms are created using the{" "}
          <span className="bg-gray-200 rounded-md p-1">{"<form>"}</span> tag and
          are used to collect user data.
        </li>
        <li className="leading-8">
          Input fields (
          <span className="bg-gray-200 rounded-md p-1">{"<input>"}</span>) and
          other elements like{" "}
          <span className="bg-gray-200 rounded-md p-1">{"<textarea>"}</span> and{" "}
          <span className="bg-gray-200 rounded-md p-1">{"<select>"}</span> allow
          users to provide information.
        </li>
        <li className="leading-8">
          HTML5 introduces a variety of input types for specific data (e.g.,
          email, date, color).
        </li>
        <li className="leading-8">
          Validation attributes like <span className="font-bold">required</span>{" "}
          and <span className="font-bold">pattern</span> help ensure proper
          input without needing JavaScript.
        </li>
      </ul>
    </div>
  );
}

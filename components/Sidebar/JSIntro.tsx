import { getLinks } from "@/constants/utils";
import Link from "next/link";

export default function HtmlIntro() {
  const htmlLinks = getLinks("JS");

  if (!htmlLinks) {
    return null;
  }
  const { subLinks } = htmlLinks;

  return (
    <>
      <ul className="mt-5 mb-5 space-y-2 pl-4">
        {subLinks?.map((link, index) => (
          <li key={index}>
            <Link
              href="#"
              className="block text-lg text-gray-500/25 disabled:opacity-50 cursor-not-allowed"
              aria-disabled="true"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

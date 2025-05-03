import { getLinks } from "@/constants/utils";
import Link from "next/link";

export default function HtmlIntro() {
  const htmlLinks = getLinks("HTML");

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
              href={link.url}
              className="block text-lg hover:text-blue-500 text-gray-600"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

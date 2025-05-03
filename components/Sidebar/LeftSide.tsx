import HtmlIntro from "./HtmlIntro";
import CSSIntro from "./CSSIntro";
import JSIntro from "./JSIntro";

export function LeftSidebar() {
  return (
    <div className="pt-2 bg-white shadow-sm left-sidebar">
      <div className="p-4 bg-blue-500 text-white text-center text-lg font-semibold">
        HTML
      </div>
      <HtmlIntro />
      <div className="p-4 bg-gray-500/20 text-gray-600 text-center text-lg font-semibold">
        CSS
      </div>
      <CSSIntro />
      <div className="p-4 bg-gray-500/20 text-gray-600 text-center text-lg font-semibold">
        JavaScript
      </div>
      <JSIntro />
    </div>
  );
}

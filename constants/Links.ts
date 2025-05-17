const LINK = {
  HTML: "HTML",
  CSS: "CSS",
  JS: "JavaScript",
} as const;

type Link_Title = (typeof LINK)[keyof typeof LINK];
export type Link_Type = keyof typeof LINK;

type Link_Interface = {
  description: Link_Title;
  enabled: boolean;
  subLinks?: Array<Record<string, string>>;
};

export const LINK_MAP: Map<Link_Type, Link_Interface> = new Map([
  [
    "HTML",
    {
      description: LINK.HTML,
      enabled: true,
      subLinks: [
        {
          title: "Introduction to HTML",
          url: "/introduction",
        },
        {
          title: "Tags and Elements",
          url: "/tags",
        },
        {
          title: "Text Formatting Tags",
          url: "/formatting",
        },
        {
          title: "Semantic Elements",
          url: "/semantic",
        },
        {
          title: "Forms and Input Types",
          url: "/forms",
        },
      ],
    },
  ],
  [
    "CSS",
    {
      description: LINK.CSS,
      enabled: true,
      subLinks: [
        {
          title: "Introduction to CSS",
          url: "/css/introduction",
        },
        {
          title: "CSS Selectors and Combinators",
          url: "/css/selectors",
        },
        {
          title: "Colors and Units",
          url: "/css/colors",
        },
        {
          title: "The Box Model",
          url: "/css/box",
        },
        { title: "Backgrounds and Borders", url: "/css/backgrounds" },
      ],
    },
  ],
  [
    "JS",
    {
      description: LINK.JS,
      enabled: false,
      subLinks: [
        {
          title: "Introduction to JavaScript",
          url: "/introduction",
        },
        {
          title: "More to come...",
          url: "/variables",
        },
      ],
    },
  ],
]);

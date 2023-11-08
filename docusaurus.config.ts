import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {
  themes: { github: lightCodeTheme, dracula: darkCodeTheme },
} = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: "Test the Web",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://bitwarden.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // @TODO temporary routing fix
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bitwarden", // Usually your GitHub org/user name.
  projectName: "test-the-web", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          breadcrumbs: false,
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    // experimental: inline HTML in `.mdx` files will be treated as JSX; `.md` files will preserve raw HTML
    // see: https://docusaurus.io/docs/markdown-features/react#markdown-and-jsx-interoperability
    format: "detect",
    // "Docusaurus v3 comes with MDX v1 compatibility options, that are turned on by default."
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: false,
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Test the Web:",
        logo: {
          alt: "Test the Web Logo",
          src: "inlineSVG",
          width: 32,
          height: 32,
          className: "custom-navbar-logo-class",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "formsSidebar",
            position: "left",
            label: "Forms",
          },
          {
            type: "custom-githubIcon",
            href: "https://github.com/bitwarden/test-the-web",
            height: 24,
            width: 24,
            label: "website source at Github",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Bitwarden Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    } satisfies Preset.ThemeConfig,
};

export default config;

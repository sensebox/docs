// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const collapse = require("remark-collapse");

require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "senseBox Docs",
  tagline: "",
  url: "https://kb.sensebox.de",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sensebox", // Usually your GitHub org/user name.
  projectName: "docs.sensebox.de", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
  },
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          remarkPlugins: [[collapse, { test: "tango" }]],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/sensebox/knowledge-base/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "senseBox Docs",
        logo: {
          alt: "senseBox Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "arduino/first-steps",
            position: "left",
            label: "Get started",
          },
          {
            type: "doc",
            docId: "tutorials/first-steps",
            position: "left",

            label: "Videos",
          },
          {
            href: "www.sensebox.de",
            position: "left",
            label: "senseBox.de",
          },
          {
            href: "https://github.com/sensebox/knowledge-base",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      customFields: {
        setBoardVersion: (version) => {
          console.log(version);
        },
      },
      algolia: {
        appId: process.env.ALGOLIA_APPID,
        apiKey: process.env.ALGOLIA_APIKEY,
        indexName: process.env.ALGOLIA_INDEXNAME,
      },
      prism: {
        theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
        additionalLanguages: ["arduino"],
      },
    }),
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer')
const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula
const collapse = require('remark-collapse')
const eduSidebar = require('./sidebars/eduSidebar')
const eduS2Sidebar = require('./sidebars/eduS2Sidebar')
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'senseBox Docs',
  tagline: '',
  url: 'https://kb.sensebox.de',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sensebox', // Usually your GitHub org/user name.
  projectName: 'docs.sensebox.de', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      de: {
        label: 'Deutsch',
      },
    },
  },
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          remarkPlugins: [[collapse, { test: 'tango' }]],
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/sensebox/knowledge-base/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'senseBox Docs',
      logo: {
        alt: 'senseBox Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      items: [
        {
          href: 'https://www.sensebox.de',
          position: 'left',
          label: 'senseBox.de',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/sensebox/knowledge-base',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `© senseBox 2024. All rights reserved.`,
      links: [
        {
          title: 'Materials',
          items: [
            {
              label: 'Impressum',
              to: 'https://sensebox.de/de/imprint',
            },
            {
              label: 'openSenseMap',
              to: 'https://opensensemap.org/impressum',
            },
            {
              label: 'FAQ',
              to: '/docs/misc/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              to: 'https://forum.sensebox.de',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/sensebox',
            },
            {
              label: 'Support',
              to: 'https://sensebox.de/de/contact',
            },
          ],
        },
      ],
    },
    algolia: {
      appId: process.env.ALGOLIA_APPID,
      apiKey: process.env.ALGOLIA_APIKEY,
      indexName: process.env.ALGOLIA_INDEXNAME,
    },
  }),
}

module.exports = config

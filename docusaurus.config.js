// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Musson Industrial',
  tagline: 'Public Documentation Home',
  url: 'https://docs.mussonindustrial.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mussonindustrial', // Usually your GitHub org/user name.
  projectName: 'public-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // add @theme/ApiItem here
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          cdn: { // "petstore" is considered the <id> that you will reference in the CLI
            specPath: "https://cdn.mussonindustrial.com/openapi.json", // path or URL to the OpenAPI spec
            outputDir: "docs/api/cdn", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
            },
            template: "api.mustache"
          }
        }
      },
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"], // exports ApiItem and ApiDemoPanel
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Musson Industrial',
        logo: {
          alt: 'Musson Industrial Emblem',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'dropdown',
            label: 'Ignition Modules',
            position: 'left',
            items: [
              {
                label: 'BarTender Drivers',
                to: 'docs/ignition-modules/bartender'
              }
            ]
          },
          {
            type: 'dropdown',
            label: 'API',
            position: 'left',
            items: [
              {
                label: 'CDN',
                to: 'docs/category/musson-industrial-cdn-api'
              }
            ]
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://mussonindustrial.com/downloads',
            label: 'Downloads',
            position: 'right',
          },
          {
            href: 'https://mussonindustrial.com/sales',
            label: 'Sales',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Ignition Modules',
            items: [
              {
                label: 'BarTender Module',
                href: '/docs/ignition-modules/bartender',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mussonindustrial',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Musson Industrial`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['python', "ruby", "csharp", "php", "java"],
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
          variant: "http.client",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
          variant: "request",
        },
        // {
        //   highlight: "ruby",
        //   language: "ruby",
        //   logoClass: "ruby",
        // },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
          variant: "httpclient",
        },
        // {
        //   highlight: "php",
        //   language: "php",
        //   logoClass: "php",
        // },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
      ],
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: 'module_trials',
        content:
          'Download and try our modules today!',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
    }),
};

module.exports = config;

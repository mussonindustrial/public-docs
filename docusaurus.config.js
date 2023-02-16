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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
            type: 'doc',
            docId: 'ignition-modules/index',
            position: 'left',
            label: 'Ignition Modules',
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
        additionalLanguages: ['python'],
      },
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

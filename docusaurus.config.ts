import type {Config, PluginConfig} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import {themes as prismThemes} from 'prism-react-renderer';
const lightCodeTheme = prismThemes.nightOwlLight
const darkCodeTheme = prismThemes.dracula

const config: Config = {
  title: 'Musson Industrial',
  organizationName: 'mussonindustrial',
  projectName: 'public-docs',
  tagline: 'Public Documentation',
  url: 'https://docs.mussonindustrial.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'site',
        path: 'site',
        routeBasePath: '',
        sidebarPath: './site/sidebars.ts',
        sidebarCollapsible: false,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }
    ] satisfies PluginConfig,
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ignition-modules',
        path: 'ignition-modules',
        routeBasePath: 'ignition',
        sidebarPath: './ignition-modules/sidebars.ts',
        sidebarCollapsible: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }
    ],
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css'),
      },
    ] satisfies PluginConfig,
  ],

  themes: ["docusaurus-theme-openapi-docs"], // exports ApiItem and ApiDemoPanel
  themeConfig: {
      navbar: {
        title: 'Musson Industrial',
        logo: {
          alt: 'Musson Industrial Emblem',
          src: 'https://cdn.mussonindustrial.com/files/public/images/emblem.svg',
          srcDark: 'https://cdn.mussonindustrial.com/files/public/images/emblem.svg',
          height: 10,
          width: 45
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
                to: 'ignition/bartender'
              },
              {
                label: 'Embr Charts',
                to: 'ignition/embr-charts'
              },
              {
                label: 'Embr Periscope',
                to: 'ignition/embr-periscope'
              },
              {
                label: 'Embr Thermodynamics',
                to: 'ignition/embr-thermodynamics'
              }
            ],
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/mussonindustrial/embr/releases',
            label: 'Downloads',
            position: 'right',
          },
          {
            href: 'https://mussonindustrial.com/contact-us',
            label: 'Contact Us',
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
                label: 'Embr Charts',
                to: 'ignition/embr-charts'
              },
              {
                label: 'Embr Periscope',
                to: 'ignition/embr-periscope'
              },
              {
                label: 'Embr Thermodynamics',
                to: 'ignition/embr-thermodynamics'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About Us',
                href: 'https://mussonindustrial.com',
              },
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
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
          variant: "httpclient",
        },
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
      // announcementBar: {
      //   id: 'module_trials',
      //   content:
      //     'Download the new release of our BarTender Drivers Module!',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
    } satisfies Preset.ThemeConfig,
} satisfies Config;

export default config;

import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '54a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '482'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '88e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '581'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '06b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'fae'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '059'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3cf'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bfb'),
    routes: [
      {
        path: '/docs/ignition-modules/',
        component: ComponentCreator('/docs/ignition-modules/', '91c'),
        exact: true,
        sidebar: "ignitionModules"
      },
      {
        path: '/docs/ignition-modules/bartender/',
        component: ComponentCreator('/docs/ignition-modules/bartender/', '5d7'),
        exact: true,
        sidebar: "ignitionModules"
      },
      {
        path: '/docs/ignition-modules/bartender/connection-creation',
        component: ComponentCreator('/docs/ignition-modules/bartender/connection-creation', '18e'),
        exact: true
      },
      {
        path: '/docs/ignition-modules/bartender/connections/',
        component: ComponentCreator('/docs/ignition-modules/bartender/connections/', '2a9'),
        exact: true,
        sidebar: "ignitionModules"
      },
      {
        path: '/docs/ignition-modules/bartender/connections/tcp-socket',
        component: ComponentCreator('/docs/ignition-modules/bartender/connections/tcp-socket', 'ef5'),
        exact: true,
        sidebar: "ignitionModules"
      },
      {
        path: '/docs/ignition-modules/bartender/connections/web-service',
        component: ComponentCreator('/docs/ignition-modules/bartender/connections/web-service', '020'),
        exact: true,
        sidebar: "ignitionModules"
      },
      {
        path: '/docs/ignition-modules/bartender/installation',
        component: ComponentCreator('/docs/ignition-modules/bartender/installation', 'df4'),
        exact: true,
        sidebar: "ignitionModules"
      },
      {
        path: '/docs/ignition-modules/bartender/printing/',
        component: ComponentCreator('/docs/ignition-modules/bartender/printing/', '8f3'),
        exact: true,
        sidebar: "ignitionModules"
      },
      {
        path: '/docs/ignition-modules/bartender/printing/btxml',
        component: ComponentCreator('/docs/ignition-modules/bartender/printing/btxml', '8ce'),
        exact: true,
        sidebar: "ignitionModules"
      },
      {
        path: '/docs/ignition-modules/bartender/scripting/',
        component: ComponentCreator('/docs/ignition-modules/bartender/scripting/', '7c0'),
        exact: true,
        sidebar: "ignitionModules"
      },
      {
        path: '/docs/ignition-modules/bartender/scripting/runAsync',
        component: ComponentCreator('/docs/ignition-modules/bartender/scripting/runAsync', '731'),
        exact: true,
        sidebar: "ignitionModules"
      },
      {
        path: '/docs/ignition-modules/bartender/scripting/runBlocking',
        component: ComponentCreator('/docs/ignition-modules/bartender/scripting/runBlocking', '696'),
        exact: true,
        sidebar: "ignitionModules"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b1f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

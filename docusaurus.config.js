// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Bridging Digital Intelligence with the Physical World',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'Humanoid Robotics',
  projectName: 'physical-ai-humanoid-robotics',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
          path: 'docs',
          editUrl: 'https://github.com/yourusername/your-repo/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
     image: 'img/docusaurus-social-card.jpg',

      navbar: {
        title: '', 
        logo: {
          alt: 'Physical AI Logo',
          src: 'img/robot.png', 
          srcDark: 'img/robot.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/yourusername/physical-ai-humanoid-robotics', 
            label: 'GitHub',
            position: 'right',
          },
        ],
        style: 'dark',
        hideOnScroll: true,
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              { label: 'Introduction', to: '/docs/intro' },
              { label: 'Modules', to: '/docs/module1-ros2' },
              { label: 'Capstone Project', to: '/docs/capstone/overview' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'GitHub Repository', href: 'https://github.com/yourusername/physical-ai-humanoid-robotics' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: 'https://discord.gg/your-server-if-any' },
              { label: 'Twitter', href: 'https://twitter.com/yourhandle-if-any' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
      },

      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
        additionalLanguages: ['python', 'bash', 'json', 'yaml'],
      },
    }),
};

module.exports = config;
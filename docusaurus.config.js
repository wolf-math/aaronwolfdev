import { themes as prismThemes } from 'prism-react-renderer';
import math from 'remark-math';
import katex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aaron Wolf dev',
  tagline: 'development for everyone',
  favicon: 'images/wolf-logo_D5.png',
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://aaronwolf.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Source+Code+Pro:wght@500&display=swap'
  ],

  plugins: ['docusaurus-plugin-sass'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wolf-math', // Usually your GitHub org/user name.
  projectName: 'aaronwolfdev', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: 'https://github.com/wolf-math/aaronwolfdev/tree/main/'
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/wolf-math/aaronwolfdev/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn'
        },
        theme: {
          customCss: ['./src/css/custom.css']
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'images/wolf-logo_D5.png',
      colorMode: {
        respectPrefersColorScheme: true
      },
      navbar: {
        title: 'Aaron Wolf dev',
        logo: {
          alt: 'Wolf Logo',
          src: 'images/wolf-logo_D5.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/about', label: 'About', position: 'left' },
          { to: '/contact', label: 'Contact', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: 'docs/category/python-documentation'
              },
              {
                label: 'JavaScript Docs',
                to: 'docs/category/javascript-documentation'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Dev.to',
                href: 'https://dev.to/wolfmath'
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/wolf-math'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wolf-math'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aaron Wolf. 
        \n Built with Docusaurus.`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    })
};

export default config;

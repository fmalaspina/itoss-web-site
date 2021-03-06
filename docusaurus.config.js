// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ITOSS Operating IT Services',
  tagline: 'The tool to manage datacenter services',
  url: 'https://itoss-frsi.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  deploymentBranch: 'main',
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'itoss-frsi', // Usually your GitHub org/user name.
  projectName: 'itoss.ar', // Usually your repo name.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','es','pt'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Spanish',
      },
      pt: {
        label: 'Portuguese',
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
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
        title: '',
        logo: {
          alt: 'Itoss Site Logo',
          src: 'img/logo_itoss.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentos',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {to: '/contact', label: 'Contacto', position: 'left'},
          {to: '/nosotros', label: 'Nosotros', position: 'left'},
          
         /* {
            type: 'localeDropdown',
            position: 'left',
          },*/
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentos',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
             /* {
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'Contacto',
                to: '/contact',
              },
              {
                label: 'Nosotros',
                to: '/nosotros',
              }
            ],
          },
          
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} ITOSS Project.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    themes: [
      // ... Your other themes.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          // language: ["en", "zh"],
          indexDocs: true,
          indexPages: true,
          language: ["en", "es"],

          // ```
        },
      ],
    ],
    
    
};

module.exports = config;

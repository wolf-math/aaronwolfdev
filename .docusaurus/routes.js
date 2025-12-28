import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', 'bfe'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'd2d'),
    exact: true
  },
  {
    path: '/blog/adding-stoarge-linux',
    component: ComponentCreator('/blog/adding-stoarge-linux', '89c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/async-await',
    component: ComponentCreator('/blog/async-await', 'eec'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/wolf',
    component: ComponentCreator('/blog/authors/wolf', '1d7'),
    exact: true
  },
  {
    path: '/blog/authors/wolf/authors/2',
    component: ComponentCreator('/blog/authors/wolf/authors/2', 'ea8'),
    exact: true
  },
  {
    path: '/blog/encryption1',
    component: ComponentCreator('/blog/encryption1', 'f0a'),
    exact: true
  },
  {
    path: '/blog/encryption2',
    component: ComponentCreator('/blog/encryption2', '750'),
    exact: true
  },
  {
    path: '/blog/encryption3',
    component: ComponentCreator('/blog/encryption3', '115'),
    exact: true
  },
  {
    path: '/blog/encryption4',
    component: ComponentCreator('/blog/encryption4', '36f'),
    exact: true
  },
  {
    path: '/blog/new-site',
    component: ComponentCreator('/blog/new-site', '0e7'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', '815'),
    exact: true
  },
  {
    path: '/blog/promises-fetch',
    component: ComponentCreator('/blog/promises-fetch', '13f'),
    exact: true
  },
  {
    path: '/blog/react-dnd',
    component: ComponentCreator('/blog/react-dnd', 'ab6'),
    exact: true
  },
  {
    path: '/blog/samba-server-setup',
    component: ComponentCreator('/blog/samba-server-setup', 'a3a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/encryption',
    component: ComponentCreator('/blog/tags/encryption', '3d2'),
    exact: true
  },
  {
    path: '/blog/tags/javascript',
    component: ComponentCreator('/blog/tags/javascript', '4f4'),
    exact: true
  },
  {
    path: '/blog/tags/linux',
    component: ComponentCreator('/blog/tags/linux', 'afa'),
    exact: true
  },
  {
    path: '/blog/tags/python',
    component: ComponentCreator('/blog/tags/python', 'adc'),
    exact: true
  },
  {
    path: '/blog/tags/react',
    component: ComponentCreator('/blog/tags/react', '5fb'),
    exact: true
  },
  {
    path: '/blog/tags/ubuntu',
    component: ComponentCreator('/blog/tags/ubuntu', '6ef'),
    exact: true
  },
  {
    path: '/blog/temporal-datetime',
    component: ComponentCreator('/blog/temporal-datetime', 'e42'),
    exact: true
  },
  {
    path: '/blog/the-url-object',
    component: ComponentCreator('/blog/the-url-object', '234'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', '7ad'),
    exact: true
  },
  {
    path: '/home',
    component: ComponentCreator('/home', 'd87'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bda'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '634'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '46b'),
            routes: [
              {
                path: '/docs/category/coding-documentation',
                component: ComponentCreator('/docs/category/coding-documentation', '847'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/functions',
                component: ComponentCreator('/docs/category/functions', 'a6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/iterables',
                component: ComponentCreator('/docs/category/iterables', 'dcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/object-oriented-programming',
                component: ComponentCreator('/docs/category/object-oriented-programming', '102'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/python-documentation',
                component: ComponentCreator('/docs/category/python-documentation', '066'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/python-standard-library',
                component: ComponentCreator('/docs/category/python-standard-library', '71b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/types-variables-and-conditionals',
                component: ComponentCreator('/docs/category/types-variables-and-conditionals', '97d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/',
                component: ComponentCreator('/docs/coding/python/language_reference/', '269'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/bool',
                component: ComponentCreator('/docs/coding/python/language_reference/bool', 'cc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/built-in',
                component: ComponentCreator('/docs/coding/python/language_reference/built-in', 'a76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/byte',
                component: ComponentCreator('/docs/coding/python/language_reference/byte', 'c1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/bytearray',
                component: ComponentCreator('/docs/coding/python/language_reference/bytearray', '126'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/complex',
                component: ComponentCreator('/docs/coding/python/language_reference/complex', '67e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/coroutine',
                component: ComponentCreator('/docs/coding/python/language_reference/coroutine', '206'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/dict',
                component: ComponentCreator('/docs/coding/python/language_reference/dict', 'b94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/ellipsis',
                component: ComponentCreator('/docs/coding/python/language_reference/ellipsis', 'b7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/float',
                component: ComponentCreator('/docs/coding/python/language_reference/float', '3fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/frozenset',
                component: ComponentCreator('/docs/coding/python/language_reference/frozenset', '63e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/function',
                component: ComponentCreator('/docs/coding/python/language_reference/function', 'aec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/generator',
                component: ComponentCreator('/docs/coding/python/language_reference/generator', '9cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/int',
                component: ComponentCreator('/docs/coding/python/language_reference/int', '3a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/keywords',
                component: ComponentCreator('/docs/coding/python/language_reference/keywords', '18b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/list',
                component: ComponentCreator('/docs/coding/python/language_reference/list', 'ba6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/memoryview',
                component: ComponentCreator('/docs/coding/python/language_reference/memoryview', '058'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/method',
                component: ComponentCreator('/docs/coding/python/language_reference/method', '38f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/none',
                component: ComponentCreator('/docs/coding/python/language_reference/none', 'b7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/object',
                component: ComponentCreator('/docs/coding/python/language_reference/object', '659'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/range',
                component: ComponentCreator('/docs/coding/python/language_reference/range', 'e2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/set',
                component: ComponentCreator('/docs/coding/python/language_reference/set', 'f31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/slice',
                component: ComponentCreator('/docs/coding/python/language_reference/slice', '772'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/string',
                component: ComponentCreator('/docs/coding/python/language_reference/string', '005'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/tuple',
                component: ComponentCreator('/docs/coding/python/language_reference/tuple', '938'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/language_reference/type',
                component: ComponentCreator('/docs/coding/python/language_reference/type', '4d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/',
                component: ComponentCreator('/docs/coding/python/user_guide/', '150'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/functions/args_and_kwargs',
                component: ComponentCreator('/docs/coding/python/user_guide/functions/args_and_kwargs', '4db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/functions/basic_functions',
                component: ComponentCreator('/docs/coding/python/user_guide/functions/basic_functions', 'a3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/functions/decorators',
                component: ComponentCreator('/docs/coding/python/user_guide/functions/decorators', '5b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/functions/higher_order_functions',
                component: ComponentCreator('/docs/coding/python/user_guide/functions/higher_order_functions', '008'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/functions/lambda',
                component: ComponentCreator('/docs/coding/python/user_guide/functions/lambda', '667'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/iterables/comprehensions',
                component: ComponentCreator('/docs/coding/python/user_guide/iterables/comprehensions', '462'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/iterables/dictionaries',
                component: ComponentCreator('/docs/coding/python/user_guide/iterables/dictionaries', '041'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/iterables/for_loops',
                component: ComponentCreator('/docs/coding/python/user_guide/iterables/for_loops', '6d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/iterables/lists',
                component: ComponentCreator('/docs/coding/python/user_guide/iterables/lists', '495'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/iterables/ranges',
                component: ComponentCreator('/docs/coding/python/user_guide/iterables/ranges', '106'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/iterables/sequences',
                component: ComponentCreator('/docs/coding/python/user_guide/iterables/sequences', 'c36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/iterables/sets',
                component: ComponentCreator('/docs/coding/python/user_guide/iterables/sets', 'f8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/iterables/tuples',
                component: ComponentCreator('/docs/coding/python/user_guide/iterables/tuples', 'f33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/iterables/while_loops',
                component: ComponentCreator('/docs/coding/python/user_guide/iterables/while_loops', 'dea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/oop/class_attributes',
                component: ComponentCreator('/docs/coding/python/user_guide/oop/class_attributes', 'a8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/oop/dunder_methods',
                component: ComponentCreator('/docs/coding/python/user_guide/oop/dunder_methods', '16a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/oop/encapsulation',
                component: ComponentCreator('/docs/coding/python/user_guide/oop/encapsulation', '3c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/oop/inheritance',
                component: ComponentCreator('/docs/coding/python/user_guide/oop/inheritance', 'd1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/oop/instance_methods',
                component: ComponentCreator('/docs/coding/python/user_guide/oop/instance_methods', '5a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/oop/instances',
                component: ComponentCreator('/docs/coding/python/user_guide/oop/instances', '823'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/oop/intro',
                component: ComponentCreator('/docs/coding/python/user_guide/oop/intro', '668'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/oop/polymorphism',
                component: ComponentCreator('/docs/coding/python/user_guide/oop/polymorphism', '495'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/standard_library/datetime',
                component: ComponentCreator('/docs/coding/python/user_guide/standard_library/datetime', 'fa4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/standard_library/exceptions',
                component: ComponentCreator('/docs/coding/python/user_guide/standard_library/exceptions', 'f38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/standard_library/file_handling',
                component: ComponentCreator('/docs/coding/python/user_guide/standard_library/file_handling', 'b82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/standard_library/json',
                component: ComponentCreator('/docs/coding/python/user_guide/standard_library/json', 'ad1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/standard_library/modules',
                component: ComponentCreator('/docs/coding/python/user_guide/standard_library/modules', 'afb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/types_variables_conditionals/conditionals',
                component: ComponentCreator('/docs/coding/python/user_guide/types_variables_conditionals/conditionals', '1d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/types_variables_conditionals/types',
                component: ComponentCreator('/docs/coding/python/user_guide/types_variables_conditionals/types', '069'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/python/user_guide/types_variables_conditionals/variables',
                component: ComponentCreator('/docs/coding/python/user_guide/types_variables_conditionals/variables', 'd6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

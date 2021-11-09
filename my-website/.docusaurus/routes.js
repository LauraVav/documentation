
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','050'),
    routes: [
      {
        path: '/docs/API/coreference',
        component: ComponentCreator('/docs/API/coreference','b80'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/disturbance',
        component: ComponentCreator('/docs/API/disturbance','d00'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/emoticons',
        component: ComponentCreator('/docs/API/emoticons','023'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/emotions',
        component: ComponentCreator('/docs/API/emotions','3ca'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/entities-numeral',
        component: ComponentCreator('/docs/API/entities-numeral','e9b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/Glossary/categories',
        component: ComponentCreator('/docs/API/Glossary/categories','232'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/Glossary/conjugations',
        component: ComponentCreator('/docs/API/Glossary/conjugations','1ba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/Glossary/dependency-tags',
        component: ComponentCreator('/docs/API/Glossary/dependency-tags','c4b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/Glossary/entities',
        component: ComponentCreator('/docs/API/Glossary/entities','38a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/Glossary/possessive-determiners',
        component: ComponentCreator('/docs/API/Glossary/possessive-determiners','370'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/Glossary/pronouns',
        component: ComponentCreator('/docs/API/Glossary/pronouns','61b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/Glossary/tags',
        component: ComponentCreator('/docs/API/Glossary/tags','861'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/language-used',
        component: ComponentCreator('/docs/API/language-used','449'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/lettria-sentence-object',
        component: ComponentCreator('/docs/API/lettria-sentence-object','126'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/ml-emotion',
        component: ComponentCreator('/docs/API/ml-emotion','68c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/ml-sentiment',
        component: ComponentCreator('/docs/API/ml-sentiment','caa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/ner',
        component: ComponentCreator('/docs/API/ner','994'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/nlp',
        component: ComponentCreator('/docs/API/nlp','343'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/nlu',
        component: ComponentCreator('/docs/API/nlu','915'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/parser-dependency',
        component: ComponentCreator('/docs/API/parser-dependency','e62'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/pos-tagger',
        component: ComponentCreator('/docs/API/pos-tagger','69c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/proposition',
        component: ComponentCreator('/docs/API/proposition','74b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/sentence-acts',
        component: ComponentCreator('/docs/API/sentence-acts','b44'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/sentiment',
        component: ComponentCreator('/docs/API/sentiment','c45'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/API/synthesis',
        component: ComponentCreator('/docs/API/synthesis','6c3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/python-sdk/client-class',
        component: ComponentCreator('/docs/python-sdk/client-class','d61'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/python-sdk/common-properties',
        component: ComponentCreator('/docs/python-sdk/common-properties','1f2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/python-sdk/document-class',
        component: ComponentCreator('/docs/python-sdk/document-class','d2e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/python-sdk/nlp-class',
        component: ComponentCreator('/docs/python-sdk/nlp-class','c1c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/python-sdk/patterns',
        component: ComponentCreator('/docs/python-sdk/patterns','e48'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/python-sdk/sentence-class',
        component: ComponentCreator('/docs/python-sdk/sentence-class','44d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/python-sdk/subsentence-class',
        component: ComponentCreator('/docs/python-sdk/subsentence-class','cc8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/python-sdk/texctchunk',
        component: ComponentCreator('/docs/python-sdk/texctchunk','634'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/python-sdk/token-class',
        component: ComponentCreator('/docs/python-sdk/token-class','aa2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/language-recognition',
        component: ComponentCreator('/docs/Tutorials/language-recognition','fdd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/lemmatizer',
        component: ComponentCreator('/docs/Tutorials/lemmatizer','7d0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/pos-tagger',
        component: ComponentCreator('/docs/Tutorials/pos-tagger','cb4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/sentence-type',
        component: ComponentCreator('/docs/Tutorials/sentence-type','6a6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
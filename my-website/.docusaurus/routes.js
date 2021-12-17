
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs','a34'),
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
        path: '/docs/API/nlc',
        component: ComponentCreator('/docs/API/nlc','ea9'),
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
        path: '/docs/help/faq',
        component: ComponentCreator('/docs/help/faq','701'),
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
        path: '/docs/python-sdk/python-sdk',
        component: ComponentCreator('/docs/python-sdk/python-sdk','ca1'),
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
        path: '/docs/Tool guides/coreference',
        component: ComponentCreator('/docs/Tool guides/coreference','98a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tool guides/dependency-parser',
        component: ComponentCreator('/docs/Tool guides/dependency-parser','4a6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tool guides/lemmatizer',
        component: ComponentCreator('/docs/Tool guides/lemmatizer','f11'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tool guides/ner',
        component: ComponentCreator('/docs/Tool guides/ner','ac6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tool guides/nlu',
        component: ComponentCreator('/docs/Tool guides/nlu','b78'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tool guides/pos-tagger',
        component: ComponentCreator('/docs/Tool guides/pos-tagger','f3b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tool guides/sentiment-analysis',
        component: ComponentCreator('/docs/Tool guides/sentiment-analysis','21c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tool guides/tokenizer',
        component: ComponentCreator('/docs/Tool guides/tokenizer','1d0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/API/dependency-parser',
        component: ComponentCreator('/docs/Tutorials/API/dependency-parser','3fe'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/API/emotion-analysis',
        component: ComponentCreator('/docs/Tutorials/API/emotion-analysis','0f7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/API/intent-detection',
        component: ComponentCreator('/docs/Tutorials/API/intent-detection','ff6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/API/language-recognition',
        component: ComponentCreator('/docs/Tutorials/API/language-recognition','fca'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/API/lemmatizer',
        component: ComponentCreator('/docs/Tutorials/API/lemmatizer','50d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/API/ner',
        component: ComponentCreator('/docs/Tutorials/API/ner','75a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/API/pos-tagger',
        component: ComponentCreator('/docs/Tutorials/API/pos-tagger','4e5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/API/sentence-type',
        component: ComponentCreator('/docs/Tutorials/API/sentence-type','181'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/API/sentiment-analysis',
        component: ComponentCreator('/docs/Tutorials/API/sentiment-analysis','6d3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/API/tokenizer',
        component: ComponentCreator('/docs/Tutorials/API/tokenizer','a07'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/Python SDK/filter-emotion',
        component: ComponentCreator('/docs/Tutorials/Python SDK/filter-emotion','e7b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/Python SDK/filter-polarity',
        component: ComponentCreator('/docs/Tutorials/Python SDK/filter-polarity','636'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/Python SDK/get-emotion',
        component: ComponentCreator('/docs/Tutorials/Python SDK/get-emotion','210'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/Python SDK/get-sentiment-CS',
        component: ComponentCreator('/docs/Tutorials/Python SDK/get-sentiment-CS','76f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/Python SDK/list-entities',
        component: ComponentCreator('/docs/Tutorials/Python SDK/list-entities','515'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/Python SDK/meaning-emotion',
        component: ComponentCreator('/docs/Tutorials/Python SDK/meaning-emotion','ecf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/Python SDK/meaning-sentiment',
        component: ComponentCreator('/docs/Tutorials/Python SDK/meaning-sentiment','b02'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/Python SDK/vocabulary',
        component: ComponentCreator('/docs/Tutorials/Python SDK/vocabulary','afd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/Python SDK/word-count',
        component: ComponentCreator('/docs/Tutorials/Python SDK/word-count','0f3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/Python SDK/word-emotion',
        component: ComponentCreator('/docs/Tutorials/Python SDK/word-emotion','e0e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/Python SDK/word-frequency',
        component: ComponentCreator('/docs/Tutorials/Python SDK/word-frequency','bab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/Python SDK/word-sentiment',
        component: ComponentCreator('/docs/Tutorials/Python SDK/word-sentiment','8d7'),
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

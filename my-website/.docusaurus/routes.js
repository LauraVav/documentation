
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/__docusaurus/debug',
    component: ComponentCreator('/documentation/__docusaurus/debug','9a6'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/config',
    component: ComponentCreator('/documentation/__docusaurus/debug/config','9b2'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/content',
    component: ComponentCreator('/documentation/__docusaurus/debug/content','9eb'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentation/__docusaurus/debug/globalData','4d6'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentation/__docusaurus/debug/metadata','c5d'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/documentation/__docusaurus/debug/registry','32c'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/documentation/__docusaurus/debug/routes','e38'),
    exact: true
  },
  {
    path: '/documentation/blog/archive',
    component: ComponentCreator('/documentation/blog/archive','4d8'),
    exact: true
  },
  {
    path: '/documentation/markdown-page',
    component: ComponentCreator('/documentation/markdown-page','d54'),
    exact: true
  },
  {
    path: '/documentation/docs/1.0',
    component: ComponentCreator('/documentation/docs/1.0','d45'),
    routes: [
      {
        path: '/documentation/docs/1.0/API/api',
        component: ComponentCreator('/documentation/docs/1.0/API/api','b32'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/coreference',
        component: ComponentCreator('/documentation/docs/1.0/API/coreference','dcb'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/disturbance',
        component: ComponentCreator('/documentation/docs/1.0/API/disturbance','a79'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/emoticons',
        component: ComponentCreator('/documentation/docs/1.0/API/emoticons','907'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/emotions',
        component: ComponentCreator('/documentation/docs/1.0/API/emotions','ca9'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/entities-numeral',
        component: ComponentCreator('/documentation/docs/1.0/API/entities-numeral','b1c'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/Glossary/categories',
        component: ComponentCreator('/documentation/docs/1.0/API/Glossary/categories','2e4'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/Glossary/conjugations',
        component: ComponentCreator('/documentation/docs/1.0/API/Glossary/conjugations','5ed'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/Glossary/dependency-tags',
        component: ComponentCreator('/documentation/docs/1.0/API/Glossary/dependency-tags','0d2'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/Glossary/entities',
        component: ComponentCreator('/documentation/docs/1.0/API/Glossary/entities','d3b'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/Glossary/possessive-determiners',
        component: ComponentCreator('/documentation/docs/1.0/API/Glossary/possessive-determiners','e61'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/Glossary/pronouns',
        component: ComponentCreator('/documentation/docs/1.0/API/Glossary/pronouns','8c7'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/Glossary/tags',
        component: ComponentCreator('/documentation/docs/1.0/API/Glossary/tags','3e0'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/language-used',
        component: ComponentCreator('/documentation/docs/1.0/API/language-used','a2f'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/lemmitizer',
        component: ComponentCreator('/documentation/docs/1.0/API/lemmitizer','4fe'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/lettria-sentence-object',
        component: ComponentCreator('/documentation/docs/1.0/API/lettria-sentence-object','3d6'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/ml-emotion',
        component: ComponentCreator('/documentation/docs/1.0/API/ml-emotion','229'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/ml-sentiment',
        component: ComponentCreator('/documentation/docs/1.0/API/ml-sentiment','680'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/ner',
        component: ComponentCreator('/documentation/docs/1.0/API/ner','9b7'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/nlp',
        component: ComponentCreator('/documentation/docs/1.0/API/nlp','626'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/nlu',
        component: ComponentCreator('/documentation/docs/1.0/API/nlu','690'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/parser-dependency',
        component: ComponentCreator('/documentation/docs/1.0/API/parser-dependency','038'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/pos-tagger',
        component: ComponentCreator('/documentation/docs/1.0/API/pos-tagger','baf'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/proposition',
        component: ComponentCreator('/documentation/docs/1.0/API/proposition','237'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/sentence-type',
        component: ComponentCreator('/documentation/docs/1.0/API/sentence-type','4fc'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/sentiment',
        component: ComponentCreator('/documentation/docs/1.0/API/sentiment','c2a'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/API/synthesis',
        component: ComponentCreator('/documentation/docs/1.0/API/synthesis','2b9'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/help/faq',
        component: ComponentCreator('/documentation/docs/1.0/help/faq','d8b'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/intro',
        component: ComponentCreator('/documentation/docs/1.0/intro','e01'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/python-sdk/client-class',
        component: ComponentCreator('/documentation/docs/1.0/python-sdk/client-class','d22'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/python-sdk/common-properties',
        component: ComponentCreator('/documentation/docs/1.0/python-sdk/common-properties','c1d'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/python-sdk/document-class',
        component: ComponentCreator('/documentation/docs/1.0/python-sdk/document-class','d9d'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/python-sdk/nlp-class',
        component: ComponentCreator('/documentation/docs/1.0/python-sdk/nlp-class','7b6'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/python-sdk/patterns',
        component: ComponentCreator('/documentation/docs/1.0/python-sdk/patterns','894'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/python-sdk/python-sdk',
        component: ComponentCreator('/documentation/docs/1.0/python-sdk/python-sdk','30c'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/python-sdk/sentence-class',
        component: ComponentCreator('/documentation/docs/1.0/python-sdk/sentence-class','c9e'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/python-sdk/subsentence-class',
        component: ComponentCreator('/documentation/docs/1.0/python-sdk/subsentence-class','f8a'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/python-sdk/texctchunk',
        component: ComponentCreator('/documentation/docs/1.0/python-sdk/texctchunk','e50'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/python-sdk/token-class',
        component: ComponentCreator('/documentation/docs/1.0/python-sdk/token-class','5de'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tool guides/coreference',
        component: ComponentCreator('/documentation/docs/1.0/Tool guides/coreference','72e'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tool guides/dependency-parser',
        component: ComponentCreator('/documentation/docs/1.0/Tool guides/dependency-parser','b54'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tool guides/lemmatizer',
        component: ComponentCreator('/documentation/docs/1.0/Tool guides/lemmatizer','8ed'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tool guides/ner',
        component: ComponentCreator('/documentation/docs/1.0/Tool guides/ner','dd9'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tool guides/nlu',
        component: ComponentCreator('/documentation/docs/1.0/Tool guides/nlu','10d'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tool guides/pos-tagger',
        component: ComponentCreator('/documentation/docs/1.0/Tool guides/pos-tagger','dc5'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tool guides/sentiment-analysis',
        component: ComponentCreator('/documentation/docs/1.0/Tool guides/sentiment-analysis','5c3'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tool guides/tokenizer',
        component: ComponentCreator('/documentation/docs/1.0/Tool guides/tokenizer','10d'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/API/dependency-parser',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/API/dependency-parser','16e'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/API/emotion-analysis',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/API/emotion-analysis','0cb'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/API/intent-detection',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/API/intent-detection','ce8'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/API/language-recognition',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/API/language-recognition','90b'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/API/lemmatizer',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/API/lemmatizer','8e8'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/API/ner',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/API/ner','01b'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/API/pos-tagger',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/API/pos-tagger','0eb'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/API/sentence-type',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/API/sentence-type','358'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/API/sentiment-analysis',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/API/sentiment-analysis','9c9'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/API/tokenizer',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/API/tokenizer','c6e'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/Python SDK/filter-emotion',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/Python SDK/filter-emotion','77a'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/Python SDK/filter-polarity',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/Python SDK/filter-polarity','a88'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/Python SDK/get-emotion',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/Python SDK/get-emotion','a31'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/Python SDK/get-sentiment-CS',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/Python SDK/get-sentiment-CS','c19'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/Python SDK/list-entities',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/Python SDK/list-entities','14d'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/Python SDK/meaning-emotion',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/Python SDK/meaning-emotion','598'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/Python SDK/meaning-sentiment',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/Python SDK/meaning-sentiment','f33'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/Python SDK/vocabulary',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/Python SDK/vocabulary','dfd'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/Python SDK/word-count',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/Python SDK/word-count','045'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/Python SDK/word-emotion',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/Python SDK/word-emotion','c03'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/Python SDK/word-frequency',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/Python SDK/word-frequency','3db'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/1.0/Tutorials/Python SDK/word-sentiment',
        component: ComponentCreator('/documentation/docs/1.0/Tutorials/Python SDK/word-sentiment','d36'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      }
    ]
  },
  {
    path: '/documentation/docs',
    component: ComponentCreator('/documentation/docs','557'),
    routes: [
      {
        path: '/documentation/docs/API/api',
        component: ComponentCreator('/documentation/docs/API/api','738'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/API/detail',
        component: ComponentCreator('/documentation/docs/API/detail','46d'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/API/document',
        component: ComponentCreator('/documentation/docs/API/document','74a'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/API/Glossary/categories',
        component: ComponentCreator('/documentation/docs/API/Glossary/categories','688'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/API/Glossary/conjugations',
        component: ComponentCreator('/documentation/docs/API/Glossary/conjugations','3f3'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/API/Glossary/dependency-tags',
        component: ComponentCreator('/documentation/docs/API/Glossary/dependency-tags','fe8'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/API/Glossary/entities',
        component: ComponentCreator('/documentation/docs/API/Glossary/entities','1a8'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/API/Glossary/possessive-determiners',
        component: ComponentCreator('/documentation/docs/API/Glossary/possessive-determiners','b7a'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/API/Glossary/pronouns',
        component: ComponentCreator('/documentation/docs/API/Glossary/pronouns','1ed'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/API/Glossary/tags',
        component: ComponentCreator('/documentation/docs/API/Glossary/tags','0ce'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/API/sentence',
        component: ComponentCreator('/documentation/docs/API/sentence','f1d'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/help/faq',
        component: ComponentCreator('/documentation/docs/help/faq','bd7'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/intro',
        component: ComponentCreator('/documentation/docs/intro','6a1'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/python-sdk/client-class',
        component: ComponentCreator('/documentation/docs/python-sdk/client-class','857'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/python-sdk/common-properties',
        component: ComponentCreator('/documentation/docs/python-sdk/common-properties','2fd'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/python-sdk/document-class',
        component: ComponentCreator('/documentation/docs/python-sdk/document-class','bb0'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/python-sdk/nlp-class',
        component: ComponentCreator('/documentation/docs/python-sdk/nlp-class','98d'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/python-sdk/patterns',
        component: ComponentCreator('/documentation/docs/python-sdk/patterns','8e6'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/python-sdk/python-sdk',
        component: ComponentCreator('/documentation/docs/python-sdk/python-sdk','ae2'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/python-sdk/sentence-class',
        component: ComponentCreator('/documentation/docs/python-sdk/sentence-class','937'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/python-sdk/subsentence-class',
        component: ComponentCreator('/documentation/docs/python-sdk/subsentence-class','ded'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/python-sdk/texctchunk',
        component: ComponentCreator('/documentation/docs/python-sdk/texctchunk','92f'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/python-sdk/token-class',
        component: ComponentCreator('/documentation/docs/python-sdk/token-class','208'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tool guides/coreference',
        component: ComponentCreator('/documentation/docs/Tool guides/coreference','0f9'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tool guides/dependency-parser',
        component: ComponentCreator('/documentation/docs/Tool guides/dependency-parser','aa1'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tool guides/lemmatizer',
        component: ComponentCreator('/documentation/docs/Tool guides/lemmatizer','9bf'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tool guides/ner',
        component: ComponentCreator('/documentation/docs/Tool guides/ner','a4a'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tool guides/nlu',
        component: ComponentCreator('/documentation/docs/Tool guides/nlu','eb1'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tool guides/pos-tagger',
        component: ComponentCreator('/documentation/docs/Tool guides/pos-tagger','3f1'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tool guides/sentiment-analysis',
        component: ComponentCreator('/documentation/docs/Tool guides/sentiment-analysis','4bf'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tool guides/tokenizer',
        component: ComponentCreator('/documentation/docs/Tool guides/tokenizer','21a'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/detail/dependency-parser',
        component: ComponentCreator('/documentation/docs/Tutorials/API/detail/dependency-parser','b31'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/detail/intent-detection',
        component: ComponentCreator('/documentation/docs/Tutorials/API/detail/intent-detection','d96'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/detail/lemmatizer',
        component: ComponentCreator('/documentation/docs/Tutorials/API/detail/lemmatizer','817'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/detail/pos-tagger',
        component: ComponentCreator('/documentation/docs/Tutorials/API/detail/pos-tagger','de5'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/document/emotion-analysis',
        component: ComponentCreator('/documentation/docs/Tutorials/API/document/emotion-analysis','3f5'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/document/language-recognition',
        component: ComponentCreator('/documentation/docs/Tutorials/API/document/language-recognition','3cb'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/document/sentiment-analysis',
        component: ComponentCreator('/documentation/docs/Tutorials/API/document/sentiment-analysis','e3c'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/document/synthesis',
        component: ComponentCreator('/documentation/docs/Tutorials/API/document/synthesis','31a'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/document/tokenizer',
        component: ComponentCreator('/documentation/docs/Tutorials/API/document/tokenizer','c8f'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/sentence/ml-emotion',
        component: ComponentCreator('/documentation/docs/Tutorials/API/sentence/ml-emotion','c9e'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/sentence/ml-sentiment',
        component: ComponentCreator('/documentation/docs/Tutorials/API/sentence/ml-sentiment','5bd'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/sentence/ner',
        component: ComponentCreator('/documentation/docs/Tutorials/API/sentence/ner','3e9'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/API/sentence/sentence-type',
        component: ComponentCreator('/documentation/docs/Tutorials/API/sentence/sentence-type','228'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/common-properties',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/common-properties','08d'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/document-class-tutorial',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/document-class-tutorial','683'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/Patterns/dependency-pattern',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/Patterns/dependency-pattern','25b'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/Patterns/token-pattern',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/Patterns/token-pattern','3ce'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/sentence-class-tutorial',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/sentence-class-tutorial','6d5'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/subsentence-class-tutorial',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/subsentence-class-tutorial','5c1'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/filter-emotion',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/filter-emotion','f9d'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/filter-polarity',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/filter-polarity','847'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/filter-type',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/filter-type','ae5'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/get-emotion',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/get-emotion','9ca'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/get-sentiment-CS',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/get-sentiment-CS','9f4'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/list-entities',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/list-entities','172'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/match-pattern',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/match-pattern','311'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/meaning-emotion',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/meaning-emotion','de2'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/meaning-sentiment',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/meaning-sentiment','96f'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/vocabulary',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/vocabulary','289'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/word-count',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/word-count','181'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/word-emotion',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/word-emotion','a1f'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/word-frequency',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/word-frequency','741'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      },
      {
        path: '/documentation/docs/Tutorials/Python SDK/TextChunk/word-sentiment',
        component: ComponentCreator('/documentation/docs/Tutorials/Python SDK/TextChunk/word-sentiment','482'),
        exact: true,
        'sidebar': "version-2.0/tutorialSidebar"
      }
    ]
  },
  {
    path: '/documentation/',
    component: ComponentCreator('/documentation/','d97'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

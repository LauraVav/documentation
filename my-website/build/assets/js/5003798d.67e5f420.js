"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1876],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2562:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:4},l="Dependency Parser",c={unversionedId:"Tool sheets/dependency-parser",id:"Tool sheets/dependency-parser",isDocsHomePage:!1,title:"Dependency Parser",description:"What\u2019s a dependency parser?",source:"@site/docs/Tool sheets/dependency-parser.md",sourceDirName:"Tool sheets",slug:"/Tool sheets/dependency-parser",permalink:"/docs/Tool sheets/dependency-parser",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Lemmatizer",permalink:"/docs/Tool sheets/lemmatizer"},next:{title:"NLU",permalink:"/docs/Tool sheets/nlu"}},p=[{value:"What\u2019s a dependency parser?",id:"whats-a-dependency-parser",children:[],level:2},{value:"A LITTLE BIT OF GEEK CULTURE",id:"a-little-bit-of-geek-culture",children:[],level:2},{value:"How does it work? What comes before and after?",id:"how-does-it-work-what-comes-before-and-after",children:[],level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dependency-parser"},"Dependency Parser"),(0,o.kt)("h2",{id:"whats-a-dependency-parser"},"What\u2019s a dependency parser?"),(0,o.kt)("p",null,"A dependency parser or dependency analyzer highlights the ",(0,o.kt)("strong",{parentName:"p"},"dependency relationships in a sentence")," (what or who is the subject or object). It\u2019s a computational linguistics tool built on a group of rules specific to the analyzed language. A dependency parser can also be built based on a machine-learning model that derives grammatical rules from a manually-labelled corpus. ",(0,o.kt)("strong",{parentName:"p"},"What does it do? How does it work?"),"The parser organizes the elements of a sentence based on their syntactic and semantic importance, and the links that exist between them."),(0,o.kt)("p",null,"In Natural Language Processing (NLP), the dependency parser makes visible the grammatical structure of each sentence. The goal is to better define the relationships between \u201cheadwords\u201d (like subjects and objects) and those that modify (adjectives, adverbs, etc.)."),(0,o.kt)("p",null,"A dependency analysis is only possible after ",(0,o.kt)("strong",{parentName:"p"},"a complete applied analysis of each word of a text"),". The highlighting of links between words is the last piece of syntactic analysis of a text. Once that\u2019s been done, the software can continue to semantic analysis."),(0,o.kt)("p",null,"A parser must:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"isolate the links of hierarchy in a sentence based on its grammatical structure"),(0,o.kt)("li",{parentName:"ul"},"Identify the syntactic dependency links between words")),(0,o.kt)("h2",{id:"a-little-bit-of-geek-culture"},"A LITTLE BIT OF GEEK CULTURE"),(0,o.kt)("p",null,"Previously, dependency analysis was done in \u201cchunks\u201d for each part of a sentence. That\u2019s what we call shallow parsing or superficial semantic analysis. This approach, based on regular expressions (regex), takes into account contextual information but is sometimes limited by unexpected turns of phrase and / or by the morpho-syntactic complexity of a language."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,'In the sentence, "Paul has an ice cream bar,\u201d is the \u201cbar\u201d referring to a place that serves ice cream, or does Paul have a bar of ice cream?'),(0,o.kt)("p",null,"This type of subtlety is difficult to overcome. That\u2019s where deep ",(0,o.kt)("strong",{parentName:"p"},"neural architectures (deep learning)")," come in. Based on deep learning, these methods of machine learning offer diverse options for data processing. Thanks to neural architectures that link together knowledge, we manage to dissect phrases and to ",(0,o.kt)("strong",{parentName:"p"},"connect contextual information with accuracy.")),(0,o.kt)("p",null,"This technique relies on pattern detection. Whether we have to analyze fixed or semi-fixed expressions or collocations, patterns will be recognized as long as they\u2019re sufficiently present in the language."),(0,o.kt)("p",null,"The dependency parser does the work of word embedding: ",(0,o.kt)("strong",{parentName:"p"},"each word can be represented in an equation")," or a graph in relation to other words."),(0,o.kt)("h2",{id:"how-does-it-work-what-comes-before-and-after"},"How does it work? What comes before and after?"),(0,o.kt)("p",null,"As the last step of morpho-syntactic processing, dependency parsing allows the linking of lexicon, morphology (",(0,o.kt)("a",{parentName:"p",href:"https://lettria.com/fr/dev/toolsheets/tokenizer"},"tokenization"),") and syntax (",(0,o.kt)("a",{parentName:"p",href:"https://lettria.com/fr/dev/toolsheets/postag"},"pos-tagging")," et ",(0,o.kt)("a",{parentName:"p",href:"https://lettria.com/fr/dev/toolsheets/lemmatizer"},"lemmatization"),"). ",(0,o.kt)("strong",{parentName:"p"},"By making explicit the relationships that link different terms")," in a sentence, the parser completes the grammatical table and determines the most important elements for the comprehension of meaning."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,'In the sentence "I have a dog, it\u2019s called Doug,\u201d Lettria correctly identifies the appositive: "it" is the subject of the 2nd proposition, but references the object of the first proposition, which is \u201cdog.\u201d'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Key takeaways")),(0,o.kt)("p",null,"A parser does the work of hierarchization.\xa0 It makes clear the dependency relations that exist within a sentence, separating the headwords from the modifiers. At Lettria, the parser is adapted to the needs of each specific language, combining tags from secure knowledge bases and learning based on rigorous machine learning."))}h.isMDXComponent=!0}}]);
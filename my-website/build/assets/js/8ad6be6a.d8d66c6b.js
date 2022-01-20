"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9276],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4465:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},l="POS Tagger",c={unversionedId:"Tool guides/pos-tagger",id:"version-1.0/Tool guides/pos-tagger",isDocsHomePage:!1,title:"POS Tagger",description:"What\u2019s a pos-tagger ?",source:"@site/versioned_docs/version-1.0/Tool guides/pos-tagger.md",sourceDirName:"Tool guides",slug:"/Tool guides/pos-tagger",permalink:"/documentation/docs/1.0/Tool guides/pos-tagger",tags:[],version:"1.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-1.0/tutorialSidebar",previous:{title:"Tokenizer",permalink:"/documentation/docs/1.0/Tool guides/tokenizer"},next:{title:"Lemmatizer",permalink:"/documentation/docs/1.0/Tool guides/lemmatizer"}},p=[{value:"What\u2019s a pos-tagger ?",id:"whats-a-pos-tagger-",children:[],level:2},{value:"What does it do? How does it work?",id:"what-does-it-do-how-does-it-work",children:[],level:2},{value:"A LITTLE BIT OF GEEK CULTURE",id:"a-little-bit-of-geek-culture",children:[],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2},{value:"What\u2019s the Lettria approach?",id:"whats-the-lettria-approach",children:[],level:2}],u={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pos-tagger"},"POS Tagger"),(0,r.kt)("h2",{id:"whats-a-pos-tagger-"},"What\u2019s a pos-tagger ?"),(0,r.kt)("p",null,'The part-of-speech (pos) tag or "tagging\u201d dependent on parts of speech is a labelling process that ',(0,r.kt)("strong",{parentName:"p"},"assigns all the words of a text to the correct grammatical elements.")," It\u2019s a morpho-syntactic labelling process at the word level, which is part of a larger process of computational linguistics."),(0,r.kt)("h2",{id:"what-does-it-do-how-does-it-work"},"What does it do? How does it work?"),(0,r.kt)("p",null,"In Natural Language Processing (NLP), grammatical labelling or pos-tagging precisely and reliably reveals us the function of a word, ",(0,r.kt)("strong",{parentName:"p"},"thus removing a number of common ambiguities")," \u2013 in particular those that are related to context."),(0,r.kt)("p",null,"A tag must:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recognize the grammatical parameters of the word"),(0,r.kt)("li",{parentName:"ul"},"Identify the function of the word in its context")),(0,r.kt)("h2",{id:"a-little-bit-of-geek-culture"},"A LITTLE BIT OF GEEK CULTURE"),(0,r.kt)("p",null,"Though based on grammatical rules and seemingly straightforward, pos-tagging is quite a delicate process. Taking into account the ",(0,r.kt)("strong",{parentName:"p"},"diversity of language")," and the exceptions to the rules, we have to make ",(0,r.kt)("strong",{parentName:"p"},"certain adjustments"),"."),(0,r.kt)("p",null,"For example, the 10 morpho-syntactic categories (common noun, proper noun, pronoun, adjective, verb, preposition, adverb, subordinating conjunction, coordinating conjunction, interjection) can be turned upside down and / or replaced by more specific categories (infinitive verbs, past participles, object pronouns, etc.)."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"Pos-tagging happens after the initial steps of cleaning and standardizing the text, and after the labelling of already identified tokens. One mistake in the first step of morphological tokenization will lead to another error in the step of grammatical labelling."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,'In the sentence "He eats a sweet potato," the most common tokenization error distinguishing ',"[sweet][potato]",", which will lead to incorrect labelling:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[ common noun ] [ common noun ]\n")),(0,r.kt)("p",null,"Labelling the text allows for its identification. For simple or complex sentences alike, pos-tagging detects the meaning of the words and offers a disambiguation of their meaning by syntax."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,'In the sentence "The chickens nest in the nest,\u201d the most common mistake of pos-tagging tools is to label both mentions of \u201cnest\u201d as common nouns.'),(0,r.kt)("p",null,"We have to recall rules of syntax to remove any ambiguity: the first \u201cnest\u201d is in between a common noun (\u201cchickens\u201d) and a preposition (\u201cin\u201d). In that case, it\u2019s more likely to be a verb: \u201cnest\u201d is the verb \u201cto nest\u201d conjugated in the 3rd person present. These are the grammatical labellers that can remove doubt when it comes to the purpose of certain words."),(0,r.kt)("h2",{id:"whats-the-lettria-approach"},"What\u2019s the Lettria approach?"),(0,r.kt)("p",null,"Lettria\u2019s API integrates the latest models of transfer learning, notably the CamemBERT model trained by FAIR (Facebook Artificial Intelligence Research) and the INRIA. The principle of transfer learning is ",(0,r.kt)("strong",{parentName:"p"},"to transpose knowledge acquired from a training data set")," to better understand a new data set."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"A guitarist will more easily learn to play piano than a novice because their basic knowledge of music can apply (in part) to this new instrument."),(0,r.kt)("p",null,"This high-performing model, applied to our French and English corpora, composed of thousands of manually pre-labelled sentences, allows us to obtain unprecedented performance at this critical step of NLP."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Key takeaways")),(0,r.kt)("p",null,"Pos-tagging, or grammatical labelling, is a process that allows us to more precisely and reliably identify the function of a word. This process of syntactic analysis allows us to remove ambiguous meaning thanks to context."),(0,r.kt)("p",null,"A tag must:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"recognize the grammatical parameters of the word")),(0,r.kt)("p",null,"identify the function of a word in its context"))}g.isMDXComponent=!0}}]);
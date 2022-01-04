"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7116],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),g=d(n),k=r,N=g["".concat(m,".").concat(k)]||g[k]||u[k]||l;return n?a.createElement(N,i(i({ref:e},o),{},{components:n})):a.createElement(N,i({ref:e},o))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5954:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return o},default:function(){return g}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:6},m="NLC",d={unversionedId:"API/nlc-new",id:"API/nlc-new",isDocsHomePage:!1,title:"NLC",description:"Includes NER, NLP and NLU modules.",source:"@site/docs/API/nlc-new.md",sourceDirName:"API",slug:"/API/nlc-new",permalink:"/docs/API/nlc-new",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Disturbance",permalink:"/docs/API/disturbance"},next:{title:"Entities Numeral",permalink:"/docs/API/entities-numeral"}},o=[{value:"NLC Object",id:"nlc-object",children:[],level:2},{value:"Value Object",id:"value-object",children:[],level:2},{value:"Lemmatizer Object",id:"lemmatizer-object",children:[],level:2},{value:"Conjugate Object",id:"conjugate-object",children:[],level:2},{value:"Gender Object",id:"gender-object",children:[],level:2},{value:"Preposition sens Object",id:"preposition-sens-object",children:[],level:2}],u={toc:o};function g(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nlc"},"NLC"),(0,l.kt)("p",null,"Includes NER, NLP and NLU modules."),(0,l.kt)("h2",{id:"nlc-object"},"NLC Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"KEY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:"center"},"CONSTRAINTS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"source"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Describes the type of entity found"),(0,l.kt)("td",{parentName:"tr",align:"center"},"For proper nouns, can either be LOCATION or PERSON. For other entities, see Entity types")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"value"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Value Object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"source"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Words composing the token"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"tag"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"see Tags"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"lemmatizer"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Lemmatizer Object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Object with information regarding lemma of token"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Index in the initial tokenized sentence"),(0,l.kt)("td",{parentName:"tr",align:"center"},"index >= 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"len"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of tokens that have been merged (1 if no merge)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"len >= 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"meaning"),(0,l.kt)("td",{parentName:"tr",align:"center"},"list of Category Objects"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Known meanings for the item"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Can be empty.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"source"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"if len is greater than one, will be the merged sources of original items")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"value"),(0,l.kt)("td",{parentName:"tr",align:"center"},"dict"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Depends on tag. Most values are in the 'scalar' key of this dict"),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h2",{id:"value-object"},"Value Object"),(0,l.kt)("p",null,"A value object can either be a numeric value for some adjectives, an entity value for entities, or a 'null' value for names."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"    \u2018detail\u2019\xa0: [{\n            \u2018lemma\u2019\xa0: Monsieur # lemma\n            \u2018source_pure\u2019\xa0: Mr. # la VRAI source\n            'source': Monsieur # la source de travail\n            \u2018index\u2019\xa0: [415,435] # index du token absolue a l input\n            \u2018tag\u2019\xa0: # postag\n            \u2018dep\u2019\xa0: # dep parser dep,\n            \u2018ref\u2019\xa0: index de ref du token (parser dep),\n            \u2018meaning\u2019\xa0: []\n            \u2018lemmatizer\u2019\xa0: {} # detail du lemmatizer\n            \u2018type_entity\u2019\xa0: # type de l entity sinon nul\n            \u2018value\u2019\xa0: {} # retour entity ou autre\n            'dep' : \"nsubj\"\n            'ref' : 1 \n            },\n           {...}, {\u2026}, \u2026.]\n")),(0,l.kt)("h2",{id:"lemmatizer-object"},"Lemmatizer Object"),(0,l.kt)("p",null,"The content of the lemmatizer object is different for each tag. The table bellow references all the keys that are available, and lists the tags that will return them (see POS Tagger and list of tags)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"CONSTRAINTS"),(0,l.kt)("th",{parentName:"tr",align:null},"TAGS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conjugate"),(0,l.kt)("td",{parentName:"tr",align:null},"list of Conjugate Objects"),(0,l.kt)("td",{parentName:"tr",align:null},"List possible conjugations"),(0,l.kt)("td",{parentName:"tr",align:null},"see Conjugations"),(0,l.kt)("td",{parentName:"tr",align:null},"V")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confidence"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"level of confidence in the results (higher is better)"),(0,l.kt)("td",{parentName:"tr",align:null},"0 <= confidence <= 1"),(0,l.kt)("td",{parentName:"tr",align:null},"(all)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gender"),(0,l.kt)("td",{parentName:"tr",align:null},"Gender Object"),(0,l.kt)("td",{parentName:"tr",align:null},"describes the gender and plurality"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"VP, JJ, N, D, PD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lemma"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"lemmatized version of the source"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"C, CC, CLO, CLS, D, JJ, N, NP, PUNCT, P, PD, PROREL, RB, RB_WH, SYM, UH")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"infinit"),(0,l.kt)("td",{parentName:"tr",align:null},"list of string"),(0,l.kt)("td",{parentName:"tr",align:null},"list of possible verb infinitives"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"V, VP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"CD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"D, PD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"possessing"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"see Possessive determiners"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"D, PD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pronom"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"see Pronouns"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"CLS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"designation"),(0,l.kt)("td",{parentName:"tr",align:null},"list of string"),(0,l.kt)("td",{parentName:"tr",align:null},"see Categories"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"CLO")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"category"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"see Adverb Categories"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"RB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"RB, P")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sens"),(0,l.kt)("td",{parentName:"tr",align:null},"list of Preposition sens object"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"P")))),(0,l.kt)("h2",{id:"conjugate-object"},"Conjugate Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pronom"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"see Pronouns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"temps"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"gender-object"},"Gender Object"),(0,l.kt)("p",null,"Gives information about the gender and plurality of a word."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"CONSTRAINTS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"female"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"true or false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plural"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"true or false")))),(0,l.kt)("h2",{id:"preposition-sens-object"},"Preposition sens Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sens"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"see Preposition sens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"category"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"see Preposition categories")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"next"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"see Preposition next")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://app.lettria.com/signup"},(0,l.kt)("img",{alt:"register-sticky",src:n(4209).Z}))))}g.isMDXComponent=!0},4209:function(t,e,n){e.Z=n.p+"assets/images/register-sticky-0bf1e35cb49b633a37ddd712c2cfde47.png"}}]);
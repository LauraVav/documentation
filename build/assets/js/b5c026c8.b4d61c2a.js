"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6153],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),g=m(n),k=r,N=g["".concat(o,".").concat(k)]||g[k]||d[k]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1620:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return u},default:function(){return g}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:7},o="NLP",m={unversionedId:"API/nlp",id:"API/nlp",isDocsHomePage:!1,title:"NLP",description:"NLP Object",source:"@site/docs/API/nlp.md",sourceDirName:"API",slug:"/API/nlp",permalink:"/docs/API/nlp",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Disturbance",permalink:"/docs/API/disturbance"},next:{title:"NLU",permalink:"/docs/API/nlu"}},u=[{value:"NLP Object",id:"nlp-object",children:[],level:2},{value:"Lemmatizer Object",id:"lemmatizer-object",children:[],level:2},{value:"Conjugate Object",id:"conjugate-object",children:[],level:2},{value:"Gender Object",id:"gender-object",children:[],level:2},{value:"Preposition sens Object",id:"preposition-sens-object",children:[],level:2}],d={toc:u};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nlp"},"NLP"),(0,l.kt)("h2",{id:"nlp-object"},"NLP Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Words composing the token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tag"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"see Tags")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lemmatizer"),(0,l.kt)("td",{parentName:"tr",align:null},"Lemmatizer Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Object with information regarding lemma of token")))),(0,l.kt)("h2",{id:"lemmatizer-object"},"Lemmatizer Object"),(0,l.kt)("p",null,"The content of the lemmatizer object is different for each tag. The table bellow references all the keys that are available, and lists the tags that will return them (see POS Tagger and list of tags)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"CONSTRAINTS"),(0,l.kt)("th",{parentName:"tr",align:null},"TAGS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conjugate"),(0,l.kt)("td",{parentName:"tr",align:null},"list of Conjugate Objects"),(0,l.kt)("td",{parentName:"tr",align:null},"List possible conjugations"),(0,l.kt)("td",{parentName:"tr",align:null},"see Conjugations"),(0,l.kt)("td",{parentName:"tr",align:null},"V")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confidence"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"level of confidence in the results (higher is better)"),(0,l.kt)("td",{parentName:"tr",align:null},"0 <= confidence <= 1"),(0,l.kt)("td",{parentName:"tr",align:null},"(all)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gender"),(0,l.kt)("td",{parentName:"tr",align:null},"Gender Object"),(0,l.kt)("td",{parentName:"tr",align:null},"describes the gender and plurality"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"VP, JJ, N, D, PD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lemma"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"lemmatized version of the source"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"C, CC, CLO, CLS, D, JJ, N, NP, PUNCT, P, PD, PROREL, RB, RB_WH, SYM, UH")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"infinit"),(0,l.kt)("td",{parentName:"tr",align:null},"list of string"),(0,l.kt)("td",{parentName:"tr",align:null},"list of possible verb infinitives"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"V, VP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"CD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"D, PD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"possessing"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"see Possessive determiners"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"D, PD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pronom"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"see Pronouns"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"CLS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"designation"),(0,l.kt)("td",{parentName:"tr",align:null},"list of string"),(0,l.kt)("td",{parentName:"tr",align:null},"see Categories"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"CLO")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"category"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"see Adverb Categories"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"RB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"RB, P")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sens"),(0,l.kt)("td",{parentName:"tr",align:null},"list of Preposition sens object"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"P")))),(0,l.kt)("h2",{id:"conjugate-object"},"Conjugate Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pronom"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"see Pronouns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"temps"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"gender-object"},"Gender Object"),(0,l.kt)("p",null,"Gives information about the gender and plurality of a word."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"CONSTRAINTS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"female"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"true or false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plural"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"true or false")))),(0,l.kt)("h2",{id:"preposition-sens-object"},"Preposition sens Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sens"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"see Preposition sens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"category"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"see Preposition categories")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"next"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"see Preposition next")))))}g.isMDXComponent=!0}}]);
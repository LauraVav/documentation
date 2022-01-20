"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2499],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=c(n),k=a,g=s["".concat(l,".").concat(k)]||s[k]||d[k]||i;return n?r.createElement(g,o(o({ref:e},m),{},{components:n})):r.createElement(g,o({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},517:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:8},l="Common Properties",c={unversionedId:"python-sdk/common-properties",id:"version-2.0/python-sdk/common-properties",isDocsHomePage:!1,title:"Common Properties",description:"Properties have 'upward' accessibility, properties at a lower level are accessible at a higher level:",source:"@site/versioned_docs/version-2.0/python-sdk/common-properties.md",sourceDirName:"python-sdk",slug:"/python-sdk/common-properties",permalink:"/documentation/docs/python-sdk/common-properties",tags:[],version:"2.0",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"version-2.0/tutorialSidebar",previous:{title:"Token Class",permalink:"/documentation/docs/python-sdk/token-class"},next:{title:"Client Class",permalink:"/documentation/docs/python-sdk/client-class"}},m=[{value:"Document properties",id:"document-properties",children:[],level:2},{value:"Sentence/Subsentence properties",id:"sentencesubsentence-properties",children:[],level:2},{value:"Token properties",id:"token-properties",children:[],level:2}],d={toc:m};function s(t){var e=t.components,p=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"common-properties"},"Common Properties"),(0,i.kt)("p",null,"Properties have 'upward' accessibility, properties at a lower level are accessible at a higher level:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NLP > Document > Sentence >= Subsentence > Token\n")),(0,i.kt)("p",null,"For example ",(0,i.kt)("strong",{parentName:"p"},"'str'")," which is a token property can be accessed at all analysis levels (NLP/Document/Sentence/Subsentence/Token)."),(0,i.kt)("p",null,"Conversely, ",(0,i.kt)("strong",{parentName:"p"},"'emotion_doc'")," is only available at the Document level, and at the NLP level which groups multiple documents."),(0,i.kt)("p",null,"All properties have ",(0,i.kt)("strong",{parentName:"p"},"a _flat")," variant (token_flat) which flatten recursively the return."),(0,i.kt)("h2",{id:"document-properties"},"Document properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"emotion_doc"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns emotions detected on the whole document at once.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"sentiment_doc"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns sentiments detected on the whole document at once.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"original_text_doc"),(0,i.kt)("td",{parentName:"tr",align:"center"},"List"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns the original text of the whole document.")))),(0,i.kt)("h2",{id:"sentencesubsentence-properties"},"Sentence/Subsentence properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"language"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns detected language")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"meaning"),(0,i.kt)("td",{parentName:"tr",align:"center"},"List"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns meanings as tuples (SUPER, SUB)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"emotion"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Tuple"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns emotion as tuple (Type, score)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"sentiment"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Dictionary"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns sentiment with positive, negative and total values")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"sentiment_ml"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Dictionary"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns sentiment of ml_model without further fine tuning")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"sentence_type"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns type of sentence")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"coreference"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns reference of token if it exists")))),(0,i.kt)("h2",{id:"token-properties"},"Token properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"str"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns sentence as string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"original_text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns the original token in the input text before modification from the tokenization.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"token"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"lemma"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns lemma")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"lemma_detail"),(0,i.kt)("td",{parentName:"tr",align:"center"},"List"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns details of lemmatizer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"gender"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns unmerged lemma")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"plural"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns unmerged lemma")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"infinitive"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns unmerged lemma")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"conjugate"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns unmerged lemma")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"morphology"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns unmerged lemma")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"auxiliary"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns unmerged lemma")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"pos"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns POS (Part-Of-Speech) tags")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"pos_detail"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns unmerged POS (Part-Of-Speech) tags")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"dep"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns dependency relations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"morphology"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns morphological features")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"meaning"),(0,i.kt)("td",{parentName:"tr",align:"center"},"List"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns meanings as tuples (SUPER, SUB)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"detail"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Dictionary"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Returns detail/synthesis object")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://app.lettria.com/signup"},(0,i.kt)("img",{alt:"register-sticky",src:n(4209).Z}))))}s.isMDXComponent=!0},4209:function(t,e,n){e.Z=n.p+"assets/images/register-sticky-0bf1e35cb49b633a37ddd712c2cfde47.png"}}]);
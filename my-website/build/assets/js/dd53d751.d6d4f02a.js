"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1752],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8323:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="FAQs",c={unversionedId:"help/faq",id:"help/faq",isDocsHomePage:!1,title:"FAQs",description:"---",source:"@site/docs/help/faq.md",sourceDirName:"help",slug:"/help/faq",permalink:"/docs/help/faq",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Word Frequency",permalink:"/docs/Tutorials/Python SDK/word-frequency"}},p=[{value:"Platform",id:"platform",children:[{value:"Data privacy",id:"data-privacy",children:[],level:3},{value:"Annotations",id:"annotations",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2}],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faqs"},"FAQs"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"platform"},"Platform"),(0,o.kt)("h3",{id:"data-privacy"},"Data privacy"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Where is my data stored when I upload files to Lettria?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your uploaded files are stored on AWS and cannot be accessed by anyone but you. "),(0,o.kt)("li",{parentName:"ul"},"Once the data is extracted for analysis it is stored on Lettria in your personal user account.")),(0,o.kt)("h3",{id:"annotations"},"Annotations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What`s the differenct between a link and a relationship?")),(0,o.kt)("p",null,"Links are used to gather scattered information in a document, words or groups of words which address the same information but in several places of the document. Links are used to concatenate information in a model by removing unnecessary tokens that separate them."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")," : In a transcription of a telephone conversation, the links will be very useful to remove the elements which break up the fluidity of the speech of an interlocutor (the apostrophes, the breaks)."),(0,o.kt)("p",null,"Relationships  focus on the semantic relationships between an 'owner' attribute and its associated 'target' entities. More precise than links,  relationships underline a hierarchy in information, between a central concept (owner) and its relative information (target)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")," : In a product specification sheet, the relationships will allow a central element of the product (its weight) to be associated with a numeral entity (a mass in kg)."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Where can I get an API key?")))}f.isMDXComponent=!0}}]);
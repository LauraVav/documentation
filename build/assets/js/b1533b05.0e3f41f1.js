"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4670],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:5},l="Subsentence class",c={unversionedId:"python-sdk/subsentence-class",id:"python-sdk/subsentence-class",isDocsHomePage:!1,title:"Subsentence class",description:"Subsentence inherits from TextChunk.",source:"@site/docs/python-sdk/subsentence-class.md",sourceDirName:"python-sdk",slug:"/python-sdk/subsentence-class",permalink:"/docs/python-sdk/subsentence-class",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Sentence class",permalink:"/docs/python-sdk/sentence-class"},next:{title:"Token class",permalink:"/docs/python-sdk/token-class"}},p=[{value:"Attributes / Properties",id:"attributes--properties",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subsentence-class"},"Subsentence class"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Subsentence")," inherits from ",(0,o.kt)("a",{parentName:"p",href:"https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/what-is-textchunk"},"TextChunk"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Subsentence")," stores data relative to a part of a sentence. For longer and more complicated sentences it can be advantageous to cut it in multiple pieces to have a more detailed analysis."),(0,o.kt)("p",null,"For example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"I liked the park but it was raining and the weather was cold \n")),(0,o.kt)("p",null,"would be cut into:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"I liked the park but it was raining and the weather was cold\n")),(0,o.kt)("p",null,"In this case it allows to perform more precise sentiment analysis than assigning a score to the whole sentence."),(0,o.kt)("p",null,"Subsentence is iterable and will yield instances of Token class."),(0,o.kt)("h2",{id:"attributes--properties"},"Attributes / Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"tokens"),(0,o.kt)("td",{parentName:"tr",align:null},"list of ",(0,o.kt)("a",{parentName:"td",href:"https://lettria-doc.netlify.app/docs/python-sdk/token-class"},"Token")," instances"),(0,o.kt)("td",{parentName:"tr",align:null},"List of ",(0,o.kt)("strong",{parentName:"td"},"Token")," in the subsentence")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://lettria-doc.netlify.app/docs/python-sdk/common-properties"},"common properties")),(0,o.kt)("td",{parentName:"tr",align:null},"depends on property"),(0,o.kt)("td",{parentName:"tr",align:null},"Properties allowing access to specific data (pos, token etc.)")))))}d.isMDXComponent=!0}}]);
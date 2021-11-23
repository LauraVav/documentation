"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,g=d["".concat(u,".").concat(y)]||d[y]||p[y]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},u="Getting started",c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting started",description:"This page will help you get started with the  Lettria doc center. You'll be up and running in no time \u23f1",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Python SDK",permalink:"/docs/python-sdk/python-sdk"}},s=[{value:"Getting you API key",id:"getting-you-api-key",children:[],level:2},{value:"Installing Lettria",id:"installing-lettria",children:[],level:2},{value:"Importing the library",id:"importing-the-library",children:[],level:2},{value:"Ready, set...go!",id:"ready-setgo",children:[],level:2}],p={toc:s};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"This page will help you get started with the  ",(0,a.kt)("strong",{parentName:"p"},"Lettria doc center"),". You'll be up and running in no time \u23f1"),(0,a.kt)("p",null,"Our documentation is here to guide you through your usage of our public API. You'll find all you need in regards to every object returned by the Lettria API."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"started",src:n(3495).Z})),(0,a.kt)("p",null,"If you are looking for information reagarding a specific topic select one of the categories from the \ud83d\udc48 side menu and select the corresponding topic you`d like to know more about."),(0,a.kt)("p",null,"If you are new to NLP you can take a look at our tutorials to get an idea of what inforamtion you`d like to extract and analyze from your document. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Getting started",src:n(6231).Z})),(0,a.kt)("h2",{id:"getting-you-api-key"},"Getting you API key"),(0,a.kt)("p",null,"In order to start using our API you'll need a personal API key from Lettria. "),(0,a.kt)("p",null,"Create you free Lettria account ",(0,a.kt)("a",{parentName:"p",href:"https://www.lettria.com/fr/demo"},"here")," \ud83d\udc48"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("strong",{parentName:"p"},"project")," and from the project page select the ",(0,a.kt)("strong",{parentName:"p"},"tokens")," menu and copy you free API key \ud83d\udd11"),(0,a.kt)("p",null,"Once you've installed the Lettria API you can add you own documents and start analyzing using our NLP."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"api-key",src:n(7248).Z})),(0,a.kt)("h2",{id:"installing-lettria"},"Installing Lettria"),(0,a.kt)("p",null,"Lettria provides you with a Python package to facilitate the use of its API. You can install the latest version via pip, a package manager for Python."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"pip install lettria\n")),(0,a.kt)("h2",{id:"importing-the-library"},"Importing the library"),(0,a.kt)("p",null,"In order to use the Lettria API you'll need to import the library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n")),(0,a.kt)("h2",{id:"ready-setgo"},"Ready, set...go!"),(0,a.kt)("p",null,"Now your ready to add your document and start analyzing your text. Check out the left hand menu \ud83d\udc48 to see which tools you would like to use to extract the elements you need. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ready",src:n(968).Z})))}d.isMDXComponent=!0},7248:function(e,t,n){t.Z=n.p+"assets/images/api-key-d8b3aa923ee0382f360ce36578943258.png"},6231:function(e,t,n){t.Z=n.p+"assets/images/getting-started-3a96d52449cd01832842afc1aee4b571.png"},968:function(e,t,n){t.Z=n.p+"assets/images/ready-go-ee4092eba0035828a94f226aba751085.png"},3495:function(e,t,n){t.Z=n.p+"assets/images/started-8ed03d6aa1af928a43f1aa569e0f1130.png"}}]);
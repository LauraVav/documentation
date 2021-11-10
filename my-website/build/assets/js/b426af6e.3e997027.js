"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6458],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:4},u="Language Recognition",p={unversionedId:"Tutorials/language-recognition",id:"Tutorials/language-recognition",isDocsHomePage:!1,title:"Language Recognition",description:"Video",source:"@site/docs/Tutorials/language-recognition.md",sourceDirName:"Tutorials",slug:"/Tutorials/language-recognition",permalink:"/docs/Tutorials/language-recognition",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Sentence Type",permalink:"/docs/Tutorials/sentence-type"},next:{title:"Tokenizer",permalink:"/docs/Tutorials/tokenizer"}},c=[{value:"Video",id:"video",children:[],level:2},{value:"Tutorial",id:"tutorial",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],s={toc:c};function d(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"language-recognition"},"Language Recognition"),(0,o.kt)("h2",{id:"video"},"Video"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=nx6ElALenPc"},(0,o.kt)("img",{alt:"Video",src:n(4272).Z}))),(0,o.kt)("h2",{id:"tutorial"},"Tutorial"),(0,o.kt)("p",null,"In order to extract the language you'll need to have you document saved on your computer."),(0,o.kt)("p",null,"After you've installed the Lettria package on Python you'll need to import the library"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"**import lettria**\n")),(0,o.kt)("p",null,"Next you are going to need to include your personal API key which can be found"),(0,o.kt)("p",null,"via the Lettria platform in the dashboard."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"api_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n")),(0,o.kt)("p",null,"Now you will need to open your saved document. Be sure to add the name of"),(0,o.kt)("p",null,"\u2018your file\u2019 since it may differ from the name of my example file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n')),(0,o.kt)("p",null,"Next I am going to add the document to the NLP and then print the results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"nlp.add_document(example_data)\nprint([s.language for s in nlp.sentences])\n")),(0,o.kt)("p",null,"In order to save your results you can use the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results('example_results')\n")),(0,o.kt)("p",null,"And a json file with you results that can be used for further analysis will be saved."),(0,o.kt)("h2",{id:"code-set"},"Code set"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n\napi_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n\nwith open(\"example.txt\", \"r\") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\nprint([s.language for s in nlp.sentences])\n\nnlp.save_results('example_results')\n")))}d.isMDXComponent=!0},4272:function(e,t,n){t.Z=n.p+"assets/images/LR-thumbnail-808876fe10e1c6e0a436a8c4d97fcb42.png"}}]);
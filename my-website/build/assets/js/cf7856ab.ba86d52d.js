"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7318],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(u,".").concat(g)]||d[g]||s[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9561:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},u="Language Recognition",c={unversionedId:"Tutorials/API/language-recognition",id:"Tutorials/API/language-recognition",isDocsHomePage:!1,title:"Language Recognition",description:"Video",source:"@site/docs/Tutorials/API/language-recognition.md",sourceDirName:"Tutorials/API",slug:"/Tutorials/API/language-recognition",permalink:"/docs/Tutorials/API/language-recognition",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Sentence Type",permalink:"/docs/Tutorials/API/sentence-type"},next:{title:"Tokenizer",permalink:"/docs/Tutorials/API/tokenizer"}},p=[{value:"Video",id:"video",children:[],level:2},{value:"What is language recognition?",id:"what-is-language-recognition",children:[],level:2},{value:"Importing the library &amp; your personal API key",id:"importing-the-library--your-personal-api-key",children:[],level:2},{value:"Adding your document",id:"adding-your-document",children:[],level:2},{value:"Extracting the language",id:"extracting-the-language",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"language-recognition"},"Language Recognition"),(0,o.kt)("h2",{id:"video"},"Video"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/dpoxhXB3gw0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"what-is-language-recognition"},"What is language recognition?"),(0,o.kt)("p",null,"In natural language processing, language identification or language guessing is the problem of determining which natural language given content is in. Computational approaches to this problem view it as a special case of text categorization, solved with various statistical methods. "),(0,o.kt)("h2",{id:"importing-the-library--your-personal-api-key"},"Importing the library & your personal API key"),(0,o.kt)("p",null,"In order to extract the language you'll need to have you document saved on your computer."),(0,o.kt)("p",null,"After you've installed the Lettria package on Python you'll need to import the library"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"**import lettria**\n")),(0,o.kt)("p",null,"Next you are going to need to include your personal API key which can be found"),(0,o.kt)("p",null,"via the Lettria platform in the dashboard."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"api_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n")),(0,o.kt)("h2",{id:"adding-your-document"},"Adding your document"),(0,o.kt)("p",null,"Now you will need to open your saved document. Be sure to add the name of"),(0,o.kt)("p",null,"\u2018your file\u2019 since it may differ from the name of my example file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n')),(0,o.kt)("p",null,"Next I am going to add the document to the NLP and then print the results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"nlp.add_document(example_data)\n")),(0,o.kt)("h2",{id:"extracting-the-language"},"Extracting the language"),(0,o.kt)("p",null,"In order to extract the language of your document add the following command and run your code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print([s.language for s in nlp.sentences])\n")),(0,o.kt)("p",null,"In order to save your results you can use the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results('example_results')\n")),(0,o.kt)("p",null,"And a json file with you results that can be used for further analysis will be saved."),(0,o.kt)("h2",{id:"code-set"},"Code set"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n\napi_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n\nwith open(\"example.txt\", \"r\") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\nprint([s.language for s in nlp.sentences])\n\nnlp.save_results('example_results')\n")))}d.isMDXComponent=!0}}]);
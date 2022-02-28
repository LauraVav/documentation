"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[745],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2292:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:2},s="Lemmatizer",u={unversionedId:"Tutorials/API/detail/lemmatizer",id:"version-2.0/Tutorials/API/detail/lemmatizer",isDocsHomePage:!1,title:"Lemmatizer",description:"Video",source:"@site/versioned_docs/version-2.0/Tutorials/API/detail/lemmatizer.md",sourceDirName:"Tutorials/API/detail",slug:"/Tutorials/API/detail/lemmatizer",permalink:"/documentation/docs/Tutorials/API/detail/lemmatizer",tags:[],version:"2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-2.0/tutorialSidebar",previous:{title:"POS Tagger",permalink:"/documentation/docs/Tutorials/API/detail/pos-tagger"},next:{title:"Intent Detection",permalink:"/documentation/docs/Tutorials/API/detail/intent-detection"}},c=[{value:"Video",id:"video",children:[],level:2},{value:"What\u2019s a lemmatizer?",id:"whats-a-lemmatizer",children:[],level:2},{value:"Importing the library &amp; your personal API key",id:"importing-the-library--your-personal-api-key",children:[],level:2},{value:"Adding your document",id:"adding-your-document",children:[],level:2},{value:"Extracting lemmas",id:"extracting-lemmas",children:[],level:2},{value:"Saving your results",id:"saving-your-results",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lemmatizer"},"Lemmatizer"),(0,o.kt)("h2",{id:"video"},"Video"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/8wqI7Wzoxkk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"whats-a-lemmatizer"},"What\u2019s a lemmatizer?"),(0,o.kt)("p",null,"Lemmatization is a tool of computational linguistics that does the work of ",(0,o.kt)("strong",{parentName:"p"},"extracting the lexical roots of words.")," It does not rely on sentence construction but on the lexicon, bringing out the root form of the word without inflection (no \u201cs\u201d for plural or other suffixes, for example)."),(0,o.kt)("h2",{id:"importing-the-library--your-personal-api-key"},"Importing the library & your personal API key"),(0,o.kt)("p",null,"If you want to extract the lexical roots of words you can use the lemmatization tool."),(0,o.kt)("p",null,"First you\u2019ll need to have your document saved to your computer and the Lettria SDK installed."),(0,o.kt)("p",null,"First I am going to import the Lettria library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"Import lettria\n")),(0,o.kt)("p",null,"Next, add your personal API key to the nlp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"api_key = \u2018api_key\u2019\nnlp = lettria.NLP(api_key)\n")),(0,o.kt)("h2",{id:"adding-your-document"},"Adding your document"),(0,o.kt)("p",null,"Next you'll need to add your document."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\n')),(0,o.kt)("h2",{id:"extracting-lemmas"},"Extracting lemmas"),(0,o.kt)("p",null,"In order to extract the lemma for each token in a sentences you can print the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print([s.lemma for s in nlp.sentences])\n")),(0,o.kt)("h2",{id:"saving-your-results"},"Saving your results"),(0,o.kt)("p",null,"In order to save your results you can use the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results(\u2018example_results')\n")),(0,o.kt)("p",null,"And a json file with you results that can be used for further analysis will be saved."),(0,o.kt)("h2",{id:"code-set"},"Code set"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'Import lettria\n\napi_key = \u2018api_key\u2019\nnlp = lettria.NLP(api_key)\n\nwith open("example.txt", "r") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\n\nprint([s.lemma for s in nlp.sentences])\n\nnlp.save_results(\u2018example_results\')\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://app.lettria.com/signup"},(0,o.kt)("img",{alt:"register-sticky",src:r(4209).Z}))))}d.isMDXComponent=!0},4209:function(e,t,r){t.Z=r.p+"assets/images/register-sticky-0bf1e35cb49b633a37ddd712c2cfde47.png"}}]);
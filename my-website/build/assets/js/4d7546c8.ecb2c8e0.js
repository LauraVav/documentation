"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9656],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,f=p["".concat(u,".").concat(y)]||p[y]||s[y]||a;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3897:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={sidebar_position:3},u="Word Frequency",c={unversionedId:"Tutorials/Python SDK/word-frequency",id:"Tutorials/Python SDK/word-frequency",isDocsHomePage:!1,title:"Word Frequency",description:"Video",source:"@site/docs/Tutorials/Python SDK/word-frequency.md",sourceDirName:"Tutorials/Python SDK",slug:"/Tutorials/Python SDK/word-frequency",permalink:"/docs/Tutorials/Python SDK/word-frequency",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Word Count",permalink:"/docs/Tutorials/Python SDK/word-count"},next:{title:"List Entities",permalink:"/docs/Tutorials/Python SDK/list-entities"}},d=[{value:"Video",id:"video",children:[],level:2},{value:"What is word frequency?",id:"what-is-word-frequency",children:[],level:2},{value:"Importing the library &amp; your personal API key",id:"importing-the-library--your-personal-api-key",children:[],level:2},{value:"Adding your document",id:"adding-your-document",children:[],level:2},{value:"Extracting the word frequency",id:"extracting-the-word-frequency",children:[],level:2},{value:"Extracting additional details",id:"extracting-additional-details",children:[],level:2},{value:"Saving your results",id:"saving-your-results",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],s={toc:d};function p(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"word-frequency"},"Word Frequency"),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ZhQFJsitiLE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"what-is-word-frequency"},"What is word frequency?"),(0,a.kt)("p",null,"In order to obtain the frequency of words in your document you can use the TextChunk class word frequency tool. Word frequency lets you know how common a word is."),(0,a.kt)("h2",{id:"importing-the-library--your-personal-api-key"},"Importing the library & your personal API key"),(0,a.kt)("p",null,"After you've installed the Lettria package on Python you'll need to import the library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n")),(0,a.kt)("p",null,"Next you are going to need to include your personal API key which can be found"),(0,a.kt)("p",null,"via the Lettria platform in the dashboard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"api_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n")),(0,a.kt)("h2",{id:"adding-your-document"},"Adding your document"),(0,a.kt)("p",null,"Now you will need to open your saved document. Be sure to add the name of"),(0,a.kt)("p",null,"\u2018your file\u2019 since it may differ from the name of my example file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n')),(0,a.kt)("p",null,"Next, add the document to the NLP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nlp.add_document(example_data)\n")),(0,a.kt)("h2",{id:"extracting-the-word-frequency"},"Extracting the word frequency"),(0,a.kt)("p",null,"In order to extract the word frequency from this document use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"word_frequency = nlp.word_frequency\nword_frequency(filter_pos = None, lemma=False)\n")),(0,a.kt)("p",null,"In the results you will have a list of words, part of speech and the inverse document frequency."),(0,a.kt)("h2",{id:"extracting-additional-details"},"Extracting additional details"),(0,a.kt)("p",null,"If you would like to filter out parts of speech such as \u2018noun\u2019 you can change the filter criteria."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"word_frequency = nlp.word_frequency\nword_frequency(filter_pos = 'N', lemma=False)\n")),(0,a.kt)("p",null,"Now you can see within the results all the words and number of occurrences falling under \u2018noun\u2019 has been filtered out."),(0,a.kt)("h2",{id:"saving-your-results"},"Saving your results"),(0,a.kt)("p",null,"In order to save your results you can use the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results(\u2018example_results')\n")),(0,a.kt)("p",null,"And a json file with your results that can be used for further analysis will be saved."),(0,a.kt)("h2",{id:"code-set"},"Code set"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n\napi_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n\nwith open(\"example.txt\", \"r\") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\n\nword_frequency = nlp.word_frequency\nword_frequency(filter_pos = None, lemma=False)\n\nword_frequency = nlp.word_frequency\nword_frequency(filter_pos = 'N', lemma=False)\n\nnlp.save_results(\u2018example_results')\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.lettria.com/signup"},(0,a.kt)("img",{alt:"register-sticky",src:r(4209).Z}))))}p.isMDXComponent=!0},4209:function(e,t,r){t.Z=r.p+"assets/images/register-sticky-0bf1e35cb49b633a37ddd712c2cfde47.png"}}]);
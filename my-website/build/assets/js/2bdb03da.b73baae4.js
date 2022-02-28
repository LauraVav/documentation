"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7131],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),y=a,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6720:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},s="Sentence Type",c={unversionedId:"Tutorials/API/sentence-type",id:"version-1.0/Tutorials/API/sentence-type",isDocsHomePage:!1,title:"Sentence Type",description:"Video",source:"@site/versioned_docs/version-1.0/Tutorials/API/sentence-type.md",sourceDirName:"Tutorials/API",slug:"/Tutorials/API/sentence-type",permalink:"/documentation/docs/1.0/Tutorials/API/sentence-type",tags:[],version:"1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-1.0/tutorialSidebar",previous:{title:"Lemmatizer",permalink:"/documentation/docs/1.0/Tutorials/API/lemmatizer"},next:{title:"Language Recognition",permalink:"/documentation/docs/1.0/Tutorials/API/language-recognition"}},p=[{value:"Video",id:"video",children:[],level:2},{value:"What is sentence identification?",id:"what-is-sentence-identification",children:[],level:2},{value:"Importing the library &amp; your personal API key",id:"importing-the-library--your-personal-api-key",children:[],level:2},{value:"Adding your document",id:"adding-your-document",children:[],level:2},{value:"Extracting the sentence type",id:"extracting-the-sentence-type",children:[],level:2},{value:"Saving your results",id:"saving-your-results",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sentence-type"},"Sentence Type"),(0,o.kt)("h2",{id:"video"},"Video"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/TRwULybXU7U",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"what-is-sentence-identification"},"What is sentence identification?"),(0,o.kt)("p",null,"Sentence identification is\xa0an ",(0,o.kt)("strong",{parentName:"p"},"NLP tasks that have a wide range of applications such as document classification, spam filtering, and sentiment analysis"),". The Lettria sentence type tool enables us to quickly recognize and extract the sentence type from your document. "),(0,o.kt)("h2",{id:"importing-the-library--your-personal-api-key"},"Importing the library & your personal API key"),(0,o.kt)("p",null,"In order to define the sentence type from your document you'll need to have your document saved on your computer."),(0,o.kt)("p",null,"After you've installed the Lettria package on Python you'll need to import the library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n")),(0,o.kt)("p",null,"Next you are going to need to include your personal API key which can be found"),(0,o.kt)("p",null,"via the Lettria platform in the dashboard."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"api_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n")),(0,o.kt)("h2",{id:"adding-your-document"},"Adding your document"),(0,o.kt)("p",null,"Now you will need to open your saved document. Be sure to add the name of"),(0,o.kt)("p",null,"\u2018your file\u2019 since it may differ from the name of my example file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n')),(0,o.kt)("p",null,"Next I am going to add the document to the NLP."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"nlp.add_document(example_data)\n")),(0,o.kt)("h2",{id:"extracting-the-sentence-type"},"Extracting the sentence type"),(0,o.kt)("p",null,"Next I am going to add my sentence and print it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"for s in nlp.sentences:\n    print([s])\n")),(0,o.kt)("p",null,"To see the type of sentence I am going to to print the sentence_type command in the the NLP."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print([s.sentence_type for s in nlp.sentences])\n")),(0,o.kt)("p",null,"The results will reveal your sentence type."),(0,o.kt)("h2",{id:"saving-your-results"},"Saving your results"),(0,o.kt)("p",null,"If you have a lot of sentence to analyze you can save your results in a JSON file for further analysis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results(\u2018example_results')\n")),(0,o.kt)("p",null,"And a json file with you results that can be used for further analysis will be saved."),(0,o.kt)("h2",{id:"code-set"},"Code set"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n\napi_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n\nwith open(\"example.txt\", \"r\") as f:\n    example_data = f.readlines()\n\nnlp.add_document(st_data)\n\nfor s in nlp.sentences:\n    print([s])\n    print([s.sentence_type for s in nlp.sentences])\n\nnlp.save_results('example_results')\n")))}d.isMDXComponent=!0}}]);
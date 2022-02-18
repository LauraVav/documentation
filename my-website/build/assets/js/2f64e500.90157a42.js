"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1899],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1368:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],s={sidebar_position:15},i="Sentence Class",c={unversionedId:"Tutorials/Python SDK/sentence-class",id:"Tutorials/Python SDK/sentence-class",isDocsHomePage:!1,title:"Sentence Class",description:"Video",source:"@site/docs/Tutorials/Python SDK/sentence-class.md",sourceDirName:"Tutorials/Python SDK",slug:"/Tutorials/Python SDK/sentence-class",permalink:"/docs/Tutorials/Python SDK/sentence-class",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Document Class",permalink:"/docs/Tutorials/Python SDK/document-class"},next:{title:"Subsentence Class",permalink:"/docs/Tutorials/Python SDK/subsentence-class"}},u=[{value:"Video",id:"video",children:[],level:2},{value:"What is the sentence class?",id:"what-is-the-sentence-class",children:[],level:2},{value:"Importing the library &amp; your personal API key",id:"importing-the-library--your-personal-api-key",children:[],level:2},{value:"Adding your document",id:"adding-your-document",children:[],level:2},{value:"Extracting subsentences",id:"extracting-subsentences",children:[],level:2},{value:"Extracting properties",id:"extracting-properties",children:[],level:2},{value:"Saving your results",id:"saving-your-results",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sentence-class"},"Sentence Class"),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sentence class",src:n(7590).Z})),(0,a.kt)("h2",{id:"what-is-the-sentence-class"},"What is the sentence class?"),(0,a.kt)("p",null,"Sentence stores data for a sentence. Sentences are delimited automatically from the input raw text. For longer and more complicated sentences it can be advantageous to further cut the sentences into subsentences."),(0,a.kt)("h2",{id:"importing-the-library--your-personal-api-key"},"Importing the library & your personal API key"),(0,a.kt)("p",null,"After you've installed the Lettria package on Python you'll need to import the library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n")),(0,a.kt)("p",null,"Next you are going to need to include your personal API key which can be found via the Lettria platform in the dashboard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"api_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n")),(0,a.kt)("h2",{id:"adding-your-document"},"Adding your document"),(0,a.kt)("p",null,"Now you will need to open your saved document. Be sure to add the name of"),(0,a.kt)("p",null,"\u2018your file\u2019 since it may differ from the name of my example file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n')),(0,a.kt)("p",null,"Next add the document to the NLP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nlp.add_document(example_data)\n")),(0,a.kt)("h2",{id:"extracting-subsentences"},"Extracting subsentences"),(0,a.kt)("p",null,"In order to extract the subsentences in your document use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"subsentences = nlp.subsentences\nprint(subsentences)\n")),(0,a.kt)("p",null,"Returns a list of subsentences in your document."),(0,a.kt)("h2",{id:"extracting-properties"},"Extracting properties"),(0,a.kt)("p",null,"Sentence class also allows you to extract the tokens in the sentences of your document."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"tokens = nlp.tokens\nprint(tokens)\n")),(0,a.kt)("p",null,"Lastly you can extract common properties with the Sentence class."),(0,a.kt)("p",null,"Some popular common properties include; token, lemma, pos, language etc. To have a full list of common properties check out our documentation."),(0,a.kt)("p",null,"A useful common property that could come in handy while extracting and analyzing elements is the morphology property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"morphology = nlp.morphology\nprint(morphology)\n")),(0,a.kt)("h2",{id:"saving-your-results"},"Saving your results"),(0,a.kt)("p",null,"In order to save your results you can use the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results(\u2018example_results')\n")),(0,a.kt)("p",null,"And a json file with your results that can be used for further analysis will be saved."),(0,a.kt)("h2",{id:"code-set"},"Code set"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import lettria\n\napi_key = \'your personal API key\'\nnlp = lettria.NLP(api_key)\n\nwith open("example.txt", "r") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\n\nsubsentences = nlp.subsentences\nprint(subsentences)\n\ntokens = nlp.tokens\nprint(tokens)\n\nmorphology = nlp.morphology\nprint(morphology)\n\nnlp.save_results(\u2018example_results\')\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.lettria.com/signup"},(0,a.kt)("img",{alt:"register-sticky",src:n(4209).Z}))))}d.isMDXComponent=!0},4209:function(e,t,n){t.Z=n.p+"assets/images/register-sticky-0bf1e35cb49b633a37ddd712c2cfde47.png"},7590:function(e,t,n){t.Z=n.p+"assets/images/sentence-class-CS-0a49a893918b60678d7ec95fee7fe918.png"}}]);
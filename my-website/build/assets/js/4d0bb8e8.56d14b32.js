"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3523],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1005:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:6},u="Get Emotion",s={unversionedId:"Tutorials/Python SDK/get-emotion",id:"Tutorials/Python SDK/get-emotion",isDocsHomePage:!1,title:"Get Emotion",description:"Video",source:"@site/docs/Tutorials/Python SDK/get-emotion.md",sourceDirName:"Tutorials/Python SDK",slug:"/Tutorials/Python SDK/get-emotion",permalink:"/docs/Tutorials/Python SDK/get-emotion",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Get Sentiment",permalink:"/docs/Tutorials/Python SDK/get-sentiment-CS"},next:{title:"FAQs",permalink:"/docs/help/faq"}},c=[{value:"Video",id:"video",children:[],level:2},{value:"What is the get emotion tool?",id:"what-is-the-get-emotion-tool",children:[],level:2},{value:"Importing the library &amp; your personal API key",id:"importing-the-library--your-personal-api-key",children:[],level:2},{value:"Adding your document",id:"adding-your-document",children:[],level:2},{value:"Extracting emotions",id:"extracting-emotions",children:[],level:2},{value:"Analyzing your document further",id:"analyzing-your-document-further",children:[],level:2},{value:"Saving your results",id:"saving-your-results",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-emotion"},"Get Emotion"),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Get emotion",src:n(2770).Z})),(0,a.kt)("h2",{id:"what-is-the-get-emotion-tool"},"What is the get emotion tool?"),(0,a.kt)("p",null,"An analysis tool for emotions brings polarity to a document and identifies the emotions that are present."),(0,a.kt)("p",null,"In order to extract the emotions from a document you can use the get_emotion tool with Lettria."),(0,a.kt)("h2",{id:"importing-the-library--your-personal-api-key"},"Importing the library & your personal API key"),(0,a.kt)("p",null,"After you've installed the Lettria package on Python you'll need to import the library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n")),(0,a.kt)("p",null,"Next you are going to need to include your personal API key which can be found via the Lettria platform in the dashboard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"api_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n")),(0,a.kt)("h2",{id:"adding-your-document"},"Adding your document"),(0,a.kt)("p",null,"Now you will need to open your saved document. Be sure to add the name of"),(0,a.kt)("p",null,"\u2018your file\u2019 since it may differ from the name of my example file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n')),(0,a.kt)("p",null,"Next add the document to the NLP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nlp.add_document(example_data)\n")),(0,a.kt)("h2",{id:"extracting-emotions"},"Extracting emotions"),(0,a.kt)("p",null,"In order to extract the emotions from the document use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"get_emotion = nlp.get_emotion\nget_emotion(granularity = 'sentence')\n")),(0,a.kt)("p",null,"In the results you will find the emotion for the subsentence Which is labeled as one of the six emotion objects and the sentence is broken down as an emotional value represented in an interval value between -1 and 1. To see a complete key of the interval and corresponding emotions please go to the Lettria Doc center and review the Documentation."),(0,a.kt)("h2",{id:"analyzing-your-document-further"},"Analyzing your document further"),(0,a.kt)("p",null,"To further analyse the emotions in your document you can also use the get_emotion tool at the granularity of \u2018subsentence\u2019."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"get_emotion(granularity = 'subsentence')\n")),(0,a.kt)("h2",{id:"saving-your-results"},"Saving your results"),(0,a.kt)("p",null,"In order to save your results you can use the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results(\u2018example_results')\n")),(0,a.kt)("p",null,"And a json file with your results that can be used for further analysis will be saved."),(0,a.kt)("h2",{id:"code-set"},"Code set"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n\napi_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n\nwith open(\"example.txt\", \"r\") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\n\nget_emotion = nlp.get_emotion\nget_emotion(granularity = 'sentence')\n\nget_emotion(granularity = 'subsentence')\n\nnlp.save_results(\u2018example_results')\n")))}d.isMDXComponent=!0},2770:function(e,t,n){t.Z=n.p+"assets/images/get-emotion-CS-608e2e5debc157d6874f1744c029f547.png"}}]);
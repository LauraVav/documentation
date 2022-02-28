"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3107],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8218:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:5},s="Get Sentiment",u={unversionedId:"Tutorials/Python SDK/get-sentiment-CS",id:"version-1.0/Tutorials/Python SDK/get-sentiment-CS",isDocsHomePage:!1,title:"Get Sentiment",description:"Video",source:"@site/versioned_docs/version-1.0/Tutorials/Python SDK/get-sentiment-CS.md",sourceDirName:"Tutorials/Python SDK",slug:"/Tutorials/Python SDK/get-sentiment-CS",permalink:"/documentation/docs/1.0/Tutorials/Python SDK/get-sentiment-CS",tags:[],version:"1.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-1.0/tutorialSidebar",previous:{title:"List Entities",permalink:"/documentation/docs/1.0/Tutorials/Python SDK/list-entities"},next:{title:"Get Emotion",permalink:"/documentation/docs/1.0/Tutorials/Python SDK/get-emotion"}},c=[{value:"Video",id:"video",children:[],level:2},{value:"What is the get sentiment tool?",id:"what-is-the-get-sentiment-tool",children:[],level:2},{value:"Importing the library &amp; your personal API key",id:"importing-the-library--your-personal-api-key",children:[],level:2},{value:"Adding your document",id:"adding-your-document",children:[],level:2},{value:"Extracting sentiments",id:"extracting-sentiments",children:[],level:2},{value:"Analyzing your document further",id:"analyzing-your-document-further",children:[],level:2},{value:"Saving your results",id:"saving-your-results",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],p={toc:c};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-sentiment"},"Get Sentiment"),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Get sentiemnt",src:n(4661).Z})),(0,a.kt)("h2",{id:"what-is-the-get-sentiment-tool"},"What is the get sentiment tool?"),(0,a.kt)("p",null,"An analysis tool for sentiments brings polarity to a document and identifies the sentiments that are present."),(0,a.kt)("p",null,"In order to extract the negative and positive sentiments from a document you can use the get_sentiment tool with Lettria."),(0,a.kt)("h2",{id:"importing-the-library--your-personal-api-key"},"Importing the library & your personal API key"),(0,a.kt)("p",null,"After you've installed the Lettria package on Python you'll need to import the library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n")),(0,a.kt)("p",null,"Next you are going to need to include your personal API key which can be found via the Lettria platform in the dashboard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"api_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n")),(0,a.kt)("h2",{id:"adding-your-document"},"Adding your document"),(0,a.kt)("p",null,"Now you will need to open your saved document. Be sure to add the name of"),(0,a.kt)("p",null,"\u2018your file\u2019 since it may differ from the name of my example file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n')),(0,a.kt)("p",null,"Next I am going to add the document to the NLP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nlp.add_document(example_data)\n")),(0,a.kt)("h2",{id:"extracting-sentiments"},"Extracting sentiments"),(0,a.kt)("p",null,"In order to extract the sentiments from the document use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"get_sentiment = nlp.get_sentiment\nget_sentiment(granularity = 'sentence')\n")),(0,a.kt)("h2",{id:"analyzing-your-document-further"},"Analyzing your document further"),(0,a.kt)("p",null,"To further analyse the sentiments in your document you can also use the get_sentiment tool at the granularity of \u2018subsentence\u2019."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"get_sentiment(granularity = 'subsentence')\n")),(0,a.kt)("h2",{id:"saving-your-results"},"Saving your results"),(0,a.kt)("p",null,"In order to save your results you can use the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results(\u2018example_results')\n")),(0,a.kt)("p",null,"And a json file with your results that can be used for further analysis will be saved."),(0,a.kt)("h2",{id:"code-set"},"Code set"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n\napi_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n\nwith open(\"example.txt\", \"r\") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\n\nget_sentiment = nlp.get_sentiment\nget_sentiment(granularity = 'sentence')\n\nget_sentiment(granularity = 'subsentence')\n\nnlp.save_results(\u2018example_results')\n")))}m.isMDXComponent=!0},4661:function(e,t,n){t.Z=n.p+"assets/images/get-sentiment-CS-b8fffd20c8622a64642e5c16e4cd7b15.png"}}]);
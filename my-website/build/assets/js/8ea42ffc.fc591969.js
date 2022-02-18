"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6532],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8241:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:8},u="Word Emotion",s={unversionedId:"Tutorials/Python SDK/TextChunk/word-emotion",id:"version-2.0/Tutorials/Python SDK/TextChunk/word-emotion",isDocsHomePage:!1,title:"Word Emotion",description:"Video",source:"@site/versioned_docs/version-2.0/Tutorials/Python SDK/TextChunk/word-emotion.md",sourceDirName:"Tutorials/Python SDK/TextChunk",slug:"/Tutorials/Python SDK/TextChunk/word-emotion",permalink:"/documentation/docs/Tutorials/Python SDK/TextChunk/word-emotion",tags:[],version:"2.0",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"version-2.0/tutorialSidebar",previous:{title:"Word Sentiment",permalink:"/documentation/docs/Tutorials/Python SDK/TextChunk/word-sentiment"},next:{title:"Meaning Sentiment",permalink:"/documentation/docs/Tutorials/Python SDK/TextChunk/meaning-sentiment"}},c=[{value:"Video",id:"video",children:[],level:2},{value:"What is the word emotion tool?",id:"what-is-the-word-emotion-tool",children:[],level:2},{value:"Importing the library &amp; your personal API key",id:"importing-the-library--your-personal-api-key",children:[],level:2},{value:"Adding your document",id:"adding-your-document",children:[],level:2},{value:"Extracting emotions",id:"extracting-emotions",children:[],level:2},{value:"Saving your results",id:"saving-your-results",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],d={toc:c};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"word-emotion"},"Word Emotion"),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/RyXrqEf84rU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"what-is-the-word-emotion-tool"},"What is the word emotion tool?"),(0,a.kt)("p",null,"An analysis tool for emotions brings polarity to a document and identifies the emotions that are present. The word emotion tool enables you to extract the average emotion score for the words in your document at a sentence or subsentence granularity."),(0,a.kt)("h2",{id:"importing-the-library--your-personal-api-key"},"Importing the library & your personal API key"),(0,a.kt)("p",null,"In order to extract the word emotions from a document you can use the word emotion tool with Lettria."),(0,a.kt)("p",null,"After you've installed the Lettria package on Python you'll need to import the library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n")),(0,a.kt)("p",null,"Next you are going to need to include your personal API key which can be found via the Lettria platform in the dashboard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"api_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n")),(0,a.kt)("h2",{id:"adding-your-document"},"Adding your document"),(0,a.kt)("p",null,"Now you will need to open your saved document. Be sure to add the name of"),(0,a.kt)("p",null,"\u2018your file\u2019 since it may differ from the name of my example file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n')),(0,a.kt)("p",null,"Next add the document to the NLP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nlp.add_document(example_data)\n")),(0,a.kt)("h2",{id:"extracting-emotions"},"Extracting emotions"),(0,a.kt)("p",null,"In order to extract the emotions from the document use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"word_emotion = nlp.word_emotion\nword_emotion(granularity = 'sentence')\n")),(0,a.kt)("p",null,"Returns the average score for each emotion for each word or lemma in the vocabulary. For each sentence or subsentence (granularity parameter), the emotion scores are added to each of the words present. The scores are divided by the number of sentences or subsentences to get an average (or list of values if 'average' == False)."),(0,a.kt)("p",null,"To further analyse the emotions in your document you can also use the word_emotion tool with the granularity of \u2018subsentence\u2019."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"word_emotion(granularity = 'subsentence')\n")),(0,a.kt)("h2",{id:"saving-your-results"},"Saving your results"),(0,a.kt)("p",null,"In order to save your results you can use the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results(\u2018example_results')\n")),(0,a.kt)("p",null,"And a json file with your results that can be used for further analysis will be saved."),(0,a.kt)("h2",{id:"code-set"},"Code set"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n\napi_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n\nwith open(\"example.txt\", \"r\") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\n\n**word_emotion = nlp.word_emotion\nword_emotion(granularity = 'sentence')\n\nword_emotion(granularity = 'subsentence')\n\nnlp.save_results(\u2018example_results')**\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.lettria.com/signup"},(0,a.kt)("img",{alt:"register-sticky",src:n(4209).Z}))))}p.isMDXComponent=!0},4209:function(e,t,n){t.Z=n.p+"assets/images/register-sticky-0bf1e35cb49b633a37ddd712c2cfde47.png"}}]);
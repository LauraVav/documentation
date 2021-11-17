"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[531],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return t?o.createElement(y,i(i({ref:n},p),{},{components:t})):o.createElement(y,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5163:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:7},s="Emotion Analysis",u={unversionedId:"Tutorials/emotion-analysis",id:"Tutorials/emotion-analysis",isDocsHomePage:!1,title:"Emotion Analysis",description:"Video",source:"@site/docs/Tutorials/emotion-analysis.md",sourceDirName:"Tutorials",slug:"/Tutorials/emotion-analysis",permalink:"/docs/Tutorials/emotion-analysis",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Dependency Parser",permalink:"/docs/Tutorials/dependency-parser"},next:{title:"Sentiment Analysis",permalink:"/docs/Tutorials/sentiment-analysis"}},p=[{value:"Video",id:"video",children:[],level:2},{value:"Importing the library &amp; adding your personal API key",id:"importing-the-library--adding-your-personal-api-key",children:[],level:2},{value:"Adding your document",id:"adding-your-document",children:[],level:2},{value:"Extracting emotions",id:"extracting-emotions",children:[],level:2},{value:"Saving your results",id:"saving-your-results",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],c={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"emotion-analysis"},"Emotion Analysis"),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/19I_UMYF6O8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h1",{id:"what-is-emotion-analysis"},"What is emotion analysis?"),(0,a.kt)("p",null,"An analysis tool for emotions (emotion analysis) brings polarity to a document and identifies the  emotions that are present. Emotion detection is a work of understanding the meaning of what is most subtle, contextual and cultural. The goal is to find and categorize the language data that reveals what is neutral, positive or negative. Often related to taking a stand or expressing an opinion, this analysis relies on polarity before categorizing the found elements according to a known typology: opinion, sentiment, emotion, information."),(0,a.kt)("h2",{id:"importing-the-library--adding-your-personal-api-key"},"Importing the library & adding your personal API key"),(0,a.kt)("p",null,"If you want to extract the emotion from sentences and subsentences in your document you'll need to have your document saved on your computer."),(0,a.kt)("p",null,"After you've installed the Lettria package on Python you'll need to import the library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n")),(0,a.kt)("p",null,"Next you are going to need to include your personal API key which can be found"),(0,a.kt)("p",null,"via the Lettria platform in the dashboard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"api_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n")),(0,a.kt)("h2",{id:"adding-your-document"},"Adding your document"),(0,a.kt)("p",null,"Now you will need to open your saved document. Be sure to add the name of"),(0,a.kt)("p",null,"\u2018your file\u2019 since it may differ from the name of the example file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n')),(0,a.kt)("p",null,"Next add your document to the NLP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nlp.add_document(example_data)\n")),(0,a.kt)("h2",{id:"extracting-emotions"},"Extracting emotions"),(0,a.kt)("p",null,"Next you will need to print the emotion for the subsentence and sentence from the sentences in your document."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print([s.emotion for s in nlp.subsentences])\nprint([s.emotion for s in nlp.sentences])\n")),(0,a.kt)("p",null,"In the results you will find the emotion for the subsentence Which is labeled as one of the six emotion objects and the sentence is broken down as an emotional value represented in an interval value between -1 and 1. Each interval represents an emotion ! Is happiness between 0 and 1 is sadness and -1 is fear. To see a complete key of the interval and corresponding emotions please go to the Lettria Doc center and review the Documentation."),(0,a.kt)("h2",{id:"saving-your-results"},"Saving your results"),(0,a.kt)("p",null,"In order to save your results you can use the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results(\u2018example_results')\n")),(0,a.kt)("p",null,"And a json file with you results that can be used for further analysis will be saved."),(0,a.kt)("h2",{id:"code-set"},"Code set"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import lettria\n\napi_key = \'your personal API key\'\nnlp = lettria.NLP(api_key)\n\nwith open("example.txt", "r") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\n\nprint([s.emotion for s in nlp.subsentences])\nprint([s.emotion for s in nlp.sentences])\n\nnlp.save_results(\u2018example_results\')\n')))}d.isMDXComponent=!0}}]);
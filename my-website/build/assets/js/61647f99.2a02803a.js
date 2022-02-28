"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[795],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2360:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:10},s="NER",u={unversionedId:"Tutorials/API/ner",id:"version-1.0/Tutorials/API/ner",isDocsHomePage:!1,title:"NER",description:"Video",source:"@site/versioned_docs/version-1.0/Tutorials/API/ner.md",sourceDirName:"Tutorials/API",slug:"/Tutorials/API/ner",permalink:"/documentation/docs/1.0/Tutorials/API/ner",tags:[],version:"1.0",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"version-1.0/tutorialSidebar",previous:{title:"Intent Detection",permalink:"/documentation/docs/1.0/Tutorials/API/intent-detection"},next:{title:"Vocabulary",permalink:"/documentation/docs/1.0/Tutorials/Python SDK/vocabulary"}},c=[{value:"Video",id:"video",children:[],level:2},{value:"What is named entity recognition?",id:"what-is-named-entity-recognition",children:[],level:2},{value:"Importing the library &amp; your personal API key",id:"importing-the-library--your-personal-api-key",children:[],level:2},{value:"Adding your document",id:"adding-your-document",children:[],level:2},{value:"Extracting entities",id:"extracting-entities",children:[],level:2},{value:"Extracting more details",id:"extracting-more-details",children:[],level:2},{value:"Saving your results",id:"saving-your-results",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ner"},"NER"),(0,i.kt)("h2",{id:"video"},"Video"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/8wqI7Wzoxkk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"what-is-named-entity-recognition"},"What is named entity recognition?"),(0,i.kt)("p",null,'NER ("Named Entity Recognition"\xa0 is a common problem in NLP which consists of extracting entities from a text and classifying them in predefined categories (date, organization, speed, mass ... ).'),(0,i.kt)("p",null,"Lettria allows you to extract and manipulate no less than 40 different entities. See the exhaustive list of elements established by the Lettria API."),(0,i.kt)("h2",{id:"importing-the-library--your-personal-api-key"},"Importing the library & your personal API key"),(0,i.kt)("p",null,"If you want to extract the entities from your document you'll need to have your document saved on your computer."),(0,i.kt)("p",null,"After you've installed the Lettria package on Python you'll need to import the library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n")),(0,i.kt)("p",null,"Next you are going to need to include your personal API key which can be found"),(0,i.kt)("p",null,"via the Lettria platform in the dashboard."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"api_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n")),(0,i.kt)("h2",{id:"adding-your-document"},"Adding your document"),(0,i.kt)("p",null,"Now you will need to open your saved document. Be sure to add the name of"),(0,i.kt)("p",null,"\u2018your file\u2019 since it may differ from the name of my example file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n')),(0,i.kt)("p",null,"Next I am going to add the document to the NLP."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"nlp.add_document(example_data)\n")),(0,i.kt)("h2",{id:"extracting-entities"},"Extracting entities"),(0,i.kt)("p",null,"In order to get a list of the entities found within my document I am going to add the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"entities = nlp.list_entities()\nfor entity in entities:\n    print(entity)\n")),(0,i.kt)("p",null,"As you can see I have a list of the current entities found within my document."),(0,i.kt)("h2",{id:"extracting-more-details"},"Extracting more details"),(0,i.kt)("p",null,"To have more details regarding these entities you can print the token and the corresponding ner token."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"for t in nlp.tokens:\n    print(t.token, t.ner)\n")),(0,i.kt)("p",null,"For each token we obtain the possible type or types of entities as well as the associated values, for example the dates are converted into ISO format and the durations are converted into numerical format."),(0,i.kt)("h2",{id:"saving-your-results"},"Saving your results"),(0,i.kt)("p",null,"In order to save your results you can use the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results(\u2018example_results')\n")),(0,i.kt)("p",null,"And a json file with you results that can be used for further analysis will be saved."),(0,i.kt)("h2",{id:"code-set"},"Code set"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import lettria\n\napi_key = \'your personal API key\'\nnlp = lettria.NLP(api_key)\n\nwith open("example.txt", "r") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\n\nentities = nlp.list_entities()\nfor entity in entities:\n    print(entity)\n\nfor t in nlp.tokens:\n    print(t.token, t.ner)\n\nnlp.save_results(\u2018example_results\')\n')))}d.isMDXComponent=!0}}]);
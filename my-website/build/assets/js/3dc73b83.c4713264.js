"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4648],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:1},s="POS tagger",p={unversionedId:"Tutorials/pos-tagger",id:"Tutorials/pos-tagger",isDocsHomePage:!1,title:"POS tagger",description:"Video",source:"@site/docs/Tutorials/pos-tagger.md",sourceDirName:"Tutorials",slug:"/Tutorials/pos-tagger",permalink:"/docs/Tutorials/pos-tagger",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Categories",permalink:"/docs/API/Glossary/categories"},next:{title:"Lemmatizer",permalink:"/docs/Tutorials/lemmatizer"}},u=[{value:"Video",id:"video",children:[],level:2},{value:"What\u2019s a pos-tagger ?",id:"whats-a-pos-tagger-",children:[],level:2},{value:"What does it do? How does it work?",id:"what-does-it-do-how-does-it-work",children:[],level:2},{value:"Tutorial",id:"tutorial",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],c={toc:u};function d(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pos-tagger"},"POS tagger"),(0,o.kt)("h2",{id:"video"},"Video"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/Vmwbwvu4wEo"},(0,o.kt)("img",{alt:"POS Video",src:n(5004).Z}))),(0,o.kt)("h2",{id:"whats-a-pos-tagger-"},"What\u2019s a pos-tagger ?"),(0,o.kt)("p",null,'The part-of-speech (pos) tag or "tagging\u201d dependent on parts of speech is a labelling process that ',(0,o.kt)("strong",{parentName:"p"},"assigns all the words of a text to the correct grammatical elements.")," It\u2019s a morpho-syntactic labelling process at the word level, which is part of a larger process of computational linguistics."),(0,o.kt)("h2",{id:"what-does-it-do-how-does-it-work"},"What does it do? How does it work?"),(0,o.kt)("p",null,"In Natural Language Processing (NLP), grammatical labelling or pos-tagging precisely and reliably reveals us the function of a word, ",(0,o.kt)("strong",{parentName:"p"},"thus removing a number of common ambiguities")," \u2013 in particular those that are related to context."),(0,o.kt)("p",null,"A tag must:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Recognize the grammatical parameters of the word"),(0,o.kt)("li",{parentName:"ul"},"Identify the function of the word in its context")),(0,o.kt)("h2",{id:"tutorial"},"Tutorial"),(0,o.kt)("p",null,"In order to extract the parts of speech from your document you'll need to have your document saved on your computer."),(0,o.kt)("p",null,"After you've installed the Lettria package on Python you'll need to import the library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n")),(0,o.kt)("p",null,"Next you are going to need to include your personal API key which can be found"),(0,o.kt)("p",null,"via the Lettria platform in the dashboard."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"api_key = 'your personal API key'\nnlp = lettria.NLP(api_ke\n")),(0,o.kt)("p",null,"Now you will need to open your saved document. Be sure to add the name of"),(0,o.kt)("p",null,"\u2018your file\u2019 since it may differ from the name of my example file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n')),(0,o.kt)("p",null,"Next you will need to add your document to the NLP."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"nlp.add_document(example_data)\n")),(0,o.kt)("p",null,"Then I am going to print the POS for each token in my document."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"for t in nlp.documents[0].tokens:\n    print(t.token, t.pos)\n")),(0,o.kt)("p",null,"If you want to save your results for future analysis you can add this line of code. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results(\u2018example_results')\n")),(0,o.kt)("p",null,"And a json file with your results that can be used for further analysis will be saved."),(0,o.kt)("h2",{id:"code-set"},"Code set"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import lettria\n\napi_key = \'your personal API key\'\nnlp = lettria.NLP(api_ke\n\nwith open("example.txt", "r") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\n\nfor t in nlp.documents[0].tokens:\n    print(t.token, t.pos)\n\nnlp.save_results(\u2018example_results\')\n')))}d.isMDXComponent=!0},5004:function(e,t,n){t.Z=n.p+"assets/images/POS-thumbnail-be4f67432fc5a2d5c8d116b1a9312544.png"}}]);
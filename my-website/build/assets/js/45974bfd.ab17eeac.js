"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9987],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=s(n),d=o,f=y["".concat(p,".").concat(d)]||y[d]||c[d]||l;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4720:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return y}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={sidebar_position:13},p="Filter Type",s={unversionedId:"Tutorials/Python SDK/filter-type",id:"Tutorials/Python SDK/filter-type",isDocsHomePage:!1,title:"Filter Type",description:"Video",source:"@site/docs/Tutorials/Python SDK/filter-type.md",sourceDirName:"Tutorials/Python SDK",slug:"/Tutorials/Python SDK/filter-type",permalink:"/docs/Tutorials/Python SDK/filter-type",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Filter Polarity",permalink:"/docs/Tutorials/Python SDK/filter-polarity"},next:{title:"Document Class",permalink:"/docs/Tutorials/Python SDK/document-class"}},u=[{value:"Video",id:"video",children:[],level:2},{value:"What is the filter type tool?",id:"what-is-the-filter-type-tool",children:[],level:2},{value:"Importing the library &amp; your personal API key",id:"importing-the-library--your-personal-api-key",children:[],level:2},{value:"Adding your document",id:"adding-your-document",children:[],level:2},{value:"Filtering types",id:"filtering-types",children:[],level:2},{value:"Saving your results",id:"saving-your-results",children:[],level:2},{value:"Code set",id:"code-set",children:[],level:2}],c={toc:u};function y(e){var t=e.components,i=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"filter-type"},"Filter Type"),(0,l.kt)("h2",{id:"video"},"Video"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Filter type",src:n(7014).Z})),(0,l.kt)("h2",{id:"what-is-the-filter-type-tool"},"What is the filter type tool?"),(0,l.kt)("p",null,"The filter type tool enables you to extract sentences the are assertive, command, open question or closed questions from your document. In order to filter out the type of sentences in a document you can use the filter type tool with Lettria."),(0,l.kt)("h2",{id:"importing-the-library--your-personal-api-key"},"Importing the library & your personal API key"),(0,l.kt)("p",null,"After you've installed the Lettria package on Python you'll need to import the library."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n")),(0,l.kt)("p",null,"Next you are going to need to include your personal API key which can be found via the Lettria platform in the dashboard."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"api_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n")),(0,l.kt)("h2",{id:"adding-your-document"},"Adding your document"),(0,l.kt)("p",null,"Now you will need to open your saved document. Be sure to add the name of"),(0,l.kt)("p",null,"\u2018your file\u2019 since it may differ from the name of my example file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'with open("example.txt", "r") as f:\n    example_data = f.readlines()\n')),(0,l.kt)("p",null,"Next add the document to the NLP."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"nlp.add_document(example_data)\n")),(0,l.kt)("h2",{id:"filtering-types"},"Filtering types"),(0,l.kt)("p",null,"In order to filter the sentence type from the document use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"filter_type = nlp.filter_type\nsentence_type = nlp.sentence_type\nfilter_type(['assert'])\n")),(0,l.kt)("p",null,"Returns a list of instances of sentences with the specified type."),(0,l.kt)("p",null,"You can modify the filter type by choosing between; 'assert', 'command', 'question_open', 'question_closed'."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"filter_type([\u2018question\u2019_open])\n")),(0,l.kt)("h2",{id:"saving-your-results"},"Saving your results"),(0,l.kt)("p",null,"In order to save your results you can use the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"nlp.save_results(\u2018example_results')\n")),(0,l.kt)("p",null,"And a json file with your results that can be used for further analysis will be saved."),(0,l.kt)("h2",{id:"code-set"},"Code set"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import lettria\n\napi_key = 'your personal API key'\nnlp = lettria.NLP(api_key)\n\nwith open(\"example.txt\", \"r\") as f:\n    example_data = f.readlines()\n\nnlp.add_document(example_data)\n\nfilter_type = nlp.filter_type\nsentence_type = nlp.sentence_type\nfilter_type(['assert'])\n\nfilter_type([\u2018question\u2019_open])\n\nnlp.save_results(\u2018example_results')\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://app.lettria.com/signup"},(0,l.kt)("img",{alt:"register-sticky",src:n(4209).Z}))))}y.isMDXComponent=!0},7014:function(e,t,n){t.Z=n.p+"assets/images/filter-type-CS-09d9216be17c1af56f661aa37dd92f88.png"},4209:function(e,t,n){t.Z=n.p+"assets/images/register-sticky-0bf1e35cb49b633a37ddd712c2cfde47.png"}}]);
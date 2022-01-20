"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7675],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,s(s({ref:e},d),{},{components:a})):n.createElement(k,s({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4660:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),s=["components"],i={sidebar_position:2},o="NLP Class",p={unversionedId:"python-sdk/nlp-class",id:"version-2.0/python-sdk/nlp-class",isDocsHomePage:!1,title:"NLP Class",description:"What's the NLP class?",source:"@site/versioned_docs/version-2.0/python-sdk/nlp-class.md",sourceDirName:"python-sdk",slug:"/python-sdk/nlp-class",permalink:"/documentation/docs/python-sdk/nlp-class",tags:[],version:"2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-2.0/tutorialSidebar",previous:{title:"Python SDK",permalink:"/documentation/docs/python-sdk/python-sdk"},next:{title:"TextChunk",permalink:"/documentation/docs/python-sdk/texctchunk"}},d=[{value:"What&#39;s the NLP class?",id:"whats-the-nlp-class",children:[],level:2},{value:"Attributes &amp; Properties",id:"attributes--properties",children:[],level:2},{value:"NLP methods",id:"nlp-methods",children:[{value:"Data analysis",id:"data-analysis",children:[],level:3},{value:"add_document()",id:"add_document",children:[],level:3},{value:"save_results()",id:"save_results",children:[],level:3},{value:"load_results()",id:"load_results",children:[],level:3},{value:"reset_data()",id:"reset_data",children:[],level:3},{value:"add_client()",id:"add_client",children:[],level:3}],level:2}],u={toc:d};function m(t){var e=t.components,i=(0,r.Z)(t,s);return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nlp-class"},"NLP Class"),(0,l.kt)("h2",{id:"whats-the-nlp-class"},"What's the NLP class?"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NLP")," inherits from ",(0,l.kt)("a",{parentName:"p",href:"https://www.lettria.com/documentation/docs/python-sdk/texctchunk"},"TextChunk"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NLP")," is a class designed to give access to relevant data at the different levels (document, sentence, subsentence) in an intuitive way. It allows you to perform quick data exploration, manipulation and analysis.\nIt's also used to perform requests and can save as well as load result as ",(0,l.kt)("strong",{parentName:"p"},"JSON")," objects."),(0,l.kt)("p",null,"When a response from the API is received it's stored in a hierarchy of classes:\n",(0,l.kt)("strong",{parentName:"p"},"NLP (all data) => Document => Sentence => Subsentence => Token")),(0,l.kt)("p",null,"At each level direct access it's possible to access inferior levels  i.e. nlp.sentences gives access to a list of all the Sentence in the current data, while nlp.documents","[0]",".sentences only gives the Sentence of the first Document."),(0,l.kt)("p",null,"NLP is iterable and will yield Document instances."),(0,l.kt)("h2",{id:"attributes--properties"},"Attributes & Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"documents"),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/python-sdk/document-class"},"Document")," instances"),(0,l.kt)("td",{parentName:"tr",align:null},"List of all the ",(0,l.kt)("strong",{parentName:"td"},"Document instances"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sentences"),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/python-sdk/sentence-class"},"Sentence")," instances"),(0,l.kt)("td",{parentName:"tr",align:null},"Direct access to all of the ",(0,l.kt)("strong",{parentName:"td"},"Sentences")," instances.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subsentences"),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/python-sdk/subsentence-class"},"Subsentence")," instances"),(0,l.kt)("td",{parentName:"tr",align:null},"Direct access to all of the ",(0,l.kt)("strong",{parentName:"td"},"Subsentence")," instances.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tokens"),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/python-sdk/token-class"},"Token")," instances"),(0,l.kt)("td",{parentName:"tr",align:null},"Direct access to all ",(0,l.kt)("strong",{parentName:"td"},"Tokens")," in the subsentence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"list of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of all common properties accessible at all levels (token, pos etc.)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"instance of ",(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/python-sdk/client-class"},"Client")),(0,l.kt)("td",{parentName:"tr",align:null},"Client used for performing request to Lettria's API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/python-sdk/common-properties"},"Common properties")),(0,l.kt)("td",{parentName:"tr",align:null},"depends on property"),(0,l.kt)("td",{parentName:"tr",align:null},"Properties allowing access to specific data (pos, token etc.)")))),(0,l.kt)("h2",{id:"nlp-methods"},"NLP methods"),(0,l.kt)("h3",{id:"data-analysis"},"Data analysis"),(0,l.kt)("p",null,"Below is an overview list of the methods that can be used to manage data with the API. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/python-sdk/nlp-class#add_document"},"add_document()")),(0,l.kt)("td",{parentName:"tr",align:null},"Submits document to API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/python-sdk/nlp-class#save_results"},"save_data()")),(0,l.kt)("td",{parentName:"tr",align:null},"Saves data from json file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/python-sdk/nlp-class#load_results"},"load_results()")),(0,l.kt)("td",{parentName:"tr",align:null},"Loads data from json file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/python-sdk/nlp-class#reset_data"},"reset_data()")),(0,l.kt)("td",{parentName:"tr",align:null},"Erase data and reinitialise object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/python-sdk/nlp-class#add_client"},"add_client()")),(0,l.kt)("td",{parentName:"tr",align:null},"Adds new client / api_key")))),(0,l.kt)("h3",{id:"add_document"},"add_document()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"add_document(document, skip_document = False, id=None, verbose=True)\n")),(0,l.kt)("p",null,"Performs a request to the lettria API using the API_KEY provided. Results are appended as an additional Document instance to the documents attribute."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"document"),(0,l.kt)("td",{parentName:"tr",align:null},"string or list of string"),(0,l.kt)("td",{parentName:"tr",align:null},"Data to be sent to the API"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skip_document"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to skip the document if there is a problem during processing"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Id to identify the document, by default an incrementing integer is assigned."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to print additional statements about document processing.True"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"save_results"},"save_results()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"save_results(file = '')\n")),(0,l.kt)("p",null,"Writes current results to a JSON file. If no file is specified the default path is results_X.json with X being next 'free' integer."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Path of file to write in."),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("h3",{id:"load_results"},"load_results()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"load_results(path = 'results_0', reset = False)\n")),(0,l.kt)("p",null,"Loads results from a JSON file."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Path of file to load."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reset"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to erase current data."),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("h3",{id:"reset_data"},"reset_data()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"reset_data()\n")),(0,l.kt)("p",null,"Erase all data inside NLP and reinitialise documents ids."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Path of file to load."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reset"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to erase current data."),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("h3",{id:"add_client"},"add_client()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"add_client(client = None, api_key = None)\n")),(0,l.kt)("p",null,"Replaces current client with provided one, or creates a new client using the provided api_key."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client"),(0,l.kt)("td",{parentName:"tr",align:null},"instance of Client class"),(0,l.kt)("td",{parentName:"tr",align:null},"Client instance to replace the current one."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Key to use for the new client."),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://app.lettria.com/signup"},(0,l.kt)("img",{alt:"register-sticky",src:a(4209).Z}))))}m.isMDXComponent=!0},4209:function(t,e,a){e.Z=a.p+"assets/images/register-sticky-0bf1e35cb49b633a37ddd712c2cfde47.png"}}]);
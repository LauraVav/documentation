"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8857],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(u,".").concat(c)]||d[c]||p[c]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),l=n(2389),o=n(9443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(9521),s=n(6010),m="tabItem_1uMI";function p(e){var t,n,a,l=e.lazy,o=e.block,p=e.defaultValue,d=e.values,c=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),N=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==f&&!b.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=i(),v=h.tabGroupChoices,y=h.setTabGroupChoices,j=(0,r.useState)(f),w=j[0],E=j[1],O=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var T=v[c];null!=T&&T!==w&&b.some((function(e){return e.value===T}))&&E(T)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==w&&(I(t),E(a),null!=c&&y(c,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},k)},b.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,s.Z)("tabs__item",m,{"tabs__item--active":w===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:x,onClick:x},null!=n?n:t)}))),l?(0,r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},6263:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(6396),i=n(8215),u=["components"],s={sidebar_position:13},m="Emotions",p={unversionedId:"API/emotions",id:"API/emotions",isDocsHomePage:!1,title:"Emotions",description:"Go back to the Sentence Object.",source:"@site/docs/API/emotions.md",sourceDirName:"API",slug:"/API/emotions",permalink:"/docs/API/emotions",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Sentence Type",permalink:"/docs/API/sentence-type"},next:{title:"Sentiment",permalink:"/docs/API/sentiment"}},d=[{value:"Emotions Object",id:"emotions-object",children:[],level:2},{value:"Emotions Subsentences Object",id:"emotions-subsentences-object",children:[],level:2},{value:"Emotions Element Object",id:"emotions-element-object",children:[],level:2},{value:"Emotions Values Object",id:"emotions-values-object",children:[],level:2}],c={toc:d};function k(e){var t=e.components,s=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"emotions"},"Emotions"),(0,l.kt)("p",null,"Go back to the ",(0,l.kt)("a",{parentName:"p",href:"https://www.lettria.com/documentation/docs/API/lettria-sentence-object"},"Sentence Object"),"."),(0,l.kt)("h2",{id:"emotions-object"},"Emotions Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subsentences"),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/emotions#emotions-subsentences-object"},"Subsentences Emotions Element Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Source of all emotions elements divided by subsentences")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elements"),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/emotions#emotions-element-object"},"Emotions Element Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Specific source for all emotion elements in the sentence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/emotions#emotions-values-object"},"Emotions Values Object")),(0,l.kt)("td",{parentName:"tr",align:null},"normalized total values for emotion")))),(0,l.kt)("p",null,"Emotions values are available at the following levels of granularity: sentence, subsentence and element."),(0,l.kt)("h2",{id:"emotions-subsentences-object"},"Emotions Subsentences Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sentence"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Source of all emotions elements divided by subsentences")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_id"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the first token of the subsentence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end_id"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the last token of the subsentence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elements"),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/emotions#emotions-element-object"},"Emotions Element Objets")),(0,l.kt)("td",{parentName:"tr",align:null},"Specific source for all emotion elements in the subsentence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/emotions#emotions-values-object"},"Emotions Values Object")),(0,l.kt)("td",{parentName:"tr",align:null},"normalized values for emotion of subsentence")))),(0,l.kt)("h2",{id:"emotions-element-object"},"Emotions Element Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"CONSTRAINTS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Index of the source word for this element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"lemma"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"source's lemma")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"lemma"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"source's source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subject"),(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Index of the subject for this element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"lemma"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"subject's lemma")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"subject's source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target"),(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Index of the target for this element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"lemma"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"target's lemma")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"target's source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of emotion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Indice of the emotion")))),(0,l.kt)("p",null,"Subject is the word which represents the subject of the action"),(0,l.kt)("p",null,"Source is the word which conveys the emotion"),(0,l.kt)("p",null,"Target is the word which represents the target of the emotion"),(0,l.kt)("h2",{id:"emotions-values-object"},"Emotions Values Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"CONSTRAINTS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"happiness"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"normalized total"),(0,l.kt)("td",{parentName:"tr",align:null},"0 <= happiness < 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sadness"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"normalized total"),(0,l.kt)("td",{parentName:"tr",align:null},"0 <= sadness < 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"anger"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"normalized total"),(0,l.kt)("td",{parentName:"tr",align:null},"-1 < anger < 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"surprise"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"normalized total"),(0,l.kt)("td",{parentName:"tr",align:null},"-1 < surprise < 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disgust"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"normalized total"),(0,l.kt)("td",{parentName:"tr",align:null},"-1 < disgust < 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fear"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"normalized total"),(0,l.kt)("td",{parentName:"tr",align:null},"-1 < fear < 1")))),(0,l.kt)("p",null,"Values are calculated by using emotion elements objects. Values are normalized to stay in the the ","[-1 : 1]"," interval between element, subsentence and sentence level therefore comparisons should be made made with elements of the same depth."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'{\n    "elements": [\n        {\n            "source": {\n                "index": 1,\n                "lemma": "aimer",\n                "source": "aime"\n            },\n            "subject": {\n                "index": 0,\n                "lemma": "il",\n                "source": "elle"\n            },\n            "target": {\n                "index": 3,\n                "lemma": "chien",\n                "source": "chiens"\n            },\n            "type": "happiness",\n            "value": 0.46\n        }\n    ],\n    "values": {\n        "anger": 0,\n        "disgust": 0,\n        "fear": 0,\n        "happiness": 0.17,\n        "sadness": 0,\n        "surprise": 0\n    },\n    "subsentences": {\n        "sentence": "elle aime les chiens",\n        "start_id": 0,\n        "end_id": 3,\n        "elements": [\n            {\n                "source": {\n                    "index": 1,\n                    "lemma": "aimer",\n                    "source": "aime"\n                },\n                "subject": {\n                    "index": 0,\n                    "lemma": "il",\n                    "source": "elle"\n                },\n                "target": {\n                    "index": 3,\n                    "lemma": "chien",\n                    "source": "chiens"\n                },\n                "type": "happiness",\n                "value": 0.46\n            }\n        ],\n        "values": {\n                "negative": 0,\n                "positive": 0.27,\n                "total": 0.27\n        }\n    }\n}\n'))),(0,l.kt)(i.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "elements": [\n        {\n            "source": {\n                "index": 1,\n                "lemma": "aimer",\n                "source": "aime"\n            },\n            "subject": {\n                "index": 0,\n                "lemma": "il",\n                "source": "elle"\n            },\n            "target": {\n                "index": 3,\n                "lemma": "chien",\n                "source": "chiens"\n            },\n            "type": "happiness",\n            "value": 0.46\n        }\n    ],\n    "values": {\n        "anger": 0,\n        "disgust": 0,\n        "fear": 0,\n        "happiness": 0.17,\n        "sadness": 0,\n        "surprise": 0\n    },\n    "subsentences": {\n        "sentence": "elle aime les chiens",\n        "start_id": 0,\n        "end_id": 3,\n        "elements": [\n            {\n                "source": {\n                    "index": 1,\n                    "lemma": "aimer",\n                    "source": "aime"\n                },\n                "subject": {\n                    "index": 0,\n                    "lemma": "il",\n                    "source": "elle"\n                },\n                "target": {\n                    "index": 3,\n                    "lemma": "chien",\n                    "source": "chiens"\n                },\n                "type": "happiness",\n                "value": 0.46\n            }\n        ],\n        "values": {\n                "negative": 0,\n                "positive": 0.27,\n                "total": 0.27\n        }\n    }\n}\n')))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://app.lettria.com/signup"},(0,l.kt)("img",{alt:"register-sticky",src:n(4209).Z}))))}k.isMDXComponent=!0},4209:function(e,t,n){t.Z=n.p+"assets/images/register-sticky-0bf1e35cb49b633a37ddd712c2cfde47.png"}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7281],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),l=t(2389),o=t(9443);var u=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(9521),c=t(6010),p="tabItem_1uMI";function s(e){var n,t,r,l=e.lazy,o=e.block,s=e.defaultValue,d=e.values,m=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:g.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),v=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===s?s:null!=(n=null!=s?s:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=g[0])?void 0:r.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=u(),N=y.tabGroupChoices,h=y.setTabGroupChoices,w=(0,a.useState)(k),O=w[0],j=w[1],P=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=N[m];null!=x&&x!==O&&b.some((function(e){return e.value===x}))&&j(x)}var I=function(e){var n=e.currentTarget,t=P.indexOf(n),r=b[t].value;r!==O&&(T(n),j(r),null!=m&&h(m,r))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;t=P[r]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;t=P[a]||P[P.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},f)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":O===n}),key:n,ref:function(e){return P.push(e)},onKeyDown:E,onFocus:I,onClick:I},null!=t?t:n)}))),l?(0,a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},7764:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=t(6396),u=t(8215),i=["components"],c={sidebar_position:9},p="Parser Dependency",s={unversionedId:"API/parser-dependency",id:"API/parser-dependency",isDocsHomePage:!1,title:"Parser Dependency",description:"Dependency Object",source:"@site/docs/API/parser-dependency.md",sourceDirName:"API",slug:"/API/parser-dependency",permalink:"/docs/API/parser-dependency",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Entities Numeral",permalink:"/docs/API/entities-numeral"},next:{title:"Coreference",permalink:"/docs/API/coreference"}},d=[{value:"Dependency Object",id:"dependency-object",children:[],level:2}],m={toc:d};function f(e){var n=e.components,c=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,c,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"parser-dependency"},"Parser Dependency"),(0,l.kt)("h2",{id:"dependency-object"},"Dependency Object"),(0,l.kt)("p",null,"Dependence objects combine the results from the dependency parser with the understanding from the NLU api."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"CONSTRAINTS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dep"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"see list of ",(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/Glossary/dependency-tags"},"dependency tags")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"base index of the token, links the APIs together"),(0,l.kt)("td",{parentName:"tr",align:null},"index >= 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lemma"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meaning"),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/Glossary/categories"},"Category Objects")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"index of the parent dependence"),(0,l.kt)("td",{parentName:"tr",align:null},"-1 for root, else >= 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tag"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"see Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/ner#value-object"},"Value Object")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'[\n  {\n    "dep": "nsubj",\n    "index": 0,\n    "lemma": "je",\n    "len": 1,\n    "meaning": [\n      {\n        "sub": "Pronom",\n        "super": null\n      }\n    ],\n    "ref": 1,\n    "source": "je",\n    "tag": "CLS",\n    "value": "S-1"\n  },\n  {\n    "dep": "root",\n    "index": 1,\n    "lemma": "promener",\n    "len": 1,\n    "meaning": [\n      {\n        "sub": "action_walk",\n        "super": "ACTION"\n      },\n      {\n        "sub": "action_move",\n        "super": "ACTION"\n      }\n    ],\n    "ref": -1,\n    "source": "promene",\n    "tag": "V",\n    "value": null\n  },\n  {\n    "dep": "det",\n    "index": 2,\n    "lemma": "mon",\n    "len": 1,\n    "meaning": [],\n    "ref": 3,\n    "source": "mon",\n    "tag": "D",\n    "value": null\n  },\n  {\n    "dep": "obj",\n    "index": 3,\n    "lemma": "chien",\n    "len": 1,\n    "meaning": [\n      {\n        "sub": "dog",\n        "super": "ANIMAL"\n      }\n    ],\n    "ref": 1,\n    "source": "chien",\n    "tag": "N",\n    "value": null\n  }\n]\n'))),(0,l.kt)(u.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "dep": "nsubj",\n    "index": 0,\n    "lemma": "je",\n    "len": 1,\n    "meaning": [\n      {\n        "sub": "Pronom",\n        "super": null\n      }\n    ],\n    "ref": 1,\n    "source": "je",\n    "tag": "CLS",\n    "value": "S-1"\n  },\n  {\n    "dep": "root",\n    "index": 1,\n    "lemma": "promener",\n    "len": 1,\n    "meaning": [\n      {\n        "sub": "action_walk",\n        "super": "ACTION"\n      },\n      {\n        "sub": "action_move",\n        "super": "ACTION"\n      }\n    ],\n    "ref": -1,\n    "source": "promene",\n    "tag": "V",\n    "value": null\n  },\n  {\n    "dep": "det",\n    "index": 2,\n    "lemma": "mon",\n    "len": 1,\n    "meaning": [],\n    "ref": 3,\n    "source": "mon",\n    "tag": "D",\n    "value": null\n  },\n  {\n    "dep": "obj",\n    "index": 3,\n    "lemma": "chien",\n    "len": 1,\n    "meaning": [\n      {\n        "sub": "dog",\n        "super": "ANIMAL"\n      }\n    ],\n    "ref": 1,\n    "source": "chien",\n    "tag": "N",\n    "value": null\n  }\n]\n')))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://app.lettria.com/signup"},(0,l.kt)("img",{alt:"register-sticky",src:t(4209).Z}))))}f.isMDXComponent=!0},4209:function(e,n,t){n.Z=t.p+"assets/images/register-sticky-0bf1e35cb49b633a37ddd712c2cfde47.png"}}]);
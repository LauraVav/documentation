"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9243],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(b,l(l({ref:n},s),{},{components:t})):r.createElement(b,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),i=t(2389),l=t(9443);var o=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(9521),c=t(6010),s="tabItem_1uMI";function p(e){var n,t,r,i=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,b=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,u.lx)(v,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=o(),y=h.tabGroupChoices,N=h.setTabGroupChoices,w=(0,a.useState)(k),O=w[0],E=w[1],T=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=y[m];null!=j&&j!==O&&v.some((function(e){return e.value===j}))&&E(j)}var x=function(e){var n=e.currentTarget,t=T.indexOf(n),r=v[t].value;r!==O&&(P(n),E(r),null!=m&&N(m,r))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},b)},v.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":O===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:x,onClick:x},null!=t?t:n)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},1450:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return b}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=t(6396),o=t(8215),u=["components"],c={sidebar_position:10},s="Disturbance",p={unversionedId:"API/disturbance",id:"version-1.0/API/disturbance",isDocsHomePage:!1,title:"Disturbance",description:"Disturbance Object",source:"@site/versioned_docs/version-1.0/API/disturbance.md",sourceDirName:"API",slug:"/API/disturbance",permalink:"/documentation/docs/1.0/API/disturbance",tags:[],version:"1.0",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"version-1.0/tutorialSidebar",previous:{title:"Entities Numeral",permalink:"/documentation/docs/1.0/API/entities-numeral"},next:{title:"Coreference",permalink:"/documentation/docs/1.0/API/coreference"}},d=[{value:"Disturbance Object",id:"disturbance-object",children:[],level:2}],m={toc:d};function b(e){var n=e.components,c=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"disturbance"},"Disturbance"),(0,i.kt)("h2",{id:"disturbance-object"},"Disturbance Object"),(0,i.kt)("p",null,"Spell-checking object. Each token is associated with an object and is checked against our dictionary. If the token does not exist, a list of candidates will be suggested along with the most likely replacement. Gender and plural are not taken into account as the lemma will be the same regardless."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"KEY"),(0,i.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,i.kt)("th",{parentName:"tr",align:null},"CONSTRAINTS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"original"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"token as found in the sentence"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"predict"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"predicted token after spell-checking, same as original for valid words"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"probabilities"),(0,i.kt)("td",{parentName:"tr",align:null},"dictionary"),(0,i.kt)("td",{parentName:"tr",align:null},"candidates for correction with correspond rank (0 being the most likely candidate)"),(0,i.kt)("td",{parentName:"tr",align:null},"Key only exists if word should be corrected")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"to_correct"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"1 if token should be corrected but no replacement has been found"),(0,i.kt)("td",{parentName:"tr",align:null},"0 or 1")))),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'[\n  {\n  "original":"pierre",\n  "predict":"pierre",\n  "to_correct":0\n  },\n  {\n  "original":"aime",\n  "predict":"aime",\n  "to_correct":0\n  },\n  {\n  "original":"les",\n  "predict":"les",\n  "to_correct":0\n  },\n  {\n  "original":"banans",\n  "predict":"banane",\n  "probabilities":{\n      "banals":2,\n      "banane":0,\n      "bananes":1,\n      "banats":3,\n      "banians":3,\n      "bannans":3,\n      "bannas":3,\n      "bavans":3,\n      "nanans":3\n    },\n  "to_correct":0\n  }\n]\n'))),(0,i.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n  "original":"pierre",\n  "predict":"pierre",\n  "to_correct":0\n  },\n  {\n  "original":"aime",\n  "predict":"aime",\n  "to_correct":0\n  },\n  {\n  "original":"les",\n  "predict":"les",\n  "to_correct":0\n  },\n  {\n  "original":"banans",\n  "predict":"banane",\n  "probabilities":{\n      "banals":2,\n      "banane":0,\n      "bananes":1,\n      "banats":3,\n      "banians":3,\n      "bannans":3,\n      "bannas":3,\n      "bavans":3,\n      "nanans":3\n    },\n  "to_correct":0\n  }\n]\n')))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://app.lettria.com/signup"},(0,i.kt)("img",{alt:"register-sticky",src:t(4209).Z}))))}b.isMDXComponent=!0},4209:function(e,n,t){n.Z=t.p+"assets/images/register-sticky-0bf1e35cb49b633a37ddd712c2cfde47.png"}}]);
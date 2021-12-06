"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4753],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),o=t(2389),l=t(9443);var u=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(9521),c=t(6010),s="tabItem_1uMI";function p(e){var n,t,r,o=e.lazy,l=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:g.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),v=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=g[0])?void 0:r.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=u(),k=h.tabGroupChoices,O=h.setTabGroupChoices,N=(0,a.useState)(y),P=N[0],T=N[1],w=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=k[f];null!=j&&j!==P&&b.some((function(e){return e.value===j}))&&T(j)}var x=function(e){var n=e.currentTarget,t=w.indexOf(n),r=b[t].value;r!==P&&(E(n),T(r),null!=f&&O(f,r))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.currentTarget)+1;t=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.currentTarget)-1;t=w[a]||w[w.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},m)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":P===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:I,onFocus:x,onClick:x},null!=t?t:n)}))),o?(0,a.cloneElement)(g.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function d(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},8594:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(6396),u=t(8215),i=["components"],c={sidebar_position:5},s="POS Tagger",p={unversionedId:"API/pos-tagger",id:"API/pos-tagger",isDocsHomePage:!1,title:"POS Tagger",description:"POS Tagger Object",source:"@site/docs/API/pos-tagger.md",sourceDirName:"API",slug:"/API/pos-tagger",permalink:"/docs/API/pos-tagger",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Language Used",permalink:"/docs/API/language-used"},next:{title:"Disturbance",permalink:"/docs/API/disturbance"}},d=[{value:"POS Tagger Object",id:"pos-tagger-object",children:[],level:2}],f={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pos-tagger"},"POS Tagger"),(0,o.kt)("h2",{id:"pos-tagger-object"},"POS Tagger Object"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"INDEX"),(0,o.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,o.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Word token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"See list of possible tags")))),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'[\n    [\n        "you",\n        "CLS"\n    ],\n    [\n        "have",\n        "V"\n    ],\n    [\n        "access",\n        "N"\n    ],\n    [\n        "to",\n        "P"\n    ],\n    [\n        "the",\n        "D"\n    ],\n    [\n        "best",\n        "JJ"\n    ],\n    [\n        "comprehension",\n        "N"\n    ],\n    [\n        "of",\n        "P"\n    ],\n    [\n        "language",\n        "N"\n    ]\n]\n'))),(0,o.kt)(u.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    [\n        "you",\n        "CLS"\n    ],\n    [\n        "have",\n        "V"\n    ],\n    [\n        "access",\n        "N"\n    ],\n    [\n        "to",\n        "P"\n    ],\n    [\n        "the",\n        "D"\n    ],\n    [\n        "best",\n        "JJ"\n    ],\n    [\n        "comprehension",\n        "N"\n    ],\n    [\n        "of",\n        "P"\n    ],\n    [\n        "language",\n        "N"\n    ]\n]\n')))))}m.isMDXComponent=!0}}]);
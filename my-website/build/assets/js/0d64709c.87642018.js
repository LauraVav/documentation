"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3093],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=p(n),s=a,k=c["".concat(u,".").concat(s)]||c[s]||d[s]||l;return n?r.createElement(k,o(o({ref:e},m),{},{components:n})):r.createElement(k,o({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(t,e,n){var r=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},6396:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(7462),a=n(7294),l=n(2389),o=n(9443);var i=function(){var t=(0,a.useContext)(o.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},u=n(9521),p=n(6010),m="tabItem_1uMI";function d(t){var e,n,r,l=t.lazy,o=t.block,d=t.defaultValue,c=t.values,s=t.groupId,k=t.className,g=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=c?c:g.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),f=(0,u.lx)(N,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(e=null!=d?d:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(r=g[0])?void 0:r.props.value;if(null!==b&&!N.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),v=y.tabGroupChoices,h=y.setTabGroupChoices,w=(0,a.useState)(b),O=w[0],E=w[1],T=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var j=v[s];null!=j&&j!==O&&N.some((function(t){return t.value===j}))&&E(j)}var I=function(t){var e=t.currentTarget,n=T.indexOf(e),r=N[n].value;r!==O&&(P(e),E(r),null!=s&&h(s,r))},x=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=T.indexOf(t.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(t.currentTarget)-1;n=T[a]||T[T.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},k)},N.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:(0,p.Z)("tabs__item",m,{"tabs__item--active":O===e}),key:e,ref:function(t){return T.push(t)},onKeyDown:x,onFocus:I,onClick:I},null!=n?n:e)}))),l?(0,a.cloneElement)(g.filter((function(t){return t.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==O})}))))}function c(t){var e=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(e)},t))}},9443:function(t,e,n){var r=(0,n(7294).createContext)(void 0);e.Z=r},9509:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(6396),i=n(8215),u=["components"],p={sidebar_position:6},m="Emoticons",d={unversionedId:"API/emoticons",id:"API/emoticons",isDocsHomePage:!1,title:"Emoticons",description:"List all emoticons found.",source:"@site/docs/API/emoticons.md",sourceDirName:"API",slug:"/API/emoticons",permalink:"/docs/API/emoticons",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"POS Tagger",permalink:"/docs/API/pos-tagger"},next:{title:"Parser Dependency",permalink:"/docs/API/parser-dependency"}},c=[{value:"EmoticonObject",id:"emoticonobject",children:[],level:2}],s={toc:c};function k(t){var e=t.components,p=(0,a.Z)(t,u);return(0,l.kt)("wrapper",(0,r.Z)({},s,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"emoticons"},"Emoticons"),(0,l.kt)("p",null,"List all emoticons found."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confidence"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Confidence in value matching")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"emoticon"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/emoticons#emoticonobject"},"EmoticonObject")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean values for matched emoticons")))),(0,l.kt)("h2",{id:"emoticonobject"},"EmoticonObject"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"CONSTRAINTS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thappy"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"angel"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cry"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"devil"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"embarrassed"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"happy"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hesitant"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"horror"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"indecision"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kiss"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lol"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"love"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"muted"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notlove"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"playful"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sad"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"surprise"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"very_happy"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"very_sad"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wink"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1")))),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'{\n    "confidence": "0.89",\n    "emoticon": {\n        "Thappy": 0,\n        "angel": 0,\n        "cry": 0,\n        "devil": 0,\n        "embarrassed": 0,\n        "happy": 0,\n        "hesitant": 0,\n        "horror": 0,\n        "indecision": 0,\n        "kiss": 0,\n        "lol": 0,\n        "love": 0,\n        "muted": 0,\n        "notlove": 0,\n        "playful": 0,\n        "sad": 0,\n        "surprise": 0,\n        "very_happy": 0,\n        "very_sad": 0,\n        "wink": 0\n    }\n}\n'))),(0,l.kt)(i.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "confidence": "0.89",\n    "emoticon": {\n        "Thappy": 0,\n        "angel": 0,\n        "cry": 0,\n        "devil": 0,\n        "embarrassed": 0,\n        "happy": 0,\n        "hesitant": 0,\n        "horror": 0,\n        "indecision": 0,\n        "kiss": 0,\n        "lol": 0,\n        "love": 0,\n        "muted": 0,\n        "notlove": 0,\n        "playful": 0,\n        "sad": 0,\n        "surprise": 0,\n        "very_happy": 0,\n        "very_sad": 0,\n        "wink": 0\n    }\n}\n')))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://app.lettria.com/signup"},(0,l.kt)("img",{alt:"register-sticky",src:n(4209).Z}))))}k.isMDXComponent=!0},4209:function(t,e,n){e.Z=n.p+"assets/images/register-sticky-0bf1e35cb49b633a37ddd712c2cfde47.png"}}]);
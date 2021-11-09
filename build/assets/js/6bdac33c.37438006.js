"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8231],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),m=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=m(n),g=r,c=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(c,i(i({ref:e},p),{},{components:n})):a.createElement(c,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3599:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:16},s="ML emotion",m={unversionedId:"API/ml-emotion",id:"API/ml-emotion",isDocsHomePage:!1,title:"ML emotion",description:"ML emotion is a multilabel model that returns the emotions expressed in a sentence or subsentence.",source:"@site/docs/API/ml-emotion.md",sourceDirName:"API",slug:"/API/ml-emotion",permalink:"/docs/API/ml-emotion",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Sentiment",permalink:"/docs/API/sentiment"},next:{title:"ML sentiment",permalink:"/docs/API/ml-sentiment"}},p=[],d={toc:p};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ml-emotion"},"ML emotion"),(0,o.kt)("p",null,"ML emotion is a multilabel model that returns the emotions expressed in a sentence or subsentence.\nThe model is composed by multiple adapters trained on diverses datasets, then fine-tuned on original goemotion dataset and its french translation.\n\"value\"'s value is always 1, since it's float value is not relevant on this task."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Emotion"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"neutral"),(0,o.kt)("td",{parentName:"tr",align:null},"No particular emotion in this sentence.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"admiration"),(0,o.kt)("td",{parentName:"tr",align:null},"Finding something impressive or worthy of respect.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amusement"),(0,o.kt)("td",{parentName:"tr",align:null},"Finding something funny or being entertained.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"anger"),(0,o.kt)("td",{parentName:"tr",align:null},"A strong feeling of displeasure or antagonism.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"annoyance"),(0,o.kt)("td",{parentName:"tr",align:null},"Mild anger irritation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"approval"),(0,o.kt)("td",{parentName:"tr",align:null},"Having or expressing a favorable opinion.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"caring"),(0,o.kt)("td",{parentName:"tr",align:null},"Displaying kindness and concern for others.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"confusion"),(0,o.kt)("td",{parentName:"tr",align:null},"Lack of understanding uncertainty.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"curiosity"),(0,o.kt)("td",{parentName:"tr",align:null},"A strong desire to know or learn something.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"desire"),(0,o.kt)("td",{parentName:"tr",align:null},"A strong feeling of wanting something or wishing for something to happen.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"disappointment"),(0,o.kt)("td",{parentName:"tr",align:null},"Sadness or displeasure caused by the nonfulfillment of one\u2019s hopes or expectations.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"disapproval"),(0,o.kt)("td",{parentName:"tr",align:null},"Having or expressing an unfavorable opinion.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"disgust"),(0,o.kt)("td",{parentName:"tr",align:null},"Revulsion or strong disapproval aroused by something unpleasant or offensive.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"embarrassment"),(0,o.kt)("td",{parentName:"tr",align:null},"Self-consciousness shame or awkwardness.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"excitement"),(0,o.kt)("td",{parentName:"tr",align:null},"Feeling of great enthusiasm and eagerness.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fear"),(0,o.kt)("td",{parentName:"tr",align:null},"Being afraid or worried.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"gratitude"),(0,o.kt)("td",{parentName:"tr",align:null},"A feeling of thankfulness and appreciation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"grief"),(0,o.kt)("td",{parentName:"tr",align:null},"Intense sorrow especially caused by someone\u2019s death.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"joy"),(0,o.kt)("td",{parentName:"tr",align:null},"A feeling of pleasure and happiness.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"love"),(0,o.kt)("td",{parentName:"tr",align:null},"A strong positive emotion of regard and affection.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nervousness"),(0,o.kt)("td",{parentName:"tr",align:null},"Apprehension worry anxiety.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"optimism"),(0,o.kt)("td",{parentName:"tr",align:null},"Hopefulness and confidence about the future or the success of something.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pride"),(0,o.kt)("td",{parentName:"tr",align:null},"Pleasure or satisfaction due to ones own achievements or the achievements of those with whom one is closely associated.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"realization"),(0,o.kt)("td",{parentName:"tr",align:null},"Becoming aware of something.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"relief"),(0,o.kt)("td",{parentName:"tr",align:null},"Reassurance and relaxation following release from anxiety or distress.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"remorse"),(0,o.kt)("td",{parentName:"tr",align:null},"Regret or guilty feeling.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sadness"),(0,o.kt)("td",{parentName:"tr",align:null},"Emotional pain sorrow.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"surprise"),(0,o.kt)("td",{parentName:"tr",align:null},"Feeling astonished startled by something unexpected.")))),(0,o.kt)("p",null,"Main data source : ",(0,o.kt)("inlineCode",{parentName:"p"},'\n@misc{demszky2020goemotions, title={GoEmotions: A Dataset of Fine-Grained Emotions}, author={Dorottya Demszky and Dana Movshovitz-Attias and Jeongwoo Ko and Alan Cowen and Gaurav Nemade and Sujith Ravi}, year={2020}, eprint={2005.00547}, archivePrefix={arXiv}, primaryClass={cs.CL} } Adapters models: @inproceedings{pfeiffer2020AdapterHub, title={AdapterHub: A Framework for Adapting Transformers}, author={Jonas Pfeiffer and Andreas R\\"uckl\\\'{e} and Clifton Poth and Aishwarya Kamath and Ivan Vuli\\\'{c} and Sebastian Ruder and Kyunghyun Cho and Iryna Gurevych}, booktitle={Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP 2020): Systems Demonstrations}, year={2020}, address = "Online", publisher = "Association for Computational Linguistics", url = "https://www.aclweb.org/anthology/2020.emnlp-demos.7", pages = "46--54", }')))}u.isMDXComponent=!0}}]);
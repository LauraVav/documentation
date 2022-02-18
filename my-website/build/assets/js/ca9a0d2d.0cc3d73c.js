"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1248],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(d,".").concat(u)]||c[u]||p[u]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:3},d="Sentence",s={unversionedId:"API/sentence",id:"version-2.0/API/sentence",isDocsHomePage:!1,title:"Sentence",description:"The API output is divided into three levels. The second level of return is the Sentence level. Within the Sentence Object you will find the following return below.",source:"@site/versioned_docs/version-2.0/API/sentence.md",sourceDirName:"API",slug:"/API/sentence",permalink:"/documentation/docs/API/sentence",tags:[],version:"2.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-2.0/tutorialSidebar",previous:{title:"Document",permalink:"/documentation/docs/API/document"},next:{title:"Detail",permalink:"/documentation/docs/API/detail"}},m=[{value:"Sentence Object",id:"sentence-object",children:[],level:2},{value:"Sentence Format",id:"sentence-format",children:[],level:2},{value:"source_pure",id:"source_pure",children:[],level:2},{value:"source",id:"source",children:[],level:2},{value:"Sentence indexes",id:"sentence-indexes",children:[],level:2},{value:"Emotion",id:"emotion",children:[{value:"Emotion Value Object",id:"emotion-value-object",children:[],level:3}],level:2},{value:"Sentiment",id:"sentiment",children:[{value:"Sentiment Value Object",id:"sentiment-value-object",children:[],level:3}],level:2},{value:"Ml_sentiment",id:"ml_sentiment",children:[{value:"ML Sentiment Object",id:"ml-sentiment-object",children:[],level:3}],level:2},{value:"ML_emotion",id:"ml_emotion",children:[],level:2},{value:"NER",id:"ner",children:[],level:2},{value:"Sentence Type",id:"sentence-type",children:[{value:"Sentence Acts Object",id:"sentence-acts-object",children:[],level:3},{value:"Sentence Acts Details Object",id:"sentence-acts-details-object",children:[],level:3}],level:2},{value:"Subsentences",id:"subsentences",children:[],level:2}],p={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sentence"},"Sentence"),(0,l.kt)("p",null,"The API output is divided into three levels. The second level of return is the Sentence level. Within the Sentence Object you will find the following return below. "),(0,l.kt)("p",null,"Check out the Document and Details level to see the full list of objects. "),(0,l.kt)("h2",{id:"sentence-object"},"Sentence Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Key"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/sentence#source_pure"},"source_pure")),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"the TRUE source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/sentence#source"},"source")),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"source of raw input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/sentence#sentence_indexes"},"sentence_indexes")),(0,l.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"center"},"index start and end of the first and last character of the sentence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/sentence#emotion"},"emotion")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Emotions Object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"actual")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/sentence#sentiment"},"sentiment")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Sentiment Object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"actual")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/sentence#ml_sentiment"},"ML sentiment")),(0,l.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"center"},"actual")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/sentence#ml_emotion"},"ML emotion")),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"actual")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/sentence#ner"},"ner")),(0,l.kt)("td",{parentName:"tr",align:"center"},"NER Object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"actual (combines NER & ML_NER)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/sentence#sentence_type"},"sentence_type")),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"sentence type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://www.lettria.com/documentation/docs/API/sentence#subsentences"},"subsentences")),(0,l.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"center"},"index relative to the current sentence")))),(0,l.kt)("h2",{id:"sentence-format"},"Sentence Format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"input: 'The package was delivered on Tuesday.'\n\noutput :\n\n'sentences'\xa0: {\n\n    \u2018source_pure\u2019\xa0: \u2018The package was delivered on Tuesday.\u2019 \n    'source': \u2018The package was delivered on Tuesday.\u2019 \n    \u2018sentence_indexes\u2019\xa0: [0, 3] \n    \u2018emotion\u2019\xa0:  []\n    \u2018sentiment\u2019 : [{'positive': 0, 'negative': 0, 'total': 0}]\n    'ML_sentiment et ML_emotion': [0], [[('remorse', 1)]]\n    \u2018ner\u2019\xa0: [{}, {}, {}, {}, {'type': ['date'], 'value': {'ISO': '2022-01-18', 'formatted': 'Tuesday 18 January 2022 00:00:00', 'timestamp': 1642464000, 'chronology': 'future', 'chronology_day': 1, 'confidence': 0.99}}, {}]\n    \u2018sentence_type\u2019\xa0: \"assert\"\n    \u2018subsentences\u2019\xa0: [{\"start_id\": 0, \"end_id\": 5}]\n")),(0,l.kt)("h2",{id:"source_pure"},"source_pure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source_pure"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the TRUE source")))),(0,l.kt)("h2",{id:"source"},"source"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"source of raw input")))),(0,l.kt)("h2",{id:"sentence-indexes"},"Sentence indexes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sentence_indexes"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"index start and end of the first and last character of the sentence")))),(0,l.kt)("h2",{id:"emotion"},"Emotion"),(0,l.kt)("h3",{id:"emotion-value-object"},"Emotion Value Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"KEY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:"center"},"CONSTRAINTS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"happiness"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"center"},"normalized total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0 <= happiness < 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"sadness"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"center"},"normalized total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0 <= sadness < 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"anger"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"center"},"normalized total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-1 < anger < 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"surprise"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"center"},"normalized total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-1 < surprise < 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"disgust"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"center"},"normalized total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-1 < disgust < 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"fear"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"center"},"normalized total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-1 < fear < 1")))),(0,l.kt)("p",null,"Values are calculated by using emotion elements objects. Values are normalized to stay in the the ","[-1 : 1]"," interval between element, subsentence and sentence level therefore comparisons should be made made with elements of the same depth."),(0,l.kt)("h2",{id:"sentiment"},"Sentiment"),(0,l.kt)("h3",{id:"sentiment-value-object"},"Sentiment Value Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"CONSTRAINTS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"positive"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"normalized addition of all positive sentiment values in the sentence"),(0,l.kt)("td",{parentName:"tr",align:null},"0 <= positive < 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"negative"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"normalized addition of all negative sentiment values in the sentence"),(0,l.kt)("td",{parentName:"tr",align:null},"-1 < negative <= 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"total"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"positive + negative"),(0,l.kt)("td",{parentName:"tr",align:null},"-1 < total < 1")))),(0,l.kt)("p",null,"Values are calculated either by using sentiment elements objects if available, or by a prediction model at the subsentence level. Values are normalized to stay in the the ","[-1 : 1]"," interval between element, subsentence and sentence level therefore comparisons should be made made with elements of the same depth."),(0,l.kt)("h2",{id:"ml_sentiment"},"Ml_sentiment"),(0,l.kt)("h3",{id:"ml-sentiment-object"},"ML Sentiment Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sentence"),(0,l.kt)("td",{parentName:"tr",align:null},"list of Sentences ML Sentiment Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Source of all sentiments elements divided by subsentences")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subsentence"),(0,l.kt)("td",{parentName:"tr",align:null},"list of Subsentences ML Sentiment Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Source of all sentiments elements divided by subsentences")))),(0,l.kt)("p",null,"ml_sentiment values are available at the following levels of granularity: sentence and subsentence"),(0,l.kt)("h2",{id:"ml_emotion"},"ML_emotion"),(0,l.kt)("p",null,"ML emotion is a multilabel model that returns the emotions expressed in a sentence or subsentence. The model is composed by multiple adapters trained on diverses datasets, then fine-tuned on original goemotion dataset and its french translation. \"value\"'s value is always 1, since it's float value is not relevant on this task."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Emotion"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"neutral"),(0,l.kt)("td",{parentName:"tr",align:null},"No particular emotion in this sentence.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"admiration"),(0,l.kt)("td",{parentName:"tr",align:null},"Finding something impressive or worthy of respect.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amusement"),(0,l.kt)("td",{parentName:"tr",align:null},"Finding something funny or being entertained.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"anger"),(0,l.kt)("td",{parentName:"tr",align:null},"A strong feeling of displeasure or antagonism.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"annoyance"),(0,l.kt)("td",{parentName:"tr",align:null},"Mild anger irritation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"approval"),(0,l.kt)("td",{parentName:"tr",align:null},"Having or expressing a favorable opinion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"caring"),(0,l.kt)("td",{parentName:"tr",align:null},"Displaying kindness and concern for others.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confusion"),(0,l.kt)("td",{parentName:"tr",align:null},"Lack of understanding uncertainty.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"curiosity"),(0,l.kt)("td",{parentName:"tr",align:null},"A strong desire to know or learn something.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"desire"),(0,l.kt)("td",{parentName:"tr",align:null},"A strong feeling of wanting something or wishing for something to happen.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disappointment"),(0,l.kt)("td",{parentName:"tr",align:null},"Sadness or displeasure caused by the nonfulfillment of one\u2019s hopes or expectations.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disapproval"),(0,l.kt)("td",{parentName:"tr",align:null},"Having or expressing an unfavorable opinion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disgust"),(0,l.kt)("td",{parentName:"tr",align:null},"Revulsion or strong disapproval aroused by something unpleasant or offensive.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"embarrassment"),(0,l.kt)("td",{parentName:"tr",align:null},"Self-consciousness shame or awkwardness.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"excitement"),(0,l.kt)("td",{parentName:"tr",align:null},"Feeling of great enthusiasm and eagerness.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fear"),(0,l.kt)("td",{parentName:"tr",align:null},"Being afraid or worried.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gratitude"),(0,l.kt)("td",{parentName:"tr",align:null},"A feeling of thankfulness and appreciation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grief"),(0,l.kt)("td",{parentName:"tr",align:null},"Intense sorrow especially caused by someone\u2019s death.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"joy"),(0,l.kt)("td",{parentName:"tr",align:null},"A feeling of pleasure and happiness.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"love"),(0,l.kt)("td",{parentName:"tr",align:null},"A strong positive emotion of regard and affection.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nervousness"),(0,l.kt)("td",{parentName:"tr",align:null},"Apprehension worry anxiety.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"optimism"),(0,l.kt)("td",{parentName:"tr",align:null},"Hopefulness and confidence about the future or the success of something.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pride"),(0,l.kt)("td",{parentName:"tr",align:null},"Pleasure or satisfaction due to ones own achievements or the achievements of those with whom one is closely associated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"realization"),(0,l.kt)("td",{parentName:"tr",align:null},"Becoming aware of something.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relief"),(0,l.kt)("td",{parentName:"tr",align:null},"Reassurance and relaxation following release from anxiety or distress.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remorse"),(0,l.kt)("td",{parentName:"tr",align:null},"Regret or guilty feeling.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sadness"),(0,l.kt)("td",{parentName:"tr",align:null},"Emotional pain sorrow.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"surprise"),(0,l.kt)("td",{parentName:"tr",align:null},"Feeling astonished startled by something unexpected.")))),(0,l.kt)("p",null,"Main data source : ",(0,l.kt)("inlineCode",{parentName:"p"},'@misc{demszky2020goemotions, title={GoEmotions: A Dataset of Fine-Grained Emotions}, author={Dorottya Demszky and Dana Movshovitz-Attias and Jeongwoo Ko and Alan Cowen and Gaurav Nemade and Sujith Ravi}, year={2020}, eprint={2005.00547}, archivePrefix={arXiv}, primaryClass={cs.CL} } Adapters models: @inproceedings{pfeiffer2020AdapterHub, title={AdapterHub: A Framework for Adapting Transformers}, author={Jonas Pfeiffer and Andreas R\\"uckl\\\'{e} and Clifton Poth and Aishwarya Kamath and Ivan Vuli\\\'{c} and Sebastian Ruder and Kyunghyun Cho and Iryna Gurevych}, booktitle={Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP 2020): Systems Demonstrations}, year={2020}, address = "Online", publisher = "Association for Computational Linguistics", url = "https://www.aclweb.org/anthology/2020.emnlp-demos.7", pages = "46--54", }')),(0,l.kt)("h2",{id:"ner"},"NER"),(0,l.kt)("p",null,"The NER sub-api lists all the Numeral Entities and Named Entities found in the sentence."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"CONSTRAINTS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Describes the type of entity found"),(0,l.kt)("td",{parentName:"tr",align:null},"For proper nouns, can either be LOCATION or PERSON. For other entities, see Entity types")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"Value Object"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"sentence-type"},"Sentence Type"),(0,l.kt)("h3",{id:"sentence-acts-object"},"Sentence Acts Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"predict"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Type chosen by the algorithm.")))),(0,l.kt)("h3",{id:"sentence-acts-details-object"},"Sentence Acts Details Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"KEY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:"center"},"EXAMPLE"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"assert"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Probability that the sentence is an assertion."),(0,l.kt)("td",{parentName:"tr",align:"center"},'"I am a developer."')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"command"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Probability that the sentence is a command."),(0,l.kt)("td",{parentName:"tr",align:"center"},'"Give me a response."')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"question_open"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Probability that the sentence is an open-ended question."),(0,l.kt)("td",{parentName:"tr",align:"center"},'"What is the best solution of NLP in French?"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"question_yn"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Probability that the sentence is a close-ended question."),(0,l.kt)("td",{parentName:"tr",align:"center"},'"Do you have a question?"')))),(0,l.kt)("h2",{id:"subsentences"},"Subsentences"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"KEY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"start_id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Id of the first token of the subsentence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"end_id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Id of the last token of the subsentence")))))}c.isMDXComponent=!0}}]);
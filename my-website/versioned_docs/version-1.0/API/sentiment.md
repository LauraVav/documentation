---
sidebar_position: 16
---

# Sentiment

Go back to the [Sentence Object](https://www.lettria.com/documentation/docs/API/lettria-sentence-object).

## Sentiment Object

| KEY          	| TYPE                                          	| DESCRIPTION                                                	|
|--------------	|-----------------------------------------------	|------------------------------------------------------------	|
| subsentences 	| list of [Subsentences Sentiment Element Object](https://www.lettria.com/documentation/docs/API/sentiment#subsentences-sentiment-object) 	| Source of all sentiments elements divided by subsentences  	|
| elements     	| list of [Sentiment Element Object](https://www.lettria.com/documentation/docs/API/sentiment#sentiment-element-object)              	| Specific source for all sentiment elements in the sentence 	|
| values       	| [Sentiment Values Object](https://www.lettria.com/documentation/docs/API/sentiment#sentiment-values-object)                       	| normalized total values for sentiment                      	|

Sentiment values are available at the following levels of granularity: sentence, subsentence and element.

## Subsentences Sentiment Object

| KEY      	| TYPE                             	| DESCRIPTION                                                   	|
|----------	|----------------------------------	|---------------------------------------------------------------	|
| sentence 	| string                           	| Source of all sentiments elements divided by subsentences     	|
| start_id 	| int                              	| Id of the first token of the subsentence                      	|
| end_id   	| int                              	| Id of the last token of the subsentence                       	|
| elements 	| list of [Sentiment Element Objets](https://www.lettria.com/documentation/docs/API/sentiment#sentiment-element-object) 	| Specific source for all sentiment elements in the subsentence 	|
| values   	| [Sentiment Values Object](https://www.lettria.com/documentation/docs/API/sentiment#sentiment-values-object)          	| normalized values for sentiment of subsentence                	|

## Sentiment Element Object

| KEY     	| SUBKEY 	| TYPE   	| DESCRIPTION                               	| CONSTRAINTS    	|
|---------	|--------	|--------	|-------------------------------------------	|----------------	|
| source  	| index  	| int    	| Index of the source word for this element 	| -              	|
| -       	| lemma  	| string 	| source's lemma                            	| -              	|
| -       	| lemma  	| string 	| source's source                           	| -              	|
| subject 	| index  	| int    	| Index of the subject for this element     	| -              	|
| -       	| lemma  	| string 	| subject's lemma                           	| -              	|
| -       	| source 	| string 	| subject's source                          	| -              	|
| target  	| index  	| int    	| Index of the target for this element      	| -              	|
| -       	| lemma  	| string 	| target's lemma                            	| -              	|
| -       	| source 	| string 	| target's source                           	| -              	|
| value   	| -      	| float  	| Indice of the sentiment                   	| -1 < value < 1 	|

Subject is the word which represents the subject of the action1 

Source is the word which conveys the sentiment

Target is the word which represents the target of the sentiment

## Sentiment Values Object

| KEY      	| TYPE  	| DESCRIPTION                                                          	| CONSTRAINTS        	|
|----------	|-------	|----------------------------------------------------------------------	|--------------------	|
| positive 	| float 	| normalized addition of all positive sentiment values in the sentence 	| 0 <= positive < 1  	|
| negative 	| float 	| normalized addition of all negative sentiment values in the sentence 	| -1 < negative <= 0 	|
| total    	| float 	| positive + negative                                                  	| -1 < total < 1     	|


Values are calculated either by using sentiment elements objects if available, or by a prediction model at the subsentence level. Values are normalized to stay in the the [-1 : 1] interval between element, subsentence and sentence level therefore comparisons should be made made with elements of the same depth.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "elements": [
        {
            "source": {
                "index": 1,
                "lemma": "aimer",
                "source": "aime"
            },
            "subject": {
                "index": 0,
                "lemma": "il",
                "source": "elle"
            },
            "target": {
                "index": 3,
                "lemma": "chien",
                "source": "chiens"
            },
            "value": 0.46
        }
    ],
    "values": {
        "negative": 0,
        "positive": 0.17,
        "total": 0.17
    },
    "subsentences": {
        "sentence": "elle aime les chiens",
        "start_id": 0,
        "end_id": 3,
        "elements": [
            {
                "source": {
                    "index": 1,
                    "lemma": "aimer",
                    "source": "aime"
                },
                "subject": {
                    "index": 0,
                    "lemma": "il",
                    "source": "elle"
                },
                "target": {
                    "index": 3,
                    "lemma": "chien",
                    "source": "chiens"
                },
                "value": 0.27
            }
        ],
        "values": {
                "negative": 0,
                "positive": 0.17,
                "total": 0.17
        }
    }
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "elements": [
        {
            "source": {
                "index": 1,
                "lemma": "aimer",
                "source": "aime"
            },
            "subject": {
                "index": 0,
                "lemma": "il",
                "source": "elle"
            },
            "target": {
                "index": 3,
                "lemma": "chien",
                "source": "chiens"
            },
            "value": 0.46
        }
    ],
    "values": {
        "negative": 0,
        "positive": 0.17,
        "total": 0.17
    },
    "subsentences": {
        "sentence": "elle aime les chiens",
        "start_id": 0,
        "end_id": 3,
        "elements": [
            {
                "source": {
                    "index": 1,
                    "lemma": "aimer",
                    "source": "aime"
                },
                "subject": {
                    "index": 0,
                    "lemma": "il",
                    "source": "elle"
                },
                "target": {
                    "index": 3,
                    "lemma": "chien",
                    "source": "chiens"
                },
                "value": 0.27
            }
        ],
        "values": {
                "negative": 0,
                "positive": 0.17,
                "total": 0.17
        }
    }
}
```

</TabItem>
</Tabs>

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)
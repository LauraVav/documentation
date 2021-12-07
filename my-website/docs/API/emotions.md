---
sidebar_position: 12
---

# Emotions

Go back to the [Sentence Object](https://www.lettria.com/documentation/docs/API/lettria-sentence-object).

## Emotions Object

| KEY          	| TYPE                                         	| DESCRIPTION                                              	|
|--------------	|----------------------------------------------	|----------------------------------------------------------	|
| subsentences 	| list of [Subsentences Emotions Element Object](https://www.lettria.com/documentation/docs/API/emotions#emotions-subsentences-object) 	| Source of all emotions elements divided by subsentences  	|
| elements     	| list of [Emotions Element Object](https://www.lettria.com/documentation/docs/API/emotions#emotions-element-object)              	| Specific source for all emotion elements in the sentence 	|
| values       	| [Emotions Values Object](https://www.lettria.com/documentation/docs/API/emotions#emotions-values-object)                       	| normalized total values for emotion                      	|

Emotions values are available at the following levels of granularity: sentence, subsentence and element.

## Emotions Subsentences Object

| KEY      	| TYPE                            	| DESCRIPTION                                                 	|
|----------	|---------------------------------	|-------------------------------------------------------------	|
| sentence 	| string                          	| Source of all emotions elements divided by subsentences     	|
| start_id 	| int                             	| Id of the first token of the subsentence                    	|
| end_id   	| int                             	| Id of the last token of the subsentence                     	|
| elements 	| list of [Emotions Element Objets](https://www.lettria.com/documentation/docs/API/emotions#emotions-element-object) 	| Specific source for all emotion elements in the subsentence 	|
| values   	| [Emotions Values Object](https://www.lettria.com/documentation/docs/API/emotions#emotions-values-object)          	| normalized values for emotion of subsentence                	|

## Emotions Element Object

| KEY     	| TYPE   	| DESCRIPTION 	| CONSTRAINTS                               	|
|---------	|--------	|-------------	|-------------------------------------------	|
| source  	| index  	| int         	| Index of the source word for this element 	|
| -       	| lemma  	| string      	| source's lemma                            	|
| -       	| lemma  	| string      	| source's source                           	|
| subject 	| index  	| int         	| Index of the subject for this element     	|
| -       	| lemma  	| string      	| subject's lemma                           	|
| -       	| source 	| string      	| subject's source                          	|
| target  	| index  	| int         	| Index of the target for this element      	|
| -       	| lemma  	| string      	| target's lemma                            	|
| -       	| source 	| string      	| target's source                           	|
| type    	| -      	| string      	| Type of emotion                           	|
| value   	| -      	| float       	| Indice of the emotion                     	|

Subject is the word which represents the subject of the action

Source is the word which conveys the emotion

Target is the word which represents the target of the emotion

## Emotions Values Object

| KEY       	| TYPE  	| DESCRIPTION      	| CONSTRAINTS        	|
|-----------	|-------	|------------------	|--------------------	|
| happiness 	| float 	| normalized total 	| 0 <= happiness < 1 	|
| sadness   	| float 	| normalized total 	| 0 <= sadness < 1   	|
| anger     	| float 	| normalized total 	| -1 < anger < 1     	|
| surprise  	| float 	| normalized total 	| -1 < surprise < 1  	|
| disgust   	| float 	| normalized total 	| -1 < disgust < 1   	|
| fear      	| float 	| normalized total 	| -1 < fear < 1      	|

Values are calculated by using emotion elements objects. Values are normalized to stay in the the [-1 : 1] interval between element, subsentence and sentence level therefore comparisons should be made made with elements of the same depth.

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
            "type": "happiness",
            "value": 0.46
        }
    ],
    "values": {
        "anger": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0.17,
        "sadness": 0,
        "surprise": 0
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
                "type": "happiness",
                "value": 0.46
            }
        ],
        "values": {
                "negative": 0,
                "positive": 0.27,
                "total": 0.27
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
            "type": "happiness",
            "value": 0.46
        }
    ],
    "values": {
        "anger": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0.17,
        "sadness": 0,
        "surprise": 0
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
                "type": "happiness",
                "value": 0.46
            }
        ],
        "values": {
                "negative": 0,
                "positive": 0.27,
                "total": 0.27
        }
    }
}
```

</TabItem>
</Tabs>
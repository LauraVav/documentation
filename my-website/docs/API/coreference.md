---
sidebar_position: 10
---

# Coreference

Go back to the [Sentence Object](https://www.lettria.com/documentation/docs/API/lettria-sentence-object).

## Coreference Object

| KEY       	| TYPE             	| DESCRIPTION                                                                          	| CONSTRAINTS         	|
|-----------	|------------------	|--------------------------------------------------------------------------------------	|---------------------	|
| source    	| string           	| source word that makes the coreference query                                         	| -                   	|
| index     	| int              	| index of the source word                                                             	| index >= 0          	|
| precision 	| float            	| precision indices based on how the algorithm found the coreference. Higher is better 	| 0 <= precision <= 1 	|
| reference 	| [Reference Object](https://www.lettria.com/documentation/docs/API/coreference#reference-object) 	| describes the best match for the coreference query                                   	|                     	|

## Reference Object

| KEY             	| TYPE           	| DESCRIPTION                                 	| CONSTRAINTS                                      	|
|-----------------	|----------------	|---------------------------------------------	|--------------------------------------------------	|
| source          	| string         	| source word of the reference object         	| -                                                	|
| lemma           	| string         	| lemma of the reference                      	| -                                                	|
| id              	| int            	| database id of the reference                	| id > 0. Unique for each reference object created 	|
| category        	| list of string 	| reference's categories                      	| -                                                	|
| category_parent 	| list of string 	| parent categories of reference's categories 	|                                                  	|

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
[
    {
        "index": 0, 
        "precision": 0.3, 
        "reference": 
        {
            "category": 
            [
                "human"
            ], 
            "category_parent": 
            [
                "PERSON"
            ], 
            "id": 0, 
            "lemma": "USER", 
            "source": "USER"
        }, 
        "source": "je"
    }, 
    {
        "index": 1, 
        "precision": 0.6, 
        "reference": 
        {
            "category": 
            [
                "dog"
            ], 
            "category_parent": 
            [
                "ANIMAL"
            ], 
            "id": 179, 
            "lemma": "chien", 
            "source": "chien"
        }, 
    "source": "le"
    }
]
```

</TabItem>
<TabItem value="json" label="JSON">

```json
[
    {
        "index": 0, 
        "precision": 0.3, 
        "reference": 
        {
            "category": 
            [
                "human"
            ], 
            "category_parent": 
            [
                "PERSON"
            ], 
            "id": 0, 
            "lemma": "USER", 
            "source": "USER"
        }, 
        "source": "je"
    }, 
    {
        "index": 1, 
        "precision": 0.6, 
        "reference": 
        {
            "category": 
            [
                "dog"
            ], 
            "category_parent": 
            [
                "ANIMAL"
            ], 
            "id": 179, 
            "lemma": "chien", 
            "source": "chien"
        }, 
    "source": "le"
    }
]
```

</TabItem>
</Tabs>
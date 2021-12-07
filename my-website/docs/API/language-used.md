---
sidebar_position: 4
---

# Language Used

Go back to the [Sentence Object](https://www.lettria.com/documentation/docs/API/lettria-sentence-object).

## Language used Object

Language code follows [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

| KEY            	| TYPE            	| DESCRIPTION                                      	|
|----------------	|-----------------	|--------------------------------------------------	|
| predict        	| string          	| cast fr because Lettria exits in French actually 	|
| sentence level 	| [Language Object](https://www.lettria.com/documentation/docs/API/language-used#language-object) 	| Predict language of sentence                     	|
| word level     	| [Language Object](https://www.lettria.com/documentation/docs/API/language-used#language-object) 	| Predict language per word                        	|

## Language Object

probabilities for 140 languages

| KEY 	| TYPE  	| DESCRIPTION 	|
|-----	|-------	|-------------	|
| da  	| float 	| Danish      	|
| de  	| float 	| German      	|
| en  	| float 	| English     	|
| es  	| float 	| Spanish     	|
| fi  	| float 	| Finnish     	|
| fr  	| float 	| French      	|
| hu  	| float 	| Hungarian   	|
| it  	| float 	| Italian     	|
| kk  	| float 	| Kazakh      	|
| nl  	| float 	| Dutch       	|
| no  	| float 	| Norwegian   	|
| pt  	| float 	| Portuguese  	|
| ru  	| float 	| Russian     	|
| sv  	| float 	| Swedish     	|
| tr  	| float 	| Turkish     	|
| ... 	| float 	| ...         	|

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
"sentence_level":{
    "label":"fr",
    "accuracy":0.8050500154495239
    },
    "word_level":
    {
    "i":1,
    "source":"je",
    "language":[
        {
        "label":"sr",
        "accuracy":0.8350609540939331
        },
        {
        "label":"fr",
        "accuracy":0.15938909351825714
        },
        {
        "label":"sl",
        "accuracy":0.003785850713029504
        }
    ]
    },
    {
    "i":2,
    "source":"suis",
    "language":[
        {
        "label":"fr",
        "accuracy":0.9970543384552002
        },
        {
        "label":"en",
        "accuracy":0.002935485215857625
        },
        {
        "label":"la"
        "accuracy":0.00004386376895126887
        }
    ]
    },
    {
    "i":3,
    "source":"Lettria",
    "language":[
        {
        "label":"it",
        "accuracy":0.9687148332595825
        },
        {
        "label":"de",
        "accuracy":0.012400689534842968
        },
        {
        "label":"es",
        "accuracy":0.003765000030398369
        }
    ]
    }
    ],
    "predict":"fr"
}

```

</TabItem>
<TabItem value="json" label="JSON">

```json
"sentence_level":{
    "label":"fr",
    "accuracy":0.8050500154495239
    },
    "word_level":
    {
    "i":1,
    "source":"je",
    "language":[
        {
        "label":"sr",
        "accuracy":0.8350609540939331
        },
        {
        "label":"fr",
        "accuracy":0.15938909351825714
        },
        {
        "label":"sl",
        "accuracy":0.003785850713029504
        }
    ]
    },
    {
    "i":2,
    "source":"suis",
    "language":[
        {
        "label":"fr",
        "accuracy":0.9970543384552002
        },
        {
        "label":"en",
        "accuracy":0.002935485215857625
        },
        {
        "label":"la"
        "accuracy":0.00004386376895126887
        }
    ]
    },
    {
    "i":3,
    "source":"Lettria",
    "language":[
        {
        "label":"it",
        "accuracy":0.9687148332595825
        },
        {
        "label":"de",
        "accuracy":0.012400689534842968
        },
        {
        "label":"es",
        "accuracy":0.003765000030398369
        }
    ]
    }
    ],
    "predict":"fr"
}
```

</TabItem>
</Tabs>
---
sidebar_position: 8
---

# Parser Dependency

## Dependency Object

Dependence objects combine the results from the dependency parser with the understanding from the NLU api.

| KEY     	| TYPE                     	| DESCRIPTION                                      	| CONSTRAINTS            	|
|---------	|--------------------------	|--------------------------------------------------	|------------------------	|
| dep     	| string                   	| see list of [dependency tags](https://www.lettria.com/documentation/docs/API/Glossary/dependency-tags)                      	| -                      	|
| index   	| int                      	| base index of the token, links the APIs together 	| index >= 0             	|
| lemma   	| string                   	| -                                                	| -                      	|
| meaning 	| list of [Category Objects](https://www.lettria.com/documentation/docs/API/Glossary/categories) 	| -                                                	| -                      	|
| ref     	| int                      	| index of the parent dependence                   	| -1 for root, else >= 0 	|
| tag     	| string                   	| see Tags                                         	| -                      	|
| value   	| [Value Object](https://www.lettria.com/documentation/docs/API/ner#value-object)             	| -                                                	| -                      	|
| source  	| string                   	| source                                           	|                        	|

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
[
  {
    "dep": "nsubj",
    "index": 0,
    "lemma": "je",
    "len": 1,
    "meaning": [
      {
        "sub": "Pronom",
        "super": null
      }
    ],
    "ref": 1,
    "source": "je",
    "tag": "CLS",
    "value": "S-1"
  },
  {
    "dep": "root",
    "index": 1,
    "lemma": "promener",
    "len": 1,
    "meaning": [
      {
        "sub": "action_walk",
        "super": "ACTION"
      },
      {
        "sub": "action_move",
        "super": "ACTION"
      }
    ],
    "ref": -1,
    "source": "promene",
    "tag": "V",
    "value": null
  },
  {
    "dep": "det",
    "index": 2,
    "lemma": "mon",
    "len": 1,
    "meaning": [],
    "ref": 3,
    "source": "mon",
    "tag": "D",
    "value": null
  },
  {
    "dep": "obj",
    "index": 3,
    "lemma": "chien",
    "len": 1,
    "meaning": [
      {
        "sub": "dog",
        "super": "ANIMAL"
      }
    ],
    "ref": 1,
    "source": "chien",
    "tag": "N",
    "value": null
  }
]
```

</TabItem>
<TabItem value="json" label="JSON">

```json
[
  {
    "dep": "nsubj",
    "index": 0,
    "lemma": "je",
    "len": 1,
    "meaning": [
      {
        "sub": "Pronom",
        "super": null
      }
    ],
    "ref": 1,
    "source": "je",
    "tag": "CLS",
    "value": "S-1"
  },
  {
    "dep": "root",
    "index": 1,
    "lemma": "promener",
    "len": 1,
    "meaning": [
      {
        "sub": "action_walk",
        "super": "ACTION"
      },
      {
        "sub": "action_move",
        "super": "ACTION"
      }
    ],
    "ref": -1,
    "source": "promene",
    "tag": "V",
    "value": null
  },
  {
    "dep": "det",
    "index": 2,
    "lemma": "mon",
    "len": 1,
    "meaning": [],
    "ref": 3,
    "source": "mon",
    "tag": "D",
    "value": null
  },
  {
    "dep": "obj",
    "index": 3,
    "lemma": "chien",
    "len": 1,
    "meaning": [
      {
        "sub": "dog",
        "super": "ANIMAL"
      }
    ],
    "ref": 1,
    "source": "chien",
    "tag": "N",
    "value": null
  }
]
```

</TabItem>
</Tabs>

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)
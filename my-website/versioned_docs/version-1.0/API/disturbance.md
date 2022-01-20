---
sidebar_position: 7
---

# Disturbance

## Disturbance Object

Spell-checking object. Each token is associated with an object and is checked against our dictionary. If the token does not exist, a list of candidates will be suggested along with the most likely replacement. Gender and plural are not taken into account as the lemma will be the same regardless.

| KEY           	| TYPE       	| DESCRIPTION                                                                        	| CONSTRAINTS                                 	|
|---------------	|------------	|------------------------------------------------------------------------------------	|---------------------------------------------	|
| original      	| string     	| token as found in the sentence                                                     	| -                                           	|
| predict       	| string     	| predicted token after spell-checking, same as original for valid words             	| -                                           	|
| probabilities 	| dictionary 	| candidates for correction with correspond rank (0 being the most likely candidate) 	| Key only exists if word should be corrected 	|
| to_correct    	| int        	| 1 if token should be corrected but no replacement has been found                   	| 0 or 1                                      	|

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
[
  {
  "original":"pierre",
  "predict":"pierre",
  "to_correct":0
  },
  {
  "original":"aime",
  "predict":"aime",
  "to_correct":0
  },
  {
  "original":"les",
  "predict":"les",
  "to_correct":0
  },
  {
  "original":"banans",
  "predict":"banane",
  "probabilities":{
      "banals":2,
      "banane":0,
      "bananes":1,
      "banats":3,
      "banians":3,
      "bannans":3,
      "bannas":3,
      "bavans":3,
      "nanans":3
    },
  "to_correct":0
  }
]
```

</TabItem>
<TabItem value="json" label="JSON">

```json
[
  {
  "original":"pierre",
  "predict":"pierre",
  "to_correct":0
  },
  {
  "original":"aime",
  "predict":"aime",
  "to_correct":0
  },
  {
  "original":"les",
  "predict":"les",
  "to_correct":0
  },
  {
  "original":"banans",
  "predict":"banane",
  "probabilities":{
      "banals":2,
      "banane":0,
      "bananes":1,
      "banats":3,
      "banians":3,
      "bannans":3,
      "bannas":3,
      "bavans":3,
      "nanans":3
    },
  "to_correct":0
  }
]
```

</TabItem>
</Tabs>

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)
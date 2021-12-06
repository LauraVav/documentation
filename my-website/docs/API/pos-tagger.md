---
sidebar_position: 5
---

# POS Tagger

## POS Tagger Object

| INDEX 	| TYPE   	| DESCRIPTION               	|
|-------	|--------	|---------------------------	|
| 0     	| string 	| Word token                	|
| 1     	| string 	| See list of possible tags 	|

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
[
    [
        "you",
        "CLS"
    ],
    [
        "have",
        "V"
    ],
    [
        "access",
        "N"
    ],
    [
        "to",
        "P"
    ],
    [
        "the",
        "D"
    ],
    [
        "best",
        "JJ"
    ],
    [
        "comprehension",
        "N"
    ],
    [
        "of",
        "P"
    ],
    [
        "language",
        "N"
    ]
]
```

</TabItem>
<TabItem value="json" label="JSON">

```json
[
    [
        "you",
        "CLS"
    ],
    [
        "have",
        "V"
    ],
    [
        "access",
        "N"
    ],
    [
        "to",
        "P"
    ],
    [
        "the",
        "D"
    ],
    [
        "best",
        "JJ"
    ],
    [
        "comprehension",
        "N"
    ],
    [
        "of",
        "P"
    ],
    [
        "language",
        "N"
    ]
]
```

</TabItem>
</Tabs>
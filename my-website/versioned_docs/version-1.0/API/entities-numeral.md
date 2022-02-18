---
sidebar_position: 10
---

# Entities Numeral

## Numeral Entity Object

| KEY    	| TYPE          	| DESCRIPTION      	|
|--------	|---------------	|------------------	|
| entity 	| Entity Object 	| -                	|
| source 	| string        	| -                	|
| tag    	| string        	| see [Entity types](https://www.lettria.com/documentation/docs/API/Glossary/entities) 	|

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
[
    {
        "entity": {
            "centimeter": 200.0,
            "confidence": 0.99,
            "feet": 6.561679790026246,
            "inches": 78.74015748031496,
            "kilometer": 0.002,
            "meter": 2.0,
            "miles": 0.001242742,
            "scalar": 2.0,
            "unit": "m",
            "yard": 2.1872
        },
        "source": "2m",
        "tag": "distance"
    }
]
```

</TabItem>
<TabItem value="json" label="JSON">

```json
[
    {
        "entity": {
            "centimeter": 200.0,
            "confidence": 0.99,
            "feet": 6.561679790026246,
            "inches": 78.74015748031496,
            "kilometer": 0.002,
            "meter": 2.0,
            "miles": 0.001242742,
            "scalar": 2.0,
            "unit": "m",
            "yard": 2.1872
        },
        "source": "2m",
        "tag": "distance"
    }
]
```

</TabItem>
</Tabs>

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)
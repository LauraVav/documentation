---
sidebar_position: 15
---

# ML Sentiment

Go back to the [Sentence Object](https://www.lettria.com/documentation/docs/API/lettria-sentence-object).

## Subsentences IA Sentiment Object

| KEY         	| TYPE                                     	| DESCRIPTION                                               	|
|-------------	|------------------------------------------	|-----------------------------------------------------------	|
| sentence    	| list of Sentences ML Sentiment Object    	| Source of all sentiments elements divided by subsentences 	|
| subsentence 	| list of Subsentences ML Sentiment Object 	| Source of all sentiments elements divided by subsentences 	|

ml_sentiment values are available at the following levels of granularity: sentence and subsentence`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
{
    'ml_sentiment': {
        'sentence': {
            'value': 0.59
        },
        'subsentence': [
            0.59, -0.02
        ]
     }
 }
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    'ml_sentiment': {
        'sentence': {
            'value': 0.59
        },
        'subsentence': [
            0.59, -0.02
        ]
     }
 }
```

</TabItem>
</Tabs>

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)
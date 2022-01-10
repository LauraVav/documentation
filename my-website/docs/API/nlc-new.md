---
sidebar_position: 3
---

# NLC

Includes NER, NLP and NLU modules.

## NLC Object 

|     Key     	|           Type           	|           Description          	|       Contraints      	|
|:-----------:	|:------------------------:	|:------------------------------:	|:---------------------:	|
| lemma       	| string                   	| lemma                          	|                       	|
| source_pure 	| string                   	| the TRUE source                	|                       	|
| source      	| string                   	| the work source                	|                       	|
| index       	| integer                  	| absolute token index at input  	| index >= 0            	|
| tag         	| string                   	| pos tag                        	|                       	|
| dep         	| string                   	| see list of dependency tags    	|                       	|
| ref         	| integer                  	| index of the parent dependence 	| 1 for root, else >= 0 	|
| meaning     	| list of Category Objects 	| Known meanings for the item    	| Can be empty.         	|
| lemmatizer  	| Lemmatizer object        	| lemmatizer details             	|                       	|
| type_entity 	| Entity Object            	| entity type or null            	|                       	|
| value       	| entities                 	| Return entity or other         	| Can be None           	|

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
‘detail’ : [{
            ‘lemma’ : Mister # lemma
            ‘source_pure’ : Mr. # the TRUE source
            'source': Mister # the work source
            ‘index’ : [415,435] # absolute token index at input
            ‘tag’ : # postag
            ‘dep’ : # dep parser dep,
            ‘ref’ : token reference index (dependency parser),
            ‘meaning’ : []
            ‘lemmatizer’ : {} # lemmatizer details
            ‘type_entity’ : # type of entity or null
            ‘value’ : {} # return entity or other
            'dep' : "nsubj"
            },
           {...}, {…}, ….]
```

</TabItem>

</Tabs>

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)
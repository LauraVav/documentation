---
sidebar_position: 15
---

# Sentiment

## Sentiment Object

| KEY          	| TYPE                                          	| DESCRIPTION                                                	|
|--------------	|-----------------------------------------------	|------------------------------------------------------------	|
| subsentences 	| list of Subsentences Sentiment Element Object 	| Source of all sentiments elements divided by subsentences  	|
| elements     	| list of Sentiment Element Object              	| Specific source for all sentiment elements in the sentence 	|
| values       	| Sentiment Values Object                       	| normalized total values for sentiment                      	|

Sentiment values are available at the following levels of granularity: sentence, subsentence and element.

## Subsentences Sentiment Object

| KEY      	| TYPE                             	| DESCRIPTION                                                   	|
|----------	|----------------------------------	|---------------------------------------------------------------	|
| sentence 	| string                           	| Source of all sentiments elements divided by subsentences     	|
| start_id 	| int                              	| Id of the first token of the subsentence                      	|
| end_id   	| int                              	| Id of the last token of the subsentence                       	|
| elements 	| list of Sentiment Element Objets 	| Specific source for all sentiment elements in the subsentence 	|
| values   	| Sentiment Values Object          	| normalized values for sentiment of subsentence                	|

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
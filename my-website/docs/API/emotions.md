---
sidebar_position: 14
---

# Emotions

## Emotions Object

| KEY          	| TYPE                                         	| DESCRIPTION                                              	|
|--------------	|----------------------------------------------	|----------------------------------------------------------	|
| subsentences 	| list of Subsentences Emotions Element Object 	| Source of all emotions elements divided by subsentences  	|
| elements     	| list of Emotions Element Object              	| Specific source for all emotion elements in the sentence 	|
| values       	| Emotions Values Object                       	| normalized total values for emotion                      	|

Emotions values are available at the following levels of granularity: sentence, subsentence and element.

## Emotions Subsentences Object

| KEY      	| TYPE                            	| DESCRIPTION                                                 	|
|----------	|---------------------------------	|-------------------------------------------------------------	|
| sentence 	| string                          	| Source of all emotions elements divided by subsentences     	|
| start_id 	| int                             	| Id of the first token of the subsentence                    	|
| end_id   	| int                             	| Id of the last token of the subsentence                     	|
| elements 	| list of Emotions Element Objets 	| Specific source for all emotion elements in the subsentence 	|
| values   	| Emotions Values Object          	| normalized values for emotion of subsentence                	|

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
---
sidebar_position: 6
---

# NLC

Includes NER, NLP and NLU modules.

## NER 

The NER sub-api lists all the Numeral Entities and Named Entities found in the sentence.

### NER Object

| KEY    	| TYPE         	| DESCRIPTION                        	| CONSTRAINTS                                                                              	|
|--------	|--------------	|------------------------------------	|------------------------------------------------------------------------------------------	|
| source 	| string       	| -                                  	| -                                                                                        	|
| type   	| string       	| Describes the type of entity found 	| For proper nouns, can either be LOCATION or PERSON. For other entities, see Entity types 	|
| value  	| Value Object 	| -                                  	| -                                                                                        	|

### Value Object

A value object can either be a numeric value for some adjectives, an entity value for entities, or a 'null' value for names.

## NLP

### NLP Object

| KEY        	| TYPE              	| DESCRIPTION                                      	|
|------------	|-------------------	|--------------------------------------------------	|
| source     	| string            	| Words composing the token                        	|
| tag        	| string            	| see Tags                                         	|
| lemmatizer 	| Lemmatizer Object 	| Object with information regarding lemma of token 	|

### Lemmatizer Object

The content of the lemmatizer object is different for each tag. The table bellow references all the keys that are available, and lists the tags that will return them (see POS Tagger and list of tags).

| KEY         	| TYPE                            	| DESCRIPTION                                           	| CONSTRAINTS          	| TAGS                                                                    	|
|-------------	|---------------------------------	|-------------------------------------------------------	|----------------------	|-------------------------------------------------------------------------	|
| conjugate   	| list of Conjugate Objects       	| List possible conjugations                            	| see Conjugations     	| V                                                                       	|
| confidence  	| float                           	| level of confidence in the results (higher is better) 	| 0 <= confidence <= 1 	| (all)                                                                   	|
| gender      	| Gender Object                   	| describes the gender and plurality                    	| -                    	| VP, JJ, N, D, PD                                                        	|
| lemma       	| string                          	| lemmatized version of the source                      	| -                    	| C, CC, CLO, CLS, D, JJ, N, NP, PUNCT, P, PD, PROREL, RB, RB_WH, SYM, UH 	|
| infinit     	| list of string                  	| list of possible verb infinitives                     	| -                    	| V, VP                                                                   	|
| number      	| float                           	| value                                                 	| -                    	| CD                                                                      	|
| mode        	| string                          	| -                                                     	| -                    	| D, PD                                                                   	|
| possessing  	| int                             	| see Possessive determiners                            	| -                    	| D, PD                                                                   	|
| pronom      	| int                             	| see Pronouns                                          	| -                    	| CLS                                                                     	|
| designation 	| list of string                  	| see Categories                                        	| -                    	| CLO                                                                     	|
| category    	| string                          	| see Adverb Categories                                 	| -                    	| RB                                                                      	|
| source      	| string                          	| -                                                     	| -                    	| RB, P                                                                   	|
| sens        	| list of Preposition sens object 	| -                                                     	| -                    	| P                                                                       	|

### Conjugate Object

| KEY    	| TYPE   	| DESCRIPTION  	|
|--------	|--------	|--------------	|
| mode   	| string 	| -            	|
| pronom 	| int    	| see Pronouns 	|
| temps  	| string 	| -            	|

### Gender Object

Gives information about the gender and plurality of a word.

| KEY    	| TYPE 	| DESCRIPTION 	| CONSTRAINTS   	|
|--------	|------	|-------------	|---------------	|
| female 	| bool 	| -           	| true or false 	|
| plural 	| bool 	| -           	| true or false 	|


### Preposition sens Object

| KEY      	| TYPE   	| DESCRIPTION                	|
|----------	|--------	|----------------------------	|
| sens     	| string 	| see Preposition sens       	|
| category 	| string 	| see Preposition categories 	|
| next     	| string 	| see Preposition next       	|

## NLU

Understanding for each token in the sentence.

### NLU Object

| KEY     	| TYPE                     	| DESCRIPTION                                                      	| CONSTRAINTS                                                              	|
|---------	|--------------------------	|------------------------------------------------------------------	|--------------------------------------------------------------------------	|
| index   	| int                      	| Index in the initial tokenized sentence                          	| index >= 0                                                               	|
| len     	| int                      	| Number of tokens that have been merged (1 if no merge)           	| len >= 1                                                                 	|
| meaning 	| list of Category Objects 	| Known meanings for the item                                      	| Can be empty.                                                            	|
| source  	| string                   	| -                                                                	| if len is greater than one, will be the merged sources of original items 	|
| value   	| dict                     	| Depends on tag. Most values are in the 'scalar' key of this dict 	|                                                                          	|


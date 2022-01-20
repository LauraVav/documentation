---
sidebar_position: 5
---

# Lemmatizer

The content of the lemmatizer object is different for each tag. The table bellow references all the keys that are available, and lists the tags that will return them (see POS Tagger and list of tags).

## Lemmatizer object

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
| sens        	| list of Preposition sens object 	| -                                                     	| -                    	| P    

## Conjugate Object

| KEY    	| TYPE   	| DESCRIPTION  	|
|--------	|--------	|--------------	|
| mode   	| string 	| -            	|
| pronom 	| int    	| see Pronouns 	|
| temps  	| string 	| -            	|

## Gender Object

Gives information about the gender and plurality of a word.

| KEY    	| TYPE 	| DESCRIPTION 	| CONSTRAINTS   	|
|--------	|------	|-------------	|---------------	|
| female 	| bool 	| -           	| true or false 	|
| plural 	| bool 	| -           	| true or false 	|


## Preposition sens Object

| KEY      	| TYPE   	| DESCRIPTION                	|
|----------	|--------	|----------------------------	|
| sens     	| string 	| see Preposition sens       	|
| category 	| string 	| see Preposition categories 	|
| next     	| string 	| see Preposition next       	|


[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)
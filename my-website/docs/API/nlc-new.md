---
sidebar_position: 6
---

# NLC

Includes NER, NLP and NLU modules.

## NLC Object 

|     KEY    	|           TYPE           	|                            DESCRIPTION                           	|                                        CONSTRAINTS                                       	|
|:----------:	|:------------------------:	|:----------------------------------------------------------------:	|:----------------------------------------------------------------------------------------:	|
| source     	| string                   	| -                                                                	| -                                                                                        	|
| type       	| string                   	| Describes the type of entity found                               	| For proper nouns, can either be LOCATION or PERSON. For other entities, see Entity types 	|
| value      	| Value Object             	| -                                                                	| -                                                                                        	|
| source     	| string                   	| Words composing the token                                        	|                                                                                          	|
| tag        	| string                   	| see Tags                                                         	|                                                                                          	|
| lemmatizer 	| Lemmatizer Object        	| Object with information regarding lemma of token                 	|                                                                                          	|
| index      	| int                      	| Index in the initial tokenized sentence                          	| index >= 0                                                                               	|
| len        	| int                      	| Number of tokens that have been merged (1 if no merge)           	| len >= 1                                                                                 	|
| meaning    	| list of Category Objects 	| Known meanings for the item                                      	| Can be empty.                                                                            	|
| source     	| string                   	| -                                                                	| if len is greater than one, will be the merged sources of original items                 	|
| value      	| dict                     	| Depends on tag. Most values are in the 'scalar' key of this dict 	|                                                                                          	|

## Value Object

A value object can either be a numeric value for some adjectives, an entity value for entities, or a 'null' value for names.


```py
	‘detail’ : [{
			‘lemma’ : Monsieur # lemma
			‘source_pure’ : Mr. # la VRAI source
			'source': Monsieur # la source de travail
			‘index’ : [415,435] # index du token absolue a l input
			‘tag’ : # postag
			‘dep’ : # dep parser dep,
			‘ref’ : index de ref du token (parser dep),
			‘meaning’ : []
			‘lemmatizer’ : {} # detail du lemmatizer
			‘type_entity’ : # type de l entity sinon nul
			‘value’ : {} # retour entity ou autre
			'dep' : "nsubj"
			'ref' : 1 
		    },
		   {...}, {…}, ….]
```

## Lemmatizer Object

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


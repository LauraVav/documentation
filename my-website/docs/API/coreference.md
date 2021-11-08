---
sidebar_position: 12
---

# Coreference

## Coreference Object

| KEY       	| TYPE             	| DESCRIPTION                                                                          	| CONSTRAINTS         	|
|-----------	|------------------	|--------------------------------------------------------------------------------------	|---------------------	|
| source    	| string           	| source word that makes the coreference query                                         	| -                   	|
| index     	| int              	| index of the source word                                                             	| index >= 0          	|
| precision 	| float            	| precision indices based on how the algorithm found the coreference. Higher is better 	| 0 <= precision <= 1 	|
| reference 	| Reference Object 	| describes the best match for the coreference query                                   	|                     	|

## Reference Object

| KEY             	| TYPE           	| DESCRIPTION                                 	| CONSTRAINTS                                      	|
|-----------------	|----------------	|---------------------------------------------	|--------------------------------------------------	|
| source          	| string         	| source word of the reference object         	| -                                                	|
| lemma           	| string         	| lemma of the reference                      	| -                                                	|
| id              	| int            	| database id of the reference                	| id > 0. Unique for each reference object created 	|
| category        	| list of string 	| reference's categories                      	| -                                                	|
| category_parent 	| list of string 	| parent categories of reference's categories 	|                                                  	|
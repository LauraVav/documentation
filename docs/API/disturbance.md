---
sidebar_position: 6
---

# Disturbance

## Disturbance Object

Spell-checking object. Each token is associated with an object and is checked against our dictionary. If the token does not exist, a list of candidates will be suggested along with the most likely replacement. Gender and plural are not taken into account as the lemma will be the same regardless.

| KEY           	| TYPE       	| DESCRIPTION                                                                        	| CONSTRAINTS                                 	|
|---------------	|------------	|------------------------------------------------------------------------------------	|---------------------------------------------	|
| original      	| string     	| token as found in the sentence                                                     	| -                                           	|
| predict       	| string     	| predicted token after spell-checking, same as original for valid words             	| -                                           	|
| probabilities 	| dictionary 	| candidates for correction with correspond rank (0 being the most likely candidate) 	| Key only exists if word should be corrected 	|
| to_correct    	| int        	| 1 if token should be corrected but no replacement has been found                   	| 0 or 1                                      	|
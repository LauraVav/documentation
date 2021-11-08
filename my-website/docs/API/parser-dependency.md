---
sidebar_position: 11
---

# Parser dependency

## Dependency Object

Dependence objects combine the results from the dependency parser with the understanding from the NLU api.

| KEY     	| TYPE                     	| DESCRIPTION                                      	| CONSTRAINTS            	|
|---------	|--------------------------	|--------------------------------------------------	|------------------------	|
| dep     	| string                   	| see list of dependency tags                      	| -                      	|
| index   	| int                      	| base index of the token, links the APIs together 	| index >= 0             	|
| lemma   	| string                   	| -                                                	| -                      	|
| meaning 	| list of Category Objects 	| -                                                	| -                      	|
| ref     	| int                      	| index of the parent dependence                   	| -1 for root, else >= 0 	|
| tag     	| string                   	| see Tags                                         	| -                      	|
| value   	| Value Object             	| -                                                	| -                      	|
| source  	| string                   	| source                                           	|                        	|
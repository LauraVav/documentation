---
sidebar_position: 3
---

# Document Class

**Document** inherits from [TextChunk](#).

**Document** stores the information for a document (for example an online review for a product or a news article). The class is iterable and will yield instances of **Sentence**.

## Attributes / Properties

| Name                                                                                   	| Type                                                                                               	| Description                                                    	|
|----------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------	|----------------------------------------------------------------	|
| sentences                                                                              	| list of [Sentence](#) instances       	| List of **Sentences** of the document.                         	|
| subsentences                                                                           	| list of [Subsentence](#) instances 	| Direct access to list of **Subsentence** for the document.     	|
| id                                                                                     	| str                                                                                                	| Id of document, by default sequential integer if not provided. 	|
| [common properties](#) 	| depends on property                                                                                	| Properties allowing access to specific data (pos, token etc.). 	|

